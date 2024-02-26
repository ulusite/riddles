function loadImage(imageId, riddleClone) {
    const imageWrapper = riddleClone.querySelector('.image-wrapper');
    const imgEl = riddleClone.querySelector('.img');
    let dataUri = photos[imageId];
    if (!dataUri) {
        dataUri = photos[0];
    }
    imgEl.src = dataUri;
    imageWrapper.classList.remove('hide');
}

function loadRiddles() {
    const mainEl = document.querySelector('main');
    const riddleTemplate = document.querySelector('#template__riddle');
    const choiceTemplate = document.querySelector('#template__choice');
    const textTemplate = document.querySelector('#template__text');
    dataGlobal.db.forEach(riddleId => {
        const riddle = masterDB[riddleId];
        if (riddle.skip === true && !noSkipGlobal) {
            return;
        }
        questionCountGlobal++;
        const riddleClone = riddleTemplate.content.cloneNode(true);

        const riddleEl = riddleClone.querySelector('.riddle');
        riddleEl.dataset.riddleId = riddleId;

        // load riddle question
        const numberEl = riddleClone.querySelector('.number');
        numberEl.textContent = `${questionCountGlobal}. `;
        const questionEl = riddleClone.querySelector('.question.no-link');
        const linkQuestionEl = riddleClone.querySelector('.question.link');
        if (riddle.link) {
            linkQuestionEl.textContent = riddle.question;
            linkQuestionEl.href = riddle.link;
            linkQuestionEl.classList.remove('hide');
            questionEl.classList.add('hide');
        } else {
            questionEl.textContent = riddle.question;
        }

        if (riddle.hint) {
            const hintEl = riddleClone.querySelector('.hint');
            hintEl.textContent = riddle.hint;
            hintEl.classList.remove('hide');
        }

        if (riddle.imageId) {
            loadImage(riddle.imageId, riddleClone);
        }

        const controlEl = riddleClone.querySelector('.control');
        const nameAttr = `riddle-${riddleId}`;
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
                const elId = `id-${riddleId}-${choiceIndex}`;
                radioEl.value = answer;
                radioEl.id = elId;
                radioEl.name = nameAttr;
                radioEl.dataset.currentIndex = choiceIndex;
                const labelEl = choiceClone.querySelector('label');
                labelEl.htmlFor = elId;
                labelEl.textContent = answer;
                if (choice.correct === true) {
                    riddle.correctIndex = choiceIndex;
                }
                controlEl.appendChild(choiceClone);
            });
        }
        if (riddle.moreHints && riddle.moreHints.length) {
            const moreHintsEl = riddleClone.querySelector('.more-hints');
            moreHintsEl.classList.remove('hide');
            const moreHintBtn = moreHintsEl.querySelector('.btn-hint');
            moreHintBtn.dataset.hintIndex = 0;
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
    const hintCountEl = scoreHeadlineEl.querySelector('.hint-count');
    hintCountEl.textContent = hintCountGlobal;
    const scoreEl = scoreHeadlineEl.querySelector('.score');
    scoreEl.textContent = scoreGlobal;

    scoreHeadlineEl.style.opacity = 1;
}

function updateScoreHeadline() {
    answerCountGlobal++;
    const scoreHeadlineEl = document.querySelector('.score-headline');
    const answerCountEl = scoreHeadlineEl.querySelector('.answer-count');
    answerCountEl.textContent = answerCountGlobal;
    const scoreEl = scoreHeadlineEl.querySelector('.score');
    scoreEl.textContent = scoreGlobal;

    // play win/sad sound effect when all questions are answered
    if (answerCountGlobal === questionCountGlobal) {
        let audioId = 'win';
        if (scoreGlobal / questionCountGlobal * 100 <= 50) {
            audioId = 'sad'
        }
        setTimeout(() => {
            playWav(audioId);
            window.scrollTo({top: 0, behavior: 'smooth'});
            scoreHeadlineEl.classList.add('blink');
        }, 1000);
    }
}

function setCorrectAnswer(riddleEl) {
    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];
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
    correctAnswerWrapper.style.opacity = 1;
}

function handleYourAnswer(riddleEl, eventEl) {
    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];
    const correctChoice = currentRiddle.choices[currentRiddle.correctIndex];

    let yourAnswer;
    if (eventEl) {
        yourAnswer = eventEl.value;
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
        tada(audioCtxGlobal);
        questionWrapper.classList.add('yes');
    } else {
        beep(audioCtxGlobal);
        questionWrapper.classList.add('no');
    }
}

