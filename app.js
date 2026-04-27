// ===== SCIENCE-BASED EXERCISES =====
// Rotating daily exercises based on CBT, ACT, DBT, and behavioral activation research.

const EXERCISES = [
    {
        id: 'thought-record',
        title: 'Tankejournalen',
        tag: 'KBT',
        description: 'Fånga en negativ tanke och utmana den med bevis.',
        aiFollowUp: true,
        steps: [
            {
                prompt: 'Beskriv situationen kort.',
                placeholder: 'Vad hände, eller vad tänker du på just nu?',
                field: 'situation'
            },
            {
                prompt: 'Vilken automatisk tanke dök upp?',
                placeholder: 'Tanken som ploppade upp i huvudet...',
                field: 'thought'
            },
            {
                prompt: 'Vilket bevis finns MOT den här tanken?',
                placeholder: 'Vilka fakta utmanar eller motsäger tanken?',
                field: 'counter'
            },
            {
                prompt: 'Skriv en mer balanserad version av tanken.',
                placeholder: 'Ett mer realistiskt perspektiv, även om du inte kan känna det ännu...',
                field: 'balanced'
            }
        ]
    },
    {
        id: 'behavioral-activation',
        title: 'Beteendeaktivering',
        tag: 'KBT',
        description: 'Notera vad du gjorde idag. Handling kommer före känsla — inte efter.',
        aiFollowUp: true,
        steps: [
            {
                prompt: 'Nämn 3 saker du gjorde idag.',
                placeholder: 'Även små saker räknas. Klädde på mig. Tog en kopp kaffe. Öppnade ett fönster.',
                field: 'activities'
            },
            {
                prompt: 'Förändrade något av dem hur du mådde, ens lite?',
                placeholder: 'Eller kändes allt platt? Båda är giltiga svar.',
                field: 'shift'
            },
            {
                prompt: 'Planera en liten handling till imorgon.',
                placeholder: 'Det kan vara väldigt litet — en 5-minuters promenad, ett glas vatten, skicka ett meddelande.',
                field: 'plan'
            }
        ]
    },
    {
        id: 'grounding',
        title: '5-4-3-2-1 Förankring',
        tag: 'Mindfulness',
        description: 'Ta dig tillbaka till nuet med hjälp av dina sinnen.',
        info: 'Den här övningen fungerar även om du känner dig bedövad. Du behöver inte känna något — bara notera.\n\n5 saker du KAN SE\n4 saker du KAN RÖRA VID\n3 saker du KAN HÖRA\n2 saker du KAN LUKTA\n1 sak du KAN SMAKA',
        steps: [
            {
                prompt: 'Nämn 5 saker du kan se just nu.',
                placeholder: 'Titta långsamt runt. Lista vad du ser.',
                field: 'see'
            },
            {
                prompt: 'Nämn 4 saker du fysiskt kan röra vid eller känna.',
                placeholder: 'Din stol, dina fötter på golvet, dina kläder...',
                field: 'touch'
            },
            {
                prompt: 'Nämn 3 saker du kan höra.',
                placeholder: 'Bakgrundsljud, ditt andetag, vad som helst...',
                field: 'hear'
            },
            {
                prompt: 'Hur mår du jämfört med när du började?',
                placeholder: 'En liten förändring? Eller samma? Båda är okej.',
                field: 'after'
            }
        ]
    },
    {
        id: 'values',
        title: 'Värderingskollen',
        tag: 'ACT',
        description: 'När känslorna tystnar kan värderingar fortfarande vägleda dig.',
        aiFollowUp: true,
        info: 'I Acceptance and Commitment Therapy är värderingar inte känslor — de är riktningar. Du kan agera utifrån en värdering även när du inte känner något.',
        steps: [
            {
                prompt: 'Vad är en sak som är viktig för dig — även om du inte kan känna det just nu?',
                placeholder: 'Familj, lärande, ärlighet, hälsa, skapa något...',
                field: 'value'
            },
            {
                prompt: 'Gjorde du något idag som rörde dig mot den värderingen, ens lite?',
                placeholder: 'Eller drog dagen dig bort från den? Båda svaren är användbara.',
                field: 'action'
            },
            {
                prompt: 'En liten sak du kan göra imorgon som stämmer med den värderingen.',
                placeholder: 'Det behöver inte kännas meningsfullt — bara peka i rätt riktning.',
                field: 'tomorrow'
            }
        ]
    },
    {
        id: 'self-compassion',
        title: 'Självmedkänsla',
        tag: 'KBT',
        description: 'Behandla dig själv på det sätt du skulle behandla någon du bryr dig om.',
        aiFollowUp: true,
        info: 'Forskning visar att självkritik förvärrar depression och emotionell avtrubbning. Självmedkänsla är inte svaghet — det är ett kliniskt validerat verktyg.',
        steps: [
            {
                prompt: 'Vad är något du kritiserat dig själv för på sistone?',
                placeholder: 'Något du ständigt skyller dig själv för...',
                field: 'criticism'
            },
            {
                prompt: 'Om en nära vän berättade detta om sig själv, vad skulle du säga till dem?',
                placeholder: 'Skriv vad du faktiskt skulle säga — inte vad du "borde" säga.',
                field: 'friend'
            },
            {
                prompt: 'Kan du säga någon del av det till dig själv? Skriv det här.',
                placeholder: 'Även en mening. Det behöver inte kännas sant ännu.',
                field: 'self'
            }
        ]
    },
    {
        id: 'opposite-action',
        title: 'Mothandling',
        tag: 'DBT',
        description: 'När din instinkt är att undvika, gör något lite annorlunda.',
        aiFollowUp: true,
        info: 'Från Dialektisk Beteendeterapi: när känslor driver undvikande håller undvikandet problemet vid liv. Att göra ens en liten version av motsatsen bryter cykeln — inte för att det känns bra, utan för att det bevisar för din hjärna att du kan.',
        steps: [
            {
                prompt: 'Vad är något du har undvikt eller dragit dig från?',
                placeholder: 'En person, en uppgift, att gå ut, något du brukade tycka om...',
                field: 'avoidance'
            },
            {
                prompt: 'Hur skulle de allra första 2 minuterna av att göra det se ut?',
                placeholder: 'Inte hela saken — bara det första steget. Vad händer i det första ögonblicket? Tänk på din specifika situation.',
                field: 'opposite'
            },
            {
                prompt: 'Hur skulle det se ut om du bara hade 10% av din vanliga energi?',
                placeholder: 'Banta ner det tills det känns nästan för litet för att bry sig om. Det är den versionen att sikta på.',
                field: 'plan'
            }
        ]
    },
    {
        id: 'activity-planning',
        title: 'Planera en trevlig aktivitet',
        tag: 'Beteende',
        description: 'Planera något litet som du en gång tyckte om.',
        aiFollowUp: true,
        info: 'Vid emotionell avtrubbning kanske aktiviteter inte känns roliga — men att göra dem ändå är det som gradvis återuppbygger kopplingen. Det kallas beteendeåterengagemang.',
        steps: [
            {
                prompt: 'Nämn något du brukade tycka om innan det blev svårt.',
                placeholder: 'En promenad, musik, matlagning, läsning, att prata med någon...',
                field: 'activity'
            },
            {
                prompt: 'På en skala 0-10, hur motiverad känner du dig att göra det just nu?',
                placeholder: 'Var ärlig. 0 är okej.',
                field: 'motivation'
            },
            {
                prompt: 'Planera in en liten version av det. När exakt?',
                placeholder: 'Imorgon kl 15. Fredag morgon. Ikväll innan läggdags.',
                field: 'schedule'
            }
        ]
    }
];

