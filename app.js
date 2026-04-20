// ===== SCIENCE-BASED EXERCISES =====
// Rotating daily exercises based on CBT, ACT, DBT, and behavioral activation research.

const EXERCISES = [
    {
        id: 'thought-record',
        title: 'Thought Record',
        tag: 'CBT',
        description: 'Catch a negative thought and challenge it with evidence.',
        aiFollowUp: true,
        steps: [
            {
                prompt: 'Describe the situation briefly.',
                placeholder: 'What happened, or what are you thinking about right now?',
                field: 'situation'
            },
            {
                prompt: 'What automatic thought came up?',
                placeholder: 'The thought that popped into your head...',
                field: 'thought'
            },
            {
                prompt: 'What evidence is there AGAINST this thought?',
                placeholder: 'What facts challenge or contradict this thought?',
                field: 'counter'
            },
            {
                prompt: 'Write a more balanced version of the thought.',
                placeholder: 'A more realistic perspective, even if you can\'t feel it yet...',
                field: 'balanced'
            }
        ]
    },
    {
        id: 'behavioral-activation',
        title: 'Behavioral Activation',
        tag: 'CBT',
        description: 'Notice what you did today. Action comes before feeling — not after.',
        aiFollowUp: true,
        steps: [
            {
                prompt: 'Name 3 things you did today.',
                placeholder: 'Even tiny things count. Got dressed. Made coffee. Opened a window.',
                field: 'activities'
            },
            {
                prompt: 'Did any of them shift how you felt, even slightly?',
                placeholder: 'Or did everything feel flat? Both are valid answers.',
                field: 'shift'
            },
            {
                prompt: 'Plan one small action for tomorrow.',
                placeholder: 'It can be very small — a 5 minute walk, one glass of water, texting someone.',
                field: 'plan'
            }
        ]
    },
    {
        id: 'grounding',
        title: '5-4-3-2-1 Grounding',
        tag: 'Mindfulness',
        description: 'Bring yourself back to the present moment using your senses.',
        info: 'This exercise works even when you feel numb. You don\'t need to feel anything — just notice.\n\n5 things you can SEE\n4 things you can TOUCH\n3 things you can HEAR\n2 things you can SMELL\n1 thing you can TASTE',
        steps: [
            {
                prompt: 'Name 5 things you can see right now.',
                placeholder: 'Look around slowly. List what you see.',
                field: 'see'
            },
            {
                prompt: 'Name 4 things you can physically touch or feel.',
                placeholder: 'Your chair, your feet on the floor, your clothes...',
                field: 'touch'
            },
            {
                prompt: 'Name 3 things you can hear.',
                placeholder: 'Background noise, your breathing, anything...',
                field: 'hear'
            },
            {
                prompt: 'How do you feel compared to when you started?',
                placeholder: 'Even a tiny shift? Or the same? Either is fine.',
                field: 'after'
            }
        ]
    },
    {
        id: 'values',
        title: 'Values Check',
        tag: 'ACT',
        description: 'When feelings go quiet, values can still guide you.',
        aiFollowUp: true,
        info: 'In Acceptance and Commitment Therapy, values are not feelings — they are directions. You can act on a value even when you feel nothing.',
        steps: [
            {
                prompt: 'What is one thing that matters to you — even if you can\'t feel it right now?',
                placeholder: 'Family, learning, honesty, health, creating something...',
                field: 'value'
            },
            {
                prompt: 'Did you do anything today that moved toward that value, even slightly?',
                placeholder: 'Or did today pull you away from it? Both answers are useful.',
                field: 'action'
            },
            {
                prompt: 'One small thing you could do tomorrow that aligns with this value.',
                placeholder: 'It doesn\'t have to feel meaningful — just point in the right direction.',
                field: 'tomorrow'
            }
        ]
    },
    {
        id: 'self-compassion',
        title: 'Self-Compassion',
        tag: 'CBT',
        description: 'Treat yourself the way you would treat someone you care about.',
        aiFollowUp: true,
        info: 'Research shows self-criticism makes depression and emotional blunting worse. Self-compassion is not weakness — it is a clinically validated tool.',
        steps: [
            {
                prompt: 'What is something you\'ve been critical of yourself about lately?',
                placeholder: 'Something you keep blaming yourself for...',
                field: 'criticism'
            },
            {
                prompt: 'If a close friend told you this about themselves, what would you say to them?',
                placeholder: 'Write what you would actually say — not what you "should" say.',
                field: 'friend'
            },
            {
                prompt: 'Can you say any part of that to yourself? Write it here.',
                placeholder: 'Even one sentence. It doesn\'t have to feel true yet.',
                field: 'self'
            }
        ]
    },
    {
        id: 'opposite-action',
        title: 'Opposite Action',
        tag: 'DBT',
        description: 'When your instinct is to avoid, do something slightly different.',
        aiFollowUp: true,
        info: 'From Dialectical Behavior Therapy: when emotions drive avoidance, the avoidance itself keeps the problem alive. Doing even a tiny version of the opposite breaks the cycle — not because it feels good, but because it proves to your brain that you can.',
        steps: [
            {
                prompt: 'What is something you have been avoiding or withdrawing from?',
                placeholder: 'A person, a task, going outside, something you used to enjoy...',
                field: 'avoidance'
            },
            {
                prompt: 'What would the very first 2 minutes of doing that thing look like?',
                placeholder: 'Not the whole thing — just the opening move. What happens in the first moment? Think about YOUR specific situation, not a general answer.',
                field: 'opposite'
            },
            {
                prompt: 'What would doing it look like if you only had 10% of your normal energy?',
                placeholder: 'Strip it down until it feels almost too small to matter. That\'s the version to aim for.',
                field: 'plan'
            }
        ]
    },
    {
        id: 'activity-planning',
        title: 'Pleasant Activity Planning',
        tag: 'Behavioral',
        description: 'Schedule something small that you once found enjoyable.',
        aiFollowUp: true,
        info: 'With emotional blunting, activities may not feel enjoyable — but doing them anyway is what gradually rebuilds the connection. This is called behavioral re-engagement.',
        steps: [
            {
                prompt: 'Name something you used to enjoy before things got hard.',
                placeholder: 'A walk, music, cooking, reading, talking to someone...',
                field: 'activity'
            },
            {
                prompt: 'On a scale of 0-10, how motivated do you feel to do it right now?',
                placeholder: 'Be honest. 0 is fine.',
                field: 'motivation'
            },
            {
                prompt: 'Schedule a small version of it. When exactly?',
                placeholder: 'Tomorrow at 3pm. Friday morning. Tonight before bed.',
                field: 'schedule'
            }
        ]
    }
];

