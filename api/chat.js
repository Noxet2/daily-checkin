// Secure serverless function — runs on Vercel, API key never exposed to browser
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

module.exports = async function handler(req, res) {
    // CORS headers so the browser can call this endpoint
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
        // Using claude-haiku-4-5 for low latency — the user is waiting for a question
        // before they can continue. Response quality is good enough for simple follow-up generation.
        const message = await client.messages.create({
            model: 'claude-haiku-4-5',
            max_tokens: 150,
            system: `You are a brief, warm mental health check-in assistant. The user is doing a daily ${exerciseTitle} exercise (${exerciseTag}).

Exercise goal: ${exerciseDescription}

Your task: Read what the user wrote and ask ONE adaptive follow-up question.

Rules:
- If they say they have no negative thoughts, nothing bothering them, or everything is fine: acknowledge this warmly and ask something that gently explores what IS going well, or what feels stable right now
- If they're clearly struggling: ask something compassionate that nudges them one small step forward
- Keep the question short — one sentence
- Be warm and direct, like a thoughtful person — not clinical
- Only the question itself. No preamble, no explanation, no markdown.`,
            messages: [
                {
                    role: 'user',
                    content: `The user wrote: "${firstAnswerText}"`
                }
            ]
        });

        const question = message.content[0].text.trim();
        res.status(200).json({ question });
    } catch (err) {
        console.error('Claude API error:', err.message);
        res.status(500).json({ error: 'Failed to generate question' });
    }
};
