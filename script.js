const textEl = document.getElementById("text");
const clickBtn = document.getElementById("click");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const viewText = document.getElementById("viewText");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");

let utterance = null;
let isPaused = false;
let startTime = null;
let estimatedDuration = 0;
let timerInterval = null;
let elapsed = 0;

// ~150 words per minute average speech rate
function estimateDuration(text) {
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, (words / 150) * 60);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function startTimer() {
    startTime = Date.now() - (elapsed * 1000);
    timerInterval = setInterval(() => {
        elapsed = (Date.now() - startTime) / 1000;
        const pct = Math.min((elapsed / estimatedDuration) * 100, 100);
        progressFill.style.width = pct + '%';
        currentTimeEl.textContent = formatTime(elapsed);
    }, 300);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsed = 0;
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '0:00';
}

function setStatus(msg, cls = '') {
    viewText.className = cls;
    viewText.innerHTML = msg;
}

clickBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const val = textEl.value.trim();
    if (!val) {
        setStatus('⚠️ Nenhum texto inserido, por favor escreva algo.', 'error');
        return;
    }

    // Stop any current speech
    speechSynthesis.cancel();
    resetTimer();
    isPaused = false;

    utterance = new SpeechSynthesisUtterance(val);
    estimatedDuration = estimateDuration(val);
    totalTimeEl.textContent = formatTime(estimatedDuration);

    utterance.onstart = () => {
        startTimer();
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        pauseBtn.textContent = '⏸ Pausar';
        setStatus('<span class="wave"><span></span><span></span><span></span><span></span></span> Falando...', 'speaking');
    };

    utterance.onend = () => {
        pauseTimer();
        progressFill.style.width = '100%';
        currentTimeEl.textContent = totalTimeEl.textContent;
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        isPaused = false;
        setStatus('✅ Concluído!', '');
    };

    utterance.onerror = () => {
        resetTimer();
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        setStatus('❌ Erro na síntese de voz.', 'error');
    };

    speechSynthesis.speak(utterance);
});

pauseBtn.addEventListener("click", () => {
    if (!isPaused) {
        speechSynthesis.pause();
        pauseTimer();
        isPaused = true;
        pauseBtn.textContent = '▶️ Retomar';
        setStatus('⏸ Pausado', '');
    } else {
        speechSynthesis.resume();
        startTimer();
        isPaused = false;
        pauseBtn.textContent = '⏸ Pausar';
        setStatus('<span class="wave"><span></span><span></span><span></span><span></span></span> Falando...', 'speaking');
    }
});

stopBtn.addEventListener("click", () => {
    speechSynthesis.cancel();
    resetTimer();
    isPaused = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
    pauseBtn.textContent = '⏸ Pausar';
    totalTimeEl.textContent = '0:00';
    setStatus('⏹ Parado.', '');
});

// Velocidade 2x no audio
velocity2btn.addEventListener("click", () => {
    const val = textEl.value.trim();
    if (!val)  {
        setStatus('⚠️ Nenhum texto inserido, por favor escreva algo.', 'error');
        return;
    }

    speechSynthesis.cancel();
    resetTimer();
    isPaused = false;

    utterance = new SpeechSynthesisUtterance(val);
    utterance.rate = 2.0; // Set speed to 2x
    estimatedDuration = estimateDuration(val) / 2;
    totalTimeEl.textContent = formatTime(estimatedDuration);

    utterance.onstart = () => {
        startTimer();
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        pauseBtn.textContent = '⏸ Pausar';
        setStatus('<span class="wave"><span></span><span></span><span></span><span></span></span> Falando (2x)...', 'speaking');
    };

    utterance.onend = () => {
        pauseTimer();
        progressFill.style.width = '100%';
        currentTimeEl.textContent = totalTimeEl.textContent;
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        isPaused = false;
        setStatus('✅ Concluído!', '');
    };

    utterance.onerror = () => {
        resetTimer();
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        setStatus('❌ Erro na síntese de voz.', 'error');
    };

    speechSynthesis.speak(utterance);
});