// ===== MOOD FEEDBACK =====
const MOOD_FEEDBACK = {
    1: "That sounds really hard. I\'m glad you\'re here.",
    2: "That sounds really hard. I\'m glad you\'re here.",
    3: "Not a good day. That\'s okay. You still showed up.",
    4: "Rough. Let\'s do something small together.",
    5: "In the middle. That\'s honest.",
    6: "A bit better than average. Let\'s build on that.",
    7: "That\'s a decent day. Let\'s use it.",
    8: "Pretty good. Let\'s reinforce what\'s working.",
    9: "Really good. Take note of what\'s different today.",
    10: "Excellent. Remember this feeling — it exists."
};

// ===== MOOD CHECK-IN — ROTATING QUESTIONS & WORD OPTIONS =====
// Two-axis approach based on Russell's Circumplex Model:
// Axis 1: arousal/energy  |  Axis 2: valence/tone
// Questions rotate by day to prevent autopilot responses.

const ENERGY_QUESTIONS = [
    "What's your energy like right now?",
    "How does your body feel this morning?",
    "What's your physical state today?"
];

const TONE_QUESTIONS = [
    "What's your inner weather today?",
    "If you had to put a word on it, how are you feeling?",
    "What's your mood tone right now?"
];

const ENERGY_OPTIONS = [
    { label: "Drained",  score: 1 },
    { label: "Low",      score: 3 },
    { label: "Neutral",  score: 5 },
    { label: "Awake",    score: 7 },
    { label: "Buzzing",  score: 9 },
];

const TONE_OPTIONS = [
    { label: "Heavy",  score: 1 },
    { label: "Down",   score: 3 },
    { label: "Flat",   score: 5 },
    { label: "Okay",   score: 7 },
    { label: "Light",  score: 9 },
    { label: "Good",   score: 10 },
];

// ===== COMMITMENT FIELDS =====
// Which field in each exercise contains tomorrow's commitment.
// AI-enabled exercises all save the last AI answer to 'ai_commitment'.
const COMMITMENT_FIELDS = {
    'behavioral-activation': 'ai_commitment',
    'opposite-action': 'ai_commitment',
    'activity-planning': 'ai_commitment',
    'values': 'ai_commitment',
    'thought-record': 'ai_commitment',
    'self-compassion': 'ai_commitment',
};