function handleTextInput(riddleEl) {
    const inputEl = riddleEl.querySelector('.text-input');
    if (!inputEl.value) {
        inputEl.placeholder = '請輸入答案再提交';
        warn(audioCtxGlobal);
        return;
    }
    setCorrectAnswer(riddleEl);
    handleYourAnswer(riddleEl);
    disableAllInputs(riddleEl);
    updateScoreHeadline();
}

function handleByPass(riddleEl) {
    const questionWrapper = riddleEl.querySelector('.question-wrapper');
    questionWrapper.classList.add('passed');
    setCorrectAnswer(riddleEl);
    disableAllInputs(riddleEl);
    updateScoreHeadline();
    warn(audioCtxGlobal);
}

function handleMoreHints(riddleEl) {
    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];
    const moreHints = currentRiddle.moreHints;
    const moreHintBtn = riddleEl.querySelector('.btn-hint');

    let hintIndex = Number.parseInt(moreHintBtn.dataset.hintIndex);
    let moreHintText
    if (hintIndex === 0) {
        moreHintText = riddleEl.querySelector('.more-hint-text');
        moreHintText.classList.remove('hide');
    } else {
        moreHintText = document.createElement("div");
        moreHintText.classList.add('more-hint-text');
        moreHintBtn.parentNode.insertBefore(moreHintText, moreHintBtn);
    }
    moreHintText.textContent = moreHints[hintIndex];
    if (moreHints.length > 1) {
        // hint index is 0-based, whereas display text starts from 1
        moreHintText.dataset.hintNumber = hintIndex + 1; // data-hint-number is used by CSS
    }

    hintIndex++;
    if (moreHints.length > hintIndex) {
        moreHintBtn.dataset.hintIndex = hintIndex; // set index for next hint
        moreHintBtn.blur();
    } else {
        moreHintBtn.classList.add('hide');
    }
    // warn(audioCtxGlobal);
    hintCountGlobal++;
    const hintCountEl = document.querySelector('.hint-count');
    hintCountEl.textContent = hintCountGlobal;
}

function disableAllInputs(riddleEl) {
    const inputEls = riddleEl.querySelectorAll('input');
    inputEls.forEach(el => el.disabled = 'true');
}

function handleClick(event) {
    if (!audioCtxGlobal) {
        audioCtxGlobal = new AudioContext();
    }
    const eventEl = event.target;
    const riddleEl = eventEl.closest('.riddle');

    if (eventEl.tagName === 'INPUT' && eventEl.type === 'radio') {
        setCorrectAnswer(riddleEl);
        handleYourAnswer(riddleEl, eventEl);
        disableAllInputs(riddleEl);
        updateScoreHeadline();
    }
    else if (eventEl.tagName === 'INPUT' && eventEl.type === 'button') {
        if (eventEl.classList.contains('btn-pass')) {
            handleByPass(riddleEl);
            return;
        }
        if (eventEl.classList.contains('btn-hint')) {
            handleMoreHints(riddleEl);
            return;
        }
        handleTextInput(riddleEl);
    }
}

function handleEnter(event) {
    if (!audioCtxGlobal) {
        audioCtxGlobal = new AudioContext();
    }
    const eventEl = event.target;
    if (event.key === 'Enter' && eventEl.tagName === 'INPUT' && eventEl.type === 'text') {
        const riddleEl = eventEl.closest('.riddle');
        handleTextInput(riddleEl, eventEl);
    }
}

function onLoad() {
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
    if (isAdmGlobal) {
        const riddleEls = document.querySelectorAll('.riddle');
        riddleEls.forEach(riddleEl => setCorrectAnswer(riddleEl));
    }
}

// initialize global vars
let audioCtxGlobal;
let questionCountGlobal = 0;
let answerCountGlobal = 0;
let scoreGlobal = 0;
let hintCountGlobal = 0;

const searchParams = new URLSearchParams(window.location.search);
const noSkipGlobal = searchParams.get('f') === '1';
const isAdmGlobal = searchParams.get('adm') === '1';

// find/setup the target data
const fisrtId = '2024feb';
const dbid = searchParams.get('id');
const dataGlobal = riddlesDB[dbid] ? riddlesDB[dbid] : riddlesDB[fisrtId];
const masterDB = riddlesDB.masterDB; // riddlesDB is defined in db.js

// window.onload = onLoad
window.addEventListener('load', onLoad);
const mainEl = document.querySelector('main');
mainEl.addEventListener('click', handleClick);
mainEl.addEventListener('keyup', handleEnter);
