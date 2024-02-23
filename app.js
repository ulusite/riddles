function loadImage(imageId, riddleClone) {
    const imageWrapper = riddleClone.querySelector('.image-wrapper');
    const imgEl = riddleClone.querySelector('.img');
    let dataUri = photos[imageId];
    if (!dataUri) {
        dataUri = photos[0];
    }
    imgEl.src = dataUri;
    imageWrapper.style.display = 'block';
}

function loadRiddles() {
    const mainEl = document.querySelector('main');
    const riddleTemplate = document.querySelector('#template__riddle');
    const choiceTemplate = document.querySelector('#template__choice');
    const textTemplate = document.querySelector('#template__text');

    dbGlobal.forEach((riddle, riddleIndex) => {
        if (riddle.skip === true && !noSkipGlobal) {
            return;
        }
        questionCountGlobal++;
        const riddleClone = riddleTemplate.content.cloneNode(true);

        const riddleEl = riddleClone.querySelector('.riddle');
        riddleEl.dataset.riddleIndex = riddleIndex;

        // load riddle question
        const numberEl = riddleClone.querySelector('.number');
        numberEl.textContent = `${questionCountGlobal}. `;
        const questionEl = riddleClone.querySelector('.question.no-link');
        const linkQuestionEl = riddleClone.querySelector('.question.link');
        if (riddle.link) {
            linkQuestionEl.textContent = riddle.question;
            linkQuestionEl.href = riddle.link;
            linkQuestionEl.style.display = 'inline-block';
            questionEl.style.display = 'none';
        } else {
            questionEl.textContent = riddle.question;
        }

        if (riddle.hint) {
            const hintEl = riddleClone.querySelector('.hint');
            hintEl.textContent = riddle.hint;
            hintEl.style.display = 'inline';
        }

        if (riddle.imageId) {
            loadImage(riddle.imageId, riddleClone);
        }

        const controlEl = riddleClone.querySelector('.control');
        const nameAttr = `riddle-${riddleIndex}`;
        // if there is only 1 choice, default it to text input and ignore the textBox switch
        if (riddle.choices.length === 1) {
            riddle.correctIndex = 0;
            const textClone = textTemplate.content.cloneNode(true);
            const inputEl = textClone.querySelector('.text-input');
            inputEl.name = nameAttr;
            controlEl.appendChild(textClone);
        } else if (riddle.textBox === true) { // load riddle with text input
            const correctIndex = riddle.choices.findIndex(choice => choice.correct === true);
            riddle.correctIndex = correctIndex;
            const textClone = textTemplate.content.cloneNode(true);
            const inputEl = textClone.querySelector('.text-input');
            inputEl.name = nameAttr;
            controlEl.appendChild(textClone);
        } else { // load riddle with radio choices
            riddle.choices.forEach((choice, choiceIndex) => {
                const choiceClone = choiceTemplate.content.cloneNode(true);
                const radioEl = choiceClone.querySelector('.radio-input');
                let answer = choice.answer;
                if (Array.isArray(answer)) {
                    answer = answer[0]; // pick the first correct answer for radio choice
                }
                const id = `id-${riddleIndex}-${choiceIndex}`;
                radioEl.value = answer;
                radioEl.id = id;
                radioEl.name = nameAttr;
                radioEl.dataset.currentIndex = choiceIndex;
                const labelEl = choiceClone.querySelector('label');
                labelEl.htmlFor = id;
                labelEl.textContent = answer;
                if (choice.correct === true) {
                    riddle.correctIndex = choiceIndex;
                }
                controlEl.appendChild(choiceClone);
            });
        }
        mainEl.appendChild(riddleClone);
    });
}

function initHeader() {
    const subtitleEl = document.querySelector('header .subtitle');
    subtitleEl.textContent = dataGlobal.title;

    const scoreHeadlineEl = document.querySelector('.score-headline');
    const questionCountEl = scoreHeadlineEl.querySelector('.question-count');
    questionCountEl.textContent = questionCountGlobal;
    const answerCountEl = scoreHeadlineEl.querySelector('.answer-count');
    answerCountEl.textContent = answerCountGlobal;
    const scoreEl = scoreHeadlineEl.querySelector('.score');
    scoreEl.textContent = scoreGlobal;
    scoreHeadlineEl.style.opacity = 1;
}