// ===== FOLLOW-UP RESPONSES =====
const FOLLOWUP_RESPONSES = {
    yes: [
        "You did it. Acting against low motivation is one of the hardest things there is. Research on behavioral activation shows that following through — even once — starts to rebuild the connection between action and feeling. Your brain is slowly updating what it believes you're capable of.",
        "Following through when nothing inside you wants to is exactly how change works. The motivation most people wait for? It comes after the action, not before. You proved that today.",
        "You moved toward something instead of away from it. That matters more than it might feel right now. Behavior change doesn't happen in big moments — it happens in exactly this kind of small follow-through."
    ],
    partly: [
        "Partly counts. The brain doesn't record 'all or nothing' — it records direction. You moved toward it instead of away from it, and that registers as progress whether it feels that way or not. A smaller version of the thing is still the thing.",
        "Half a step is still a step forward. In CBT, partial follow-through is treated as success — because starting is the hardest part and you started. Tomorrow the bar can be the same small size.",
        "Doing part of it is not falling short. It's finding the real size of the step you can take right now. That's useful information, not failure."
    ],
    no: [
        "Avoidance makes sense when everything feels flat — staying still feels safe. But avoidance has a cost: the more we avoid something, the heavier it gets. The fact that you named it here honestly is already a small act of moving toward it.",
        "Not doing it doesn't mean failure. It means there was a gap between intention and action. That gap is worth being curious about, not critical of. What made it hard? You don't have to answer that now — just let the question sit.",
        "The brain under depression and emotional blunting lies. It says 'what's the point' before you even start. You didn't do the thing — but you showed up here and answered honestly. That's not nothing. We'll try again with a smaller step today."
    ]
};

// ===== LOCAL STORAGE KEYS =====
const STORAGE_KEY = 'dailycheckin_data';
const SETTINGS_KEY = 'dailycheckin_settings';

// ===== APP STATE =====
let selectedMood        = null;   // combined 1-10 score (computed from energy + tone)
let selectedEnergy      = null;   // score from energy sub-step
let selectedEnergyLabel = null;   // word label from energy sub-step
let selectedTone        = null;   // score from tone sub-step
let selectedToneLabel   = null;   // word label from tone sub-step
let moodSubStep         = 0;      // 0 = energy panel, 1 = tone panel
let currentExerciseIndex = 0;
let currentStepIndex = 0;
let exerciseAnswers = {};
let todayExercise = null;

// AI exercise flow state
let aiQuestions = [];        // array of AI-generated questions (returned all at once)
let aiQuestionIndex = 0;     // which AI question we're currently showing
let usingAIFlow = false;     // true once we've switched to AI questions
let fetchingAIStep = false;  // waiting for API response

// ===== DATA FUNCTIONS =====

function getData() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { entries: [] };
    } catch {
        return { entries: [] };
    }
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getSettings() {
    try {
        return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {
            morningTime: '08:00',
            eveningTime: '20:00',
            notificationsEnabled: false
        };
    } catch {
        return { morningTime: '08:00', eveningTime: '20:00', notificationsEnabled: false };
    }
}

function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function getTodayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getTodayEntry() {
    const data = getData();
    return data.entries.find(e => e.date === getTodayKey()) || null;
}

function getYesterdayCommitment() {
    const data = getData();
    const yesterday = getDateKey(-1);
    const entry = data.entries.find(e => e.date === yesterday);
    if (!entry) return null;
    // Already followed up?
    if (entry.followUp) return null;
    const commitmentField = COMMITMENT_FIELDS[entry.exercise];
    if (!commitmentField) return null;
    const text = entry.answers && entry.answers[commitmentField];
    if (!text || text.trim() === '') return null;
    return { date: yesterday, text: text.trim(), exercise: entry.exercise };
}

function saveFollowUp(date, answer) {
    const data = getData();
    const entry = data.entries.find(e => e.date === date);
    if (entry) {
        entry.followUp = answer;
        saveData(data);
    }
}

function saveEntry(mood, exercise, answers) {
    const data = getData();
    const entry = {
        date: getTodayKey(),
        mood: mood,
        energyLabel: selectedEnergyLabel || null,
        toneLabel:   selectedToneLabel   || null,
        exercise: exercise.id,
        answers: answers,
        timestamp: Date.now()
    };
    const existingIndex = data.entries.findIndex(e => e.date === getTodayKey());
    if (existingIndex >= 0) {
        data.entries[existingIndex] = entry;
    } else {
        data.entries.push(entry);
    }
    saveData(data);
    return entry;
}