// ===== MOOD FEEDBACK =====
const MOOD_FEEDBACK = {
    1: "Det låter riktigt svårt. Glad att du är här.",
    2: "Det låter riktigt svårt. Glad att du är här.",
    3: "Inte en bra dag. Det är okej. Du dök upp ändå.",
    4: "Tungt. Låt oss göra något litet tillsammans.",
    5: "Mitt emellan. Det är ärligt.",
    6: "Lite bättre än vanligt. Låt oss bygga på det.",
    7: "En hyfsad dag. Låt oss använda den.",
    8: "Riktigt bra. Förstärk det som fungerar.",
    9: "Väldigt bra. Lägg märke till vad som är annorlunda idag.",
    10: "Utmärkt. Kom ihåg den här känslan — den finns."
};

// ===== MOOD CHECK-IN — ROTATING QUESTIONS & WORD POOLS =====
// Two-axis approach based on Russell's Circumplex Model:
// Axis 1: arousal/energy  |  Axis 2: valence/tone
// Questions rotate by day. Words are picked daily from a large pool and shuffled
// on display so the user must actually read and consider each word.

const ENERGY_QUESTIONS = [
    "Hur är din energi just nu?",
    "Hur känns kroppen den här morgonen?",
    "Vilket fysiskt tillstånd är du i idag?"
];

