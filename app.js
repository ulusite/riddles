function loadRiddles() {
    const mainEl = document.querySelector('main');
    const riddleTemplate = document.querySelector('#template__riddle');
    const choiceTemplate = document.querySelector('#template__choice');
    const textTemplate = document.querySelector('#template__text');

    DB.forEach((riddle, riddleIndex) => {
        const riddleClone = riddleTemplate.content.cloneNode(true);

        const riddleEl = riddleClone.querySelector('.riddle');
        riddleEl.dataset.riddleIndex = riddleIndex;

        // load riddle question
        const numberEl = riddleClone.querySelector('.number');
        numberEl.textContent = `${riddleIndex + 1}. `;
        const questionEl = riddleClone.querySelector('.question');
        questionEl.textContent = riddle.question;
        const hintEl = riddleClone.querySelector('.hint');
        hintEl.textContent = riddle.hint;

        const controlEl = riddleClone.querySelector('.control');
        if (riddle.textBox === true) { // load riddle's text input
            const textClone = textTemplate.content.cloneNode(true);
            const choiceIndex = riddle.choices.findIndex(choice => choice.correct === true);
            riddleEl.dataset.choiceIndex = choiceIndex;
            controlEl.appendChild(textClone);
        } else { // load riddle's radio choices
            riddle.choices.forEach((choice, choiceIndex) => {
                const choiceClone = choiceTemplate.content.cloneNode(true);
                const radioEl = choiceClone.querySelector('.radio-input');
                let answer = choice.answer;
                if (Array.isArray(answer)) {
                    answer = answer[0]; // pick the first correct answer for radio choice
                }
                radioEl.value = answer;
                radioEl.id = answer;
                radioEl.name = `riddle-${riddleIndex}`;
                radioEl.dataset.currentIndex = choiceIndex;
                const labelEl = choiceClone.querySelector('label');
                labelEl.htmlFor = answer;
                labelEl.textContent = answer;
                if (choice.correct === true) {
                    riddleEl.dataset.choiceIndex = choiceIndex;
                }
                controlEl.appendChild(choiceClone);
            });
        }
        mainEl.appendChild(riddleClone);
    });
}

function updateScoreHeadline() {
    answerCountGlobal++;
    const answerCountEl = document.querySelector('.answer-count');
    answerCountEl.textContent = answerCountGlobal;
    const scoreEl = document.querySelector('.score');
    scoreEl.textContent = scoreGlobal;

    // play win/sad sound effect when all questions are answered
    if (answerCountGlobal === questionCountGlobal) {
        let audioId = 'win';
        if (scoreGlobal / questionCountGlobal * 100 <= 50) {
            audioId = 'sad'
        }
        setTimeout(() => {
            playWav(audioId);
        }, 1000);
    }
}

function setCorrectAnswer(riddleEl) {
    const riddleIndex = riddleEl.dataset.riddleIndex;
    const correctIndex = riddleEl.dataset.choiceIndex;
    const currentRiddle = DB[riddleIndex];
    const correctChoice = currentRiddle.choices[correctIndex];

    const correctAnswerWrapper = riddleEl.querySelector('.correct-answer-wrapper');
    const answerEl = correctAnswerWrapper.querySelector('.answer');

    if (Array.isArray(correctChoice.answer)) {
        answerEl.textContent = correctChoice.answer[0];
    } else {
        answerEl.textContent = correctChoice.answer;
    }
    const noteEl = correctAnswerWrapper.querySelector('.note');;
    if (correctChoice.note) {
        noteEl.textContent = `(${correctChoice.note})`;
    }
    correctAnswerWrapper.style.opacity = 1;
}

function handleYourAnswer(riddleEl, radioEl) {
    const riddleIndex = riddleEl.dataset.riddleIndex;
    const correctIndex = riddleEl.dataset.choiceIndex;
    const currentRiddle = DB[riddleIndex];
    const correctChoice = currentRiddle.choices[correctIndex];
    // const yourAnswerWrapper = riddleEl.querySelector('.your-answer-wrapper');

    let yourAnswer;
    if (radioEl) {
        yourAnswer = radioEl.value;
    } else {
        const inputEl = riddleEl.querySelector('.text-input');
        yourAnswer = inputEl.value;
    }

    const answer = correctChoice.answer;
    let isCorrect = false;
    if (Array.isArray(answer)) {
        isCorrect = answer.includes(yourAnswer);
    } else {
        isCorrect = answer == yourAnswer;
    }

    // const answerEl = yourAnswerWrapper.querySelector('.answer');
    // answerEl.textContent = yourAnswer;
    // const pointEl = yourAnswerWrapper.querySelector('.point');
    const questionWrapper = riddleEl.querySelector('.question-wrapper');
    if (isCorrect) {
        scoreGlobal++;
        tada();
        questionWrapper.classList.add('yes');
        // answerEl.classList.add('yes');
        // pointEl.textContent = '1';
    } else {
        beep();
        questionWrapper.classList.add('no');
        // answerEl.classList.add('no');
        // pointEl.textContent = '0';
    }
    // yourAnswerWrapper.style.opacity = 1;
    return isCorrect;
}

window.onload = function() {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.add('desktop');
    }
    loadRiddles();
}

// initialize socre headline
const scoreHeadlineEl = document.querySelector('.score-headline');

const questionCountGlobal = DB.length;
const questionCountEl = scoreHeadlineEl.querySelector('.question-count');
questionCountEl.textContent = questionCountGlobal;

let answerCountGlobal = 0;
const answerCountEl = scoreHeadlineEl.querySelector('.answer-count');
answerCountEl.textContent = answerCountGlobal;

let scoreGlobal = 0;
const scoreEl = scoreHeadlineEl.querySelector('.score');
scoreEl.textContent = scoreGlobal;

scoreHeadlineEl.style.opacity = 1;

const mainEl = document.querySelector('main');
let audioContext;

mainEl.addEventListener('click', event => {
    if (!audioContext) {
        audioContext = new AudioContext();
    }
    let eventEl = event.target;

    if (eventEl.tagName === 'INPUT' && eventEl.type === 'radio') {
        const riddleEl = eventEl.closest(".riddle");
        setCorrectAnswer(riddleEl);
        handleYourAnswer(riddleEl, eventEl);
        updateScoreHeadline();

        // disable input controls
        const radioEls = riddleEl.querySelectorAll('input');
        radioEls.forEach(el => el.disabled = 'true');
    }
    else if (eventEl.tagName === 'INPUT' && eventEl.type === 'button') {
        const riddleEl = eventEl.closest(".riddle");
        const inputEl = riddleEl.querySelector('.text-input');
        if (!inputEl.value) {
            inputEl.placeholder = '請輸入答案再提交';
            warn();
            return;
        }

        setCorrectAnswer(riddleEl);
        handleYourAnswer(riddleEl);
        updateScoreHeadline();

        // disable input controls
        inputEl.disabled = true; // text box
        eventEl.disabled = true; // submit button
    }
});