function getStreak() {
    const data = getData();
    if (data.entries.length === 0) return 0;

    const sorted = [...data.entries].sort((a, b) => b.date.localeCompare(a.date));
    const today = getTodayKey();
    const yesterday = getDateKey(-1);

    // Must have checked in today or yesterday to have an active streak
    if (sorted[0].date !== today && sorted[0].date !== yesterday) return 0;

    let streak = 0;
    let checkDate = sorted[0].date === today ? today : yesterday;

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].date === checkDate) {
            streak++;
            checkDate = getDateKey(-streak);
        } else {
            break;
        }
    }
    return streak;
}

function getDateKey(offset) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getRecentEntries(days) {
    const data = getData();
    const cutoff = getDateKey(-days);
    return data.entries.filter(e => e.date >= cutoff);
}

function getAverageMood(days) {
    const entries = getRecentEntries(days);
    if (entries.length === 0) return null;
    return (entries.reduce((sum, e) => sum + e.mood, 0) / entries.length).toFixed(1);
}

// ===== EXERCISE SELECTION =====
// Pick exercise based on day of year so it's consistent all day but rotates daily

function getTodayExercise() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    return EXERCISES[dayOfYear % EXERCISES.length];
}

// ===== GREETING =====

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning.';
    if (hour < 17) return 'Good afternoon.';
    return 'Good evening.';
}

// ===== UI FUNCTIONS =====

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
}

function buildMoodPanels() {
    const day = getDayOfYear();

    // Rotate questions independently so they don't always pair the same way
    document.getElementById('energyQuestion').textContent =
        ENERGY_QUESTIONS[day % ENERGY_QUESTIONS.length];
    document.getElementById('toneQuestion').textContent =
        TONE_QUESTIONS[Math.floor(day / ENERGY_QUESTIONS.length) % TONE_QUESTIONS.length];

    // Build energy word buttons
    const energyContainer = document.getElementById('energyButtons');
    energyContainer.innerHTML = '';
    ENERGY_OPTIONS.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'mood-word-btn';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => selectEnergy(opt.score, btn));
        energyContainer.appendChild(btn);
    });

    // Build tone word buttons
    const toneContainer = document.getElementById('toneButtons');
    toneContainer.innerHTML = '';
    TONE_OPTIONS.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'mood-word-btn';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => selectTone(opt.score, btn));
        toneContainer.appendChild(btn);
    });
}