const TONE_QUESTIONS = [
    "Hur skulle du beskriva ditt humör just nu?",
    "Om du fick sätta ett ord på det — hur mår du?",
    "Hur är ditt humör idag?"
];

// Large pools — 10 words are picked each day via seeded random, then shuffled for display.
const ENERGY_POOL = [
    { label: "Utmattad",   score: 1 },
    { label: "Tömd",       score: 1 },
    { label: "Trött",      score: 2 },
    { label: "Slö",        score: 3 },
    { label: "Tung",       score: 3 },
    { label: "Dämpad",     score: 4 },
    { label: "Dröjande",   score: 4 },
    { label: "Stilla",     score: 5 },
    { label: "Neutral",    score: 5 },
    { label: "Lagom",      score: 5 },
    { label: "Samlad",     score: 6 },
    { label: "Stabil",     score: 6 },
    { label: "Pigg",       score: 7 },
    { label: "Alert",      score: 7 },
    { label: "Aktiv",      score: 7 },
    { label: "Fokuserad",  score: 8 },
    { label: "Energisk",   score: 8 },
    { label: "Levande",    score: 8 },
    { label: "Laddad",     score: 9 },
    { label: "Sprudlande", score: 9 },
    { label: "Uppvarvad",  score: 9 },
    { label: "Rastlös",    score: 8 },
];

const TONE_POOL = [
    { label: "Nere",          score: 1 },
    { label: "Ledsen",        score: 2 },
    { label: "Dyster",        score: 2 },
    { label: "Håglös",        score: 3 },
    { label: "Tyngd",         score: 3 },
    { label: "Likgiltig",     score: 3 },
    { label: "Tomt",          score: 4 },
    { label: "Anspänd",       score: 4 },
    { label: "Osäker",        score: 4 },
    { label: "Avvaktande",    score: 5 },
    { label: "Neutral",       score: 5 },
    { label: "Okej",          score: 6 },
    { label: "Lugn",          score: 6 },
    { label: "Hoppfull",      score: 7 },
    { label: "Lättad",        score: 7 },
    { label: "Stabil",        score: 7 },
    { label: "Nöjd",          score: 8 },
    { label: "Glad",          score: 8 },
    { label: "Tacksam",       score: 8 },
    { label: "Positiv",       score: 9 },
    { label: "Lycklig",       score: 9 },
    { label: "Upprymd",       score: 9 },
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
        "Du gjorde det. Att agera trots låg motivation är ett av de svåraste sakerna som finns. Forskning om beteendeaktivering visar att följa upp — även en gång — börjar återbygga kopplingen mellan handling och känsla. Din hjärna uppdaterar långsamt vad den tror att du klarar av.",
        "Att följa upp när ingenting inuti dig vill det är exakt hur förändring fungerar. Den motivation de flesta väntar på? Den kommer efter handlingen, inte före. Det bevisade du idag.",
        "Du rörde dig mot något istället för bort från det. Det spelar mer roll än det kanske känns just nu. Beteendeförändring sker inte i stora ögonblick — den sker i precis den här typen av litet genomförande."
    ],
    partly: [
        "Delvis räknas. Hjärnan registrerar inte 'allt eller inget' — den registrerar riktning. Du rörde dig mot det istället för bort från det, och det registreras som framsteg oavsett om det känns så eller inte.",
        "Halvt steg är ändå ett steg framåt. I KBT behandlas delvis genomförande som framgång — för att börja är det svåraste och du började. Imorgon kan ribban vara lika liten.",
        "Att göra en del av det är inte att misslyckas. Det är att hitta den verkliga storleken på det steg du kan ta just nu. Det är användbar information, inte ett misslyckande."
    ],
    no: [
        "Undvikande är logiskt när allt känns platt — att stå still känns säkert. Men undvikande har ett pris: ju mer vi undviker något, desto tyngre blir det. Det faktum att du namngav det här ärligt är redan en liten handling av att röra sig mot det.",
        "Att inte göra det är inte ett misslyckande. Det betyder att det var ett gap mellan intention och handling. Det gapet är värt att vara nyfiken på, inte kritisk mot. Vad gjorde det svårt? Du behöver inte svara nu — låt bara frågan stanna kvar.",
        "Hjärnan under depression och emotionell avtrubbning ljuger. Den säger 'vad är vitsen' innan du ens börjat. Du gjorde inte saken — men du dök upp här och svarade ärligt. Det är inte ingenting. Vi försöker igen med ett mindre steg idag."
    ],
    'not-yet': [
        "Planen gäller fortfarande. Det är bra — åtaganden med ett framtida datum går inte ut över natten. Vi checkar in igen när stunden kommer.",
        "Fortfarande kommande. Inga problem. Intentionen är satt, och det spelar roll. Kom tillbaka när stunden är inne.",
        "Förstått — det ligger fortfarande framför dig. Håll fast vid planen. Du har redan gjort det svåraste, vilket är att bestämma dig för att göra det."
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
    if (hour < 12) return 'God morgon.';
    if (hour < 17) return 'God eftermiddag.';
    return 'God kväll.';
}