function updateScoreHeadline() {
    answerCountGlobal++;
    const answerCountEl = document.querySelector('.answer-count');
    answerCountEl.textContent = answerCountGlobal;
    const scoreEl = document.querySelector('.score');
    scoreEl.textContent = scoreGlobal;

    // play win/sad sound effect when all questions are answered
    if (answerCountGlobal === questionCountGlobal) {
        const showAnswerEl = document.querySelector('.btn-show-answer');
        showAnswerEl.removeAttribute('disabled');
        let audioId = 'win';
        if (scoreGlobal / questionCountGlobal * 100 <= 50) {
            audioId = 'sad'
        }
        setTimeout(() => {
            playWav(audioId);
        }, 1000);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function setCorrectAnswer(riddleEl) {
    const riddleIndex = riddleEl.dataset.riddleIndex;
    const currentRiddle = dbGlobal[riddleIndex];
    const correctChoice = currentRiddle.choices[currentRiddle.correctIndex];

    const correctAnswerWrapper = riddleEl.querySelector('.correct-answer-wrapper');
    const answerEl = correctAnswerWrapper.querySelector('.answer');

    if (Array.isArray(correctChoice.answer)) {
        answerEl.textContent = correctChoice.answer[0];
    } else {
        answerEl.textContent = correctChoice.answer;
    }
    const notesEl = correctAnswerWrapper.querySelector('.notes');;
    if (correctChoice.notes) {
        notesEl.textContent = `(${correctChoice.notes})`;
    }
}

function handleYourAnswer(riddleEl, radioEl) {
    const riddleIndex = riddleEl.dataset.riddleIndex;
    const currentRiddle = dbGlobal[riddleIndex];
    const correctChoice = currentRiddle.choices[currentRiddle.correctIndex];

    let yourAnswer;
    if (radioEl) {
        yourAnswer = radioEl.value;
    } else {
        const inputEl = riddleEl.querySelector('.text-input');
        yourAnswer = inputEl.value;
    }
    yourAnswer = yourAnswer.toLowerCase();

    const answer = correctChoice.answer;
    let isCorrect = false;
    if (Array.isArray(answer)) {
        isCorrect = answer.includes(yourAnswer);
    } else {
        isCorrect = answer == yourAnswer;
    }

    const questionWrapper = riddleEl.querySelector('.question-wrapper');
    if (isCorrect) {
        scoreGlobal++;
        tada();
        questionWrapper.classList.add('yes');
    } else {
        beep();
        questionWrapper.classList.add('no');
    }
}

function handleByPass(riddleEl) {
    const questionWrapper = riddleEl.querySelector('.question-wrapper');
    questionWrapper.classList.add('passed');
    warn();
}

function disableAllInputs(riddleEl) {
    const inputEls = riddleEl.querySelectorAll('input');
    inputEls.forEach(el => el.disabled = 'true');
}

function handleTextInput(riddleEl) {
    const inputEl = riddleEl.querySelector('.text-input');
    if (!inputEl.value) {
        inputEl.placeholder = '請輸入答案再提交';
        warn();
        return;
    }
    setCorrectAnswer(riddleEl);
    handleYourAnswer(riddleEl);
    updateScoreHeadline();
    disableAllInputs(riddleEl);
}

// initialize global vars
let questionCountGlobal = 0;
let answerCountGlobal = 0;
let scoreGlobal = 0;

const fisrtId = '2024feb';
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const dataGlobal = (riddlesDB && riddlesDB[id]) ? riddlesDB[id] : riddlesDB[fisrtId];
const dbGlobal = dataGlobal.db;
const noSkipGlobal = searchParams.get('f') === '1';
const isAdm = searchParams.get('adm') === '1';

window.onload = function() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const mobile = /iPhone|iPad|iPod|Android/i;
    const small = /iPhone|iPod|Android/i;

    if (mobile.test(userAgent)) {
        document.body.classList.add('mobile');
        if (small.test(userAgent)) {
            document.body.classList.add('small');
        }
    } else {
        document.body.classList.add('desktop');
    }
    loadRiddles();
    initHeader();
    if (isAdm) {
        const riddleEls = mainEl.querySelectorAll('.riddle');
        riddleEls.forEach(riddleEl => setCorrectAnswer(riddleEl));
        const showAnswerEl = document.querySelector('.btn-show-answer');
        showAnswerEl.removeAttribute('disabled');
    }
}

let audioContext;
const mainEl = document.querySelector('main');
mainEl.addEventListener('click', event => {
    if (!audioContext) {
        audioContext = new AudioContext();
    }
    const eventEl = event.target;
    const riddleEl = eventEl.closest('.riddle');

    if (eventEl.tagName === 'INPUT' && eventEl.type === 'radio') {
        setCorrectAnswer(riddleEl);
        handleYourAnswer(riddleEl, eventEl);
        updateScoreHeadline();
        disableAllInputs(riddleEl);
    }
    else if (eventEl.tagName === 'INPUT' && eventEl.type === 'button') {
        if (eventEl.classList.contains('btn-pass')) {
            setCorrectAnswer(riddleEl);
            handleByPass(riddleEl);
            updateScoreHeadline();
            disableAllInputs(riddleEl);
            return;
        }

        handleTextInput(riddleEl);
    }
});

const showAnswerEl = document.querySelector('.btn-show-answer');
showAnswerEl.addEventListener('click', event => {
    if (!audioContext) {
        audioContext = new AudioContext();
    }
    const eventEl = event.target;
    eventEl.value = '答案已顯示于每題之下';
    eventEl.classList.add('done');
    const correctAnserEls = document.querySelectorAll('.correct-answer-wrapper');
    correctAnserEls.forEach(el => el.style.opacity = 1);
    window.scrollTo({top: 0, behavior: 'smooth'});
    tada();
});

mainEl.addEventListener('keyup', event => {
    if (!audioContext) {
        audioContext = new AudioContext();
    }
    const eventEl = event.target;
    if (event.key === 'Enter' && eventEl.tagName === 'INPUT' && eventEl.type === 'text') {
        const riddleEl = eventEl.closest('.riddle');
        handleTextInput(riddleEl);
    }
});