function selectEnergy(score, btn) {
    selectedEnergy = score;
    selectedEnergyLabel = btn.textContent;
    document.querySelectorAll('#energyButtons .mood-word-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.getElementById('moodNextBtn').classList.remove('hidden');
}

function selectTone(score, btn) {
    selectedTone = score;
    selectedToneLabel = btn.textContent;
    document.querySelectorAll('#toneButtons .mood-word-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    // Compute combined score now so feedback is visible before Continue
    const combined = Math.round((selectedEnergy + score) / 2);
    document.getElementById('moodFeedback').textContent = MOOD_FEEDBACK[combined] || '';
    document.getElementById('moodNextBtn').classList.remove('hidden');
}

function showFollowUp(commitment) {
    document.getElementById('followUpCommitment').textContent = `"${commitment.text}"`;
    document.getElementById('followUpResponse').classList.add('hidden');
    document.getElementById('followUpNextBtn').classList.add('hidden');
    document.querySelectorAll('.follow-up-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('followUpStep').classList.remove('hidden');
}

function startExercise() {
    document.getElementById('exerciseStep').classList.remove('hidden');
    currentStepIndex = 0;
    exerciseAnswers = {};
    aiQuestions = [];
    aiQuestionIndex = 0;
    usingAIFlow = false;
    fetchingAIStep = false;
    buildExerciseStep();
}

function buildExerciseStep() {
    const exercise = todayExercise;

    document.getElementById('exerciseTag').textContent = exercise.tag;
    document.getElementById('exerciseTitle').textContent = exercise.title;
    document.getElementById('exerciseDesc').textContent = exercise.description;

    const content = document.getElementById('exerciseContent');
    content.innerHTML = '';

    const nextBtn = document.getElementById('exerciseNextBtn');
    nextBtn.disabled = false;

    // --- AI flow: show AI-generated questions ---
    if (usingAIFlow) {
        const totalSteps = 1 + aiQuestions.length; // step 0 + AI questions
        const displayStep = 2 + aiQuestionIndex;   // step 0 is 1, first AI is 2

        const indicator = document.createElement('p');
        indicator.className = 'exercise-step-indicator';
        indicator.textContent = `Step ${displayStep} of ${totalSteps}`;
        content.appendChild(indicator);

        const aiLabel = document.createElement('span');
        aiLabel.className = 'ai-step-label';
        aiLabel.textContent = '✦ Follow-up';
        content.appendChild(aiLabel);

        const prompt = document.createElement('p');
        prompt.className = 'exercise-prompt';
        prompt.textContent = aiQuestions[aiQuestionIndex];
        content.appendChild(prompt);

        const textarea = document.createElement('textarea');
        textarea.className = 'exercise-textarea';
        textarea.placeholder = 'Take your time...';
        textarea.id = 'exerciseInput';
        content.appendChild(textarea);

        const isLast = aiQuestionIndex === aiQuestions.length - 1;
        nextBtn.textContent = isLast ? 'Complete ✓' : 'Next →';
        return;
    }

    // --- Static step (step 0 for AI exercises, all steps for non-AI exercises) ---
    const step = exercise.steps[currentStepIndex];
    const hasAI = !!exercise.aiFollowUp;
    // For AI exercises: total = 1 (step 0) + 2 (AI questions). For non-AI: static count.
    const totalSteps = hasAI ? 3 : exercise.steps.length;

    // Show info box on first step
    if (currentStepIndex === 0 && exercise.info) {
        const infoBox = document.createElement('div');
        infoBox.className = 'exercise-info-box';
        infoBox.textContent = exercise.info;
        content.appendChild(infoBox);
    }

    const indicator = document.createElement('p');
    indicator.className = 'exercise-step-indicator';
    indicator.textContent = `Step ${currentStepIndex + 1} of ${totalSteps}`;
    content.appendChild(indicator);

    const prompt = document.createElement('p');
    prompt.className = 'exercise-prompt';
    prompt.textContent = step.prompt;
    content.appendChild(prompt);

    const textarea = document.createElement('textarea');
    textarea.className = 'exercise-textarea';
    textarea.placeholder = step.placeholder;
    textarea.id = 'exerciseInput';
    textarea.value = exerciseAnswers[step.field] || '';
    content.appendChild(textarea);

    const isLast = !hasAI && currentStepIndex === exercise.steps.length - 1;
    nextBtn.textContent = isLast ? 'Complete ✓' : 'Next →';
}

function advanceExerciseStep() {
    const input = document.getElementById('exerciseInput');
    const answer = input ? input.value.trim() : '';

    // --- We're in AI question flow ---
    if (usingAIFlow) {
        exerciseAnswers[`ai_q${aiQuestionIndex}`] = answer;

        const isLast = aiQuestionIndex === aiQuestions.length - 1;
        if (isLast) {
            // Save last AI answer as the commitment for tomorrow's follow-up
            const commitField = COMMITMENT_FIELDS[todayExercise.id];
            if (commitField) exerciseAnswers[commitField] = answer;
            const entry = saveEntry(selectedMood, todayExercise, exerciseAnswers);
            showCompletion(entry);
        } else {
            aiQuestionIndex++;
            buildExerciseStep();
        }
        return;
    }

    // --- Static step ---
    const step = todayExercise.steps[currentStepIndex];
    exerciseAnswers[step.field] = answer;

    // After step 0 of an AI-enabled exercise: fetch all follow-up questions
    if (currentStepIndex === 0 && todayExercise.aiFollowUp) {
        fetchAIFollowUp(answer);
        return;
    }

    // Non-AI exercise: advance through static steps normally
    const isLast = currentStepIndex === todayExercise.steps.length - 1;
    if (isLast) {
             const commitField = COMMITMENT_FIELDS[todayExercise.id];
                  if (commitField && !exerciseAnswers[commitField]) exerciseAnswers[commitField] = answer;
        const entry = saveEntry(selectedMood, todayExercise, exerciseAnswers);
        showCompletion(entry);
    } else {
        currentStepIndex++;
        buildExerciseStep();
    }
}

async function fetchAIFollowUp(firstAnswer) {
    fetchingAIStep = true;

    const content = document.getElementById('exerciseContent');
    content.innerHTML = '<div class="ai-loading"><span class="ai-loading-dot"></span><span class="ai-loading-dot"></span><span class="ai-loading-dot"></span></div>';
    document.getElementById('exerciseNextBtn').disabled = true;

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                exerciseId: todayExercise.id,
                exerciseTitle: todayExercise.title,
                exerciseTag: todayExercise.tag,
                exerciseDescription: todayExercise.description,
                answers: { [todayExercise.steps[0].field]: firstAnswer }
            })
        });

        if (!response.ok) throw new Error('API error');

        const data = await response.json();
        aiQuestions = Array.isArray(data.questions) ? data.questions : [data.questions || 'How does that feel?'];
        aiQuestionIndex = 0;
        usingAIFlow = true;
    } catch (err) {
        console.error('AI follow-up failed, falling back to static steps:', err);
        // Fallback: continue with remaining static steps
        currentStepIndex = 1;
        usingAIFlow = false;
    } finally {
        fetchingAIStep = false;
    }

    buildExerciseStep();
}