// ===== DAILY WORD SELECTION =====

// Simple seeded LCG random number generator.
function seededRandom(seed) {
    let s = seed | 0;
    return function() {
        s = (Math.imul(1664525, s) + 1013904223) | 0;
        return (s >>> 0) / 4294967296;
    };
}

// Pick `count` items from pool using a seeded shuffle, then return them.
// This ensures the same combination appears all day but changes the next day.
function getDailyWords(pool, seed, count) {
    const rng = seededRandom(seed);
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

// Shuffle an array in random display order (unseed, so it changes on reload).
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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

    // Pick 10 daily words for energy, then shuffle their display order
    const dailyEnergyWords = getDailyWords(ENERGY_POOL, day * 31337, 10);
    const displayEnergyWords = shuffleArray(dailyEnergyWords);

    const energyContainer = document.getElementById('energyButtons');
    energyContainer.innerHTML = '';
    displayEnergyWords.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'mood-word-btn';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => selectEnergy(opt.score, btn));
        energyContainer.appendChild(btn);
    });

    // Pick 10 daily words for tone, then shuffle their display order
    const dailyToneWords = getDailyWords(TONE_POOL, day * 52711 + 1000, 10);
    const displayToneWords = shuffleArray(dailyToneWords);

    const toneContainer = document.getElementById('toneButtons');
    toneContainer.innerHTML = '';
    displayToneWords.forEach(opt => {
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
        indicator.textContent = `Steg ${displayStep} av ${totalSteps}`;
        content.appendChild(indicator);

        const aiLabel = document.createElement('span');
        aiLabel.className = 'ai-step-label';
        aiLabel.textContent = '✦ Uppföljning';
        content.appendChild(aiLabel);

        const prompt = document.createElement('p');
        prompt.className = 'exercise-prompt';
        prompt.textContent = aiQuestions[aiQuestionIndex];
        content.appendChild(prompt);

        const textarea = document.createElement('textarea');
        textarea.className = 'exercise-textarea';
        textarea.placeholder = 'Ta din tid...';
        textarea.id = 'exerciseInput';
        content.appendChild(textarea);

        const isLast = aiQuestionIndex === aiQuestions.length - 1;
        nextBtn.textContent = isLast ? 'Klar ✓' : 'Nästa →';
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
    indicator.textContent = `Steg ${currentStepIndex + 1} av ${totalSteps}`;
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
    nextBtn.textContent = isLast ? 'Klar ✓' : 'Nästa →';
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
        aiQuestions = Array.isArray(data.questions) ? data.questions : [data.questions || 'Hur känns det?'];
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
    let message = 'Du dök upp idag. Det spelar roll.';
    if (streak >= 7) message = `${streak} dagar i rad. Fortsätt.`;
    else if (streak >= 3) message = `${streak} dagar i rad. Du bygger något på riktigt.`;
    else if (streak >= 2) message = `2 dagar i rad. Det är en start.`;

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
        label.textContent = d.toLocaleDateString('sv-SE', { weekday: 'short' }).slice(0,2) + ' ' + d.getDate();

        wrap.appendChild(label);
        chart.appendChild(wrap);
    }

    if (!hasData) {
        chart.innerHTML = '<p class="chart-empty">Ingen data ännu. Börja checka in dagligen.</p>';
    }
}

