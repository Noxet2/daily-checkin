// Secure serverless function — runs on Vercel, API key never exposed to browser
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { exerciseId, exerciseTitle, exerciseTag, exerciseDescription, answers } = req.body;

    if (!exerciseId || !answers) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const firstAnswerText = Object.values(answers)[0] || '';

    try {
        const message = await client.messages.create({
            model: 'claude-haiku-4-5',
            max_tokens: 400,
            system: `You are a compassionate, brief mental health check-in assistant. The user is doing a daily ${exerciseTitle} exercise (${exerciseTag}).

Exercise goal: ${exerciseDescription}

Based on what they wrote, generate exactly 2 follow-up questions that build on their specific answer.

IMPORTANT RULES:
- If they say they have no negative thoughts, nothing is bothering them, or things are fine: do NOT ask about negative thoughts or problems. Instead ask about what's going well, what feels stable, or what they're noticing today.
- Make each question respond directly to what they actually wrote — not to a generic version of the exercise
- The second question should end with something concrete they could do or try, even something very small
- Each question is ONE sentence, warm and direct
- Return ONLY a valid JSON array of 2 strings, nothing else. Example: ["Question one?", "Question two?"]`,
            messages: [
                {
                    role: 'user',
                    content: `The user wrote: "${firstAnswerText}"`
                }
            ]
        });

        const responseText = message.content[0].text.trim();

        // Parse the JSON array Claude returns
        let questions;
        try {
            questions = JSON.parse(responseText);
            if (!Array.isArray(questions)) throw new Error('Not an array');
        } catch {
            // Fallback: treat as single question if JSON parsing fails
            questions = [responseText];
        }

        res.status(200).json({ questions });
    } catch (err) {
        console.error('Claude API error:', err.message);
        res.status(500).json({ error: 'Failed to generate questions' });
    }
};