function showCompletion(entry) {
    document.getElementById('moodStep').classList.add('hidden');
    document.getElementById('exerciseStep').classList.add('hidden');
    document.getElementById('completionStep').classList.remove('hidden');

    const streak = getStreak();
    let message = 'You showed up today. That matters.';
    if (streak >= 7) message = `${streak} days in a row. Keep going.`;
    else if (streak >= 3) message = `${streak} days in a row. You\'re building something real.`;
    else if (streak >= 2) message = `2 days in a row. That\'s a start.`;

    document.getElementById('completionMessage').textContent = message;
    updateStreakBadge();
}

function updateStreakBadge() {
    const streak = getStreak();
    const badge = document.getElementById('streakBadge');
    const count = document.getElementById('streakCount');
    if (streak >= 2) {
        count.textContent = streak;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function buildStatsScreen() {
    const streak = getStreak();
    const avg7 = getAverageMood(7);
    const data = getData();
    const total = data.entries.length;
    const now = new Date();
    const thisMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const thisMonth = data.entries.filter(e => e.date.startsWith(thisMonthKey)).length;

    document.getElementById('statStreak').textContent = streak;
    document.getElementById('statAvgMood').textContent = avg7 || '—';
    document.getElementById('statTotal').textContent = total;
    document.getElementById('statThisMonth').textContent = thisMonth;

    buildMoodChart();
}

function buildMoodChart() {
    const chart = document.getElementById('moodChart');
    chart.innerHTML = '';

    const days = 14;
    let hasData = false;

    for (let i = days - 1; i >= 0; i--) {
        const dateKey = getDateKey(-i);
        const data = getData();
        const entry = data.entries.find(e => e.date === dateKey);

        const wrap = document.createElement('div');
        wrap.className = 'chart-bar-wrap';

        const bar = document.createElement('div');
        bar.className = 'chart-bar';

        if (entry) {
            hasData = true;
            const pct = (entry.mood / 10) * 100;
            bar.style.height = `${pct}%`;
            if (entry.mood >= 7) bar.classList.add('high');
            else if (entry.mood >= 4) bar.classList.add('mid');
            else bar.classList.add('low');

            // Show mood score above the bar
            const score = document.createElement('span');
            score.className = 'chart-score';
            score.textContent = entry.mood;
            wrap.appendChild(score);
        } else {
            bar.style.height = '4px';
            bar.style.opacity = '0.2';
        }

        wrap.appendChild(bar);

        const d = new Date();
        d.setDate(d.getDate() - i);
        const label = document.createElement('span');
        label.className = 'chart-day';
        // Show "Mon 14" style label
        label.textContent = d.toLocaleDateString('sv-SE', { weekday: 'short' }).slice(0,2) + ' ' + d.getDate();

        wrap.appendChild(label);
        chart.appendChild(wrap);
    }

    if (!hasData) {
        chart.innerHTML = '<p class="chart-empty">No data yet. Start checking in daily.</p>';
    }
}

function generateExportSummary() {
    const data = getData();
    const now = new Date();
    const thirtyDaysAgo = getDateKey(-30);
    const recent = data.entries.filter(e => e.date >= thirtyDaysAgo).sort((a, b) => a.date.localeCompare(b.date));

    if (recent.length === 0) {
        return 'No check-ins in the last 30 days.';
    }

    const avgMood = (recent.reduce((sum, e) => sum + e.mood, 0) / recent.length).toFixed(1);
    const streak = getStreak();
    const highDays = recent.filter(e => e.mood >= 7).length;
    const lowDays = recent.filter(e => e.mood <= 3).length;

    const exerciseCounts = {};
    recent.forEach(e => {
        exerciseCounts[e.exercise] = (exerciseCounts[e.exercise] || 0) + 1;
    });

    let summary = `DAILY CHECK-IN SUMMARY\n`;
    summary += `Generated: ${now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}\n`;
    summary += `Period: Last 30 days\n\n`;
    summary += `--- OVERVIEW ---\n`;
    summary += `Total check-ins: ${recent.length} / 30 days\n`;
    summary += `Average mood: ${avgMood} / 10\n`;
    summary += `Good days (7+): ${highDays}\n`;
    summary += `Difficult days (1-3): ${lowDays}\n`;
    summary += `Current streak: ${streak} days\n\n`;
    summary += `--- MOOD BY DAY ---\n`;
    recent.forEach(e => {
        const bar = '█'.repeat(e.mood) + '░'.repeat(10 - e.mood);
        summary += `${e.date}  ${bar}  ${e.mood}/10\n`;
    });
    summary += `\n--- EXERCISES COMPLETED ---\n`;
    Object.entries(exerciseCounts).forEach(([id, count]) => {
        const ex = EXERCISES.find(e => e.id === id);
        summary += `${ex ? ex.title : id}: ${count}x\n`;
    });

    const followUps = recent.filter(e => e.followUp);
    if (followUps.length > 0) {
        const yes = followUps.filter(e => e.followUp === 'yes').length;
        const partly = followUps.filter(e => e.followUp === 'partly').length;
        const no = followUps.filter(e => e.followUp === 'no').length;
        summary += `\n--- FOLLOW-THROUGH ---\n`;
        summary += `Did the planned action: ${yes}x yes, ${partly}x partly, ${no}x no\n`;
        summary += `Follow-through rate: ${Math.round(((yes + partly * 0.5) / followUps.length) * 100)}%\n`;
    }

    return summary;
}

// ===== NOTIFICATIONS =====

async function requestNotifications() {
    if (!('Notification' in window)) {
        document.getElementById('notificationStatus').textContent = 'Your browser does not support notifications.';
        return;
    }

    const permission = await Notification.requestPermission();
    const settings = getSettings();
    settings.notificationsEnabled = permission === 'granted';
    saveSettings(settings);

    if (permission === 'granted') {
        document.getElementById('notificationStatus').textContent = 'Notifications enabled. You\'ll be reminded daily.';
        scheduleNotificationCheck();
    } else {
        document.getElementById('notificationStatus').textContent = 'Permission denied. You can enable it in your browser settings.';
    }
}

function scheduleNotificationCheck() {
    const settings = getSettings();
    if (!settings.notificationsEnabled) return;

    const now = new Date();
    const todayEntry = getTodayEntry();

    const [mH, mM] = settings.morningTime.split(':').map(Number);
    const [eH, eM] = settings.eveningTime.split(':').map(Number);

    const morningTime = new Date();
    morningTime.setHours(mH, mM, 0, 0);

    const eveningTime = new Date();
    eveningTime.setHours(eH, eM, 0, 0);

    // Morning reminder
    if (now < morningTime) {
        const msUntilMorning = morningTime - now;
        setTimeout(() => {
            if (!getTodayEntry()) {
                new Notification('Daily Check-in', {
                    body: 'Good morning. Time for your daily 3-minute check-in.',
                    icon: '/icon.png'
                });
            }
        }, msUntilMorning);
    }

    // Evening nudge if not done
    if (now < eveningTime) {
        const msUntilEvening = eveningTime - now;
        setTimeout(() => {
            if (!getTodayEntry()) {
                new Notification('Daily Check-in', {
                    body: 'You haven\'t checked in today yet. It only takes 3 minutes.',
                    icon: '/icon.png'
                });
            }
        }, msUntilEvening);
    }
}

// ===== INIT =====

function init() {
    moodSubStep = 0;
    selectedEnergy = null;
    selectedEnergyLabel = null;
    selectedTone = null;
    selectedToneLabel = null;
    buildMoodPanels();
    updateStreakBadge();

    document.getElementById('greeting').textContent = getGreeting();

    todayExercise = getTodayExercise();

    // Check if already done today
    const todayEntry = getTodayEntry();
    if (todayEntry) {
        showAlreadyDone(todayEntry);
    } else {
        showScreen('checkinScreen');
    }

    // Load settings
    const settings = getSettings();
    document.getElementById('morningTime').value = settings.morningTime;
    document.getElementById('eveningTime').value = settings.eveningTime;

    if (settings.notificationsEnabled && Notification.permission === 'granted') {
        document.getElementById('notificationStatus').textContent = 'Notifications are enabled.';
        scheduleNotificationCheck();
    }

    // ===== EVENT LISTENERS =====

    // Mood next — two sub-steps (energy → tone), then proceed
    document.getElementById('moodNextBtn').addEventListener('click', () => {
        if (moodSubStep === 0) {
            // Advance from energy to tone panel
            document.getElementById('moodEnergyPanel').classList.add('hidden');
            document.getElementById('moodTonePanel').classList.remove('hidden');
            document.getElementById('moodNextBtn').classList.add('hidden');
            document.getElementById('moodFeedback').textContent = '';
            moodSubStep = 1;
        } else {
            // Both done — compute combined score and move on
            selectedMood = Math.round((selectedEnergy + selectedTone) / 2);
            document.getElementById('moodStep').classList.add('hidden');
            const commitment = getYesterdayCommitment();
            if (commitment) {
                showFollowUp(commitment);
            } else {
                startExercise();
            }
        }
    });

    // Follow-up answer buttons
    document.querySelectorAll('.follow-up-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.dataset.answer;
            document.querySelectorAll('.follow-up-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            // Save follow-up to yesterday's entry
            const commitment = getYesterdayCommitment();
            if (commitment) saveFollowUp(commitment.date, answer);

            // Show response
            const responses = FOLLOWUP_RESPONSES[answer];
            const text = responses[Math.floor(Math.random() * responses.length)];
            const responseEl = document.getElementById('followUpResponse');
            responseEl.textContent = text;
            responseEl.classList.remove('hidden');
            document.getElementById('followUpNextBtn').classList.remove('hidden');
        });
    });

    // Follow-up continue
    document.getElementById('followUpNextBtn').addEventListener('click', () => {
        document.getElementById('followUpStep').classList.add('hidden');
        startExercise();
    });

    // Exercise next/complete
    document.getElementById('exerciseNextBtn').addEventListener('click', () => {
        advanceExerciseStep();
    });

    // View stats from completion
    document.getElementById('viewStatsBtn').addEventListener('click', () => {
        buildStatsScreen();
        showScreen('statsScreen');
    });

    // View stats from already-done screen
    document.getElementById('goToStatsBtn').addEventListener('click', () => {
        buildStatsScreen();
        showScreen('statsScreen');
    });

    // Header buttons
    document.getElementById('statsBtn').addEventListener('click', () => {
        buildStatsScreen();
        showScreen('statsScreen');
    });

    document.getElementById('settingsBtn').addEventListener('click', () => {
        showScreen('settingsScreen');
    });

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const todayEntry = getTodayEntry();
            if (todayEntry) {
                showAlreadyDone(todayEntry);
            } else {
                showScreen('checkinScreen');
            }
        });
    });

    // Notifications
    document.getElementById('enableNotificationsBtn').addEventListener('click', () => {
        requestNotifications();
    });

    // Settings save on change
    document.getElementById('morningTime').addEventListener('change', saveCurrentSettings);
    document.getElementById('eveningTime').addEventListener('change', saveCurrentSettings);

    // Export
    document.getElementById('exportBtn').addEventListener('click', () => {
        const summary = generateExportSummary();
        const output = document.getElementById('exportOutput');
        output.textContent = summary;
        output.classList.remove('hidden');

        // Add copy button if not there
        if (!document.getElementById('copyBtn')) {
            const copyBtn = document.createElement('button');
            copyBtn.id = 'copyBtn';
            copyBtn.className = 'btn btn-secondary copy-btn';
            copyBtn.textContent = 'Copy to clipboard';
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(summary).then(() => {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => { copyBtn.textContent = 'Copy to clipboard'; }, 2000);
                });
            });
            output.after(copyBtn);
        }
    });

    // Clear data
    document.getElementById('clearDataBtn').addEventListener('click', () => {
        if (confirm('Are you sure? This will delete all your check-in history.')) {
            localStorage.removeItem(STORAGE_KEY);
            location.reload();
        }
    });
}

function showAlreadyDone(entry) {
    showScreen('alreadyDoneScreen');
    const hour = new Date().getHours();
    let msg = 'Come back tomorrow.';
    if (hour < 17) msg = 'Rest of the day is yours.';
    document.getElementById('alreadyDoneMessage').textContent = msg;
    const energyLabel = entry.energyLabel || '—';
    const toneLabel   = entry.toneLabel   || '—';
    document.getElementById('todayMoodDisplay').textContent =
        entry.energyLabel ? `${energyLabel}  ·  ${toneLabel}` : `${entry.mood} / 10`;
    updateStreakBadge();
}

function saveCurrentSettings() {
    const settings = getSettings();
    settings.morningTime = document.getElementById('morningTime').value;
    settings.eveningTime = document.getElementById('eveningTime').value;
    saveSettings(settings);
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