function generateExportSummary() {
    const data = getData();
    const now = new Date();
    const thirtyDaysAgo = getDateKey(-30);
    const recent = data.entries.filter(e => e.date >= thirtyDaysAgo).sort((a, b) => a.date.localeCompare(b.date));

    if (recent.length === 0) {
        return 'Inga check-ins de senaste 30 dagarna.';
    }

    const avgMood = (recent.reduce((sum, e) => sum + e.mood, 0) / recent.length).toFixed(1);
    const streak = getStreak();
    const highDays = recent.filter(e => e.mood >= 7).length;
    const lowDays = recent.filter(e => e.mood <= 3).length;

    const exerciseCounts = {};
    recent.forEach(e => {
        exerciseCounts[e.exercise] = (exerciseCounts[e.exercise] || 0) + 1;
    });

    let summary = `DAGLIG CHECK-IN SAMMANFATTNING\n`;
    summary += `Genererad: ${now.toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })}\n`;
    summary += `Period: Senaste 30 dagarna\n\n`;
    summary += `--- ÖVERSIKT ---\n`;
    summary += `Totalt antal check-ins: ${recent.length} / 30 dagar\n`;
    summary += `Genomsnittshumör: ${avgMood} / 10\n`;
    summary += `Bra dagar (7+): ${highDays}\n`;
    summary += `Svåra dagar (1-3): ${lowDays}\n`;
    summary += `Nuvarande streak: ${streak} dagar\n\n`;
    summary += `--- HUMÖR PER DAG ---\n`;
    recent.forEach(e => {
        const bar = '█'.repeat(e.mood) + '░'.repeat(10 - e.mood);
        summary += `${e.date}  ${bar}  ${e.mood}/10\n`;
    });
    summary += `\n--- GENOMFÖRDA ÖVNINGAR ---\n`;
    Object.entries(exerciseCounts).forEach(([id, count]) => {
        const ex = EXERCISES.find(e => e.id === id);
        summary += `${ex ? ex.title : id}: ${count}x\n`;
    });

    const followUps = recent.filter(e => e.followUp);
    if (followUps.length > 0) {
        const yes = followUps.filter(e => e.followUp === 'yes').length;
        const partly = followUps.filter(e => e.followUp === 'partly').length;
        const no = followUps.filter(e => e.followUp === 'no').length;
        summary += `\n--- UPPFÖLJNING ---\n`;
        summary += `Genomförde planerad handling: ${yes}x ja, ${partly}x delvis, ${no}x nej\n`;
        summary += `Genomförandegrad: ${Math.round(((yes + partly * 0.5) / followUps.length) * 100)}%\n`;
    }

    return summary;
}

// ===== NOTIFICATIONS =====

async function requestNotifications() {
    if (!('Notification' in window)) {
        document.getElementById('notificationStatus').textContent = 'Din webbläsare stöder inte notiser.';
        return;
    }

    const permission = await Notification.requestPermission();
    const settings = getSettings();
    settings.notificationsEnabled = permission === 'granted';
    saveSettings(settings);

    if (permission === 'granted') {
        document.getElementById('notificationStatus').textContent = 'Notiser aktiverade. Du påminns dagligen.';
        scheduleNotificationCheck();
    } else {
        document.getElementById('notificationStatus').textContent = 'Åtkomst nekad. Du kan aktivera det i dina webbläsarinställningar.';
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
                new Notification('Daglig Check-in', {
                    body: 'God morgon. Dags för din dagliga 3-minuters check-in.',
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
                new Notification('Daglig Check-in', {
                    body: 'Du har inte checkat in idag ännu. Det tar bara 3 minuter.',
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
        document.getElementById('notificationStatus').textContent = 'Notiser är aktiverade.';
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
            copyBtn.textContent = 'Kopiera till urklipp';
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(summary).then(() => {
                    copyBtn.textContent = 'Kopierat!';
                    setTimeout(() => { copyBtn.textContent = 'Kopiera till urklipp'; }, 2000);
                });
            });
            output.after(copyBtn);
        }
    });

    // Clear data
    document.getElementById('clearDataBtn').addEventListener('click', () => {
        if (confirm('Är du säker? Det här tar bort all din check-in historik.')) {
            localStorage.removeItem(STORAGE_KEY);
            location.reload();
        }
    });
}

function showAlreadyDone(entry) {
    showScreen('alreadyDoneScreen');
    const hour = new Date().getHours();
    let msg = 'Kom tillbaka imorgon.';
    if (hour < 17) msg = 'Resten av dagen är din.';
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
