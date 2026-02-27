function loadQuestionImage(imageId, riddleClone) {
    const imageWrapper = riddleClone.querySelector('.image-wrapper');
    const imgEl = riddleClone.querySelector('.img');
    imgEl.src = 'images/' + imageId;
    imageWrapper.classList.remove('hide');
}

function loadAnswerImage(imageId, choiceClone) {
    const imageWrapper = choiceClone.querySelector('.image-wrapper');
    const imgEl = choiceClone.querySelector('.img');
    imgEl.src = 'images/' + imageId;
    imageWrapper.classList.remove('hide');
}

function buildChoiceEl(choiceEl, riddleId, choiceIndex, choice, choiceTemplateClone) {
    const elId = `id-${riddleId}-${choiceIndex}`;
    const nameAttr = `riddle-${riddleId}`;
    choiceEl.id = elId;
    choiceEl.value = choiceIndex;
    choiceEl.name = nameAttr;
    choiceEl.dataset.currentIndex = choiceIndex;
    if (choice.imageId) {
        loadAnswerImage(choice.imageId, choiceTemplateClone);
    }
    const labelEl = choiceTemplateClone.querySelector('label');
    labelEl.htmlFor = elId;
    const labelTextEl = labelEl.querySelector('.label-text');
    let answer = choice.answer;
    if (answer) {
        if (Array.isArray(answer)) {
            answer = answer[0]; // pick the first correct answer for radio choice
        }
        labelTextEl.textContent = `${choiceIndex + 1} ${answer}`;
        if (choice.imageId) {
            const imgEl = choiceTemplateClone.querySelector('.img');
            imgEl.classList.add('block');
        }
    } else {
        labelTextEl.textContent = `${choiceIndex + 1} `;
    }

}
function loadRiddles() {
    // get singleton objects once only
    const mainEl = document.querySelector('main');
    const riddleTemplate = document.querySelector('#template__riddle');
    const textTemplate = document.querySelector('#template__text');
    const checkboxTemplate = document.querySelector('#template__checkbox');
    const radioTemplate = document.querySelector('#template__radio');

    dataGlobal.db.forEach(riddleId => {
        const riddle = masterDB[riddleId];
        if (!riddle || (riddle.skip === true && !noSkipGlobal)) {
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
            loadQuestionImage(riddle.imageId, riddleClone);
        }

        // load riddle answer choices
        const controlEl = riddleClone.querySelector('.control');
        const nameAttr = `riddle-${riddleId}`;

        if (riddle.textBox === true || riddle.choices.length === 1) {
            // load choice riddle with text input
            // if there is only 1 choice, default to text input and ignore the textBox switch
            if (riddle.choices.length === 1) {
                 riddle.correctIndex = 0;
            } else {
                const correctIndex = riddle.choices.findIndex(choice => choice.correct === true);
                riddle.correctIndex = correctIndex;
            }
            const textClone = textTemplate.content.cloneNode(true);
            const inputEl = textClone.querySelector('.text-input');
            inputEl.name = nameAttr;
            controlEl.appendChild(textClone);
        } else {
            const correctIndixes = riddle.choices.map((choice, index) => (choice.correct == true ? index : -1)).filter(index => index !== -1);
            if (correctIndixes.length > 1) {
                riddle.correctIndex = correctIndixes;
                // multi choices, load riddle with checkboxes
                riddle.choices.forEach((choice, choiceIndex) => {
                    const checkboxClone = checkboxTemplate.content.cloneNode(true);
                    const checkboxEl = checkboxClone.querySelector('.checkbox-input');
                    buildChoiceEl(checkboxEl, riddleId, choiceIndex, choice, checkboxClone);
                    controlEl.appendChild(checkboxClone);
                });
                controlEl.classList.add('checkbox-group');
            }
            else {
                // single choice, load riddle with radio buttons
                riddle.choices.forEach((choice, choiceIndex) => {
                    const radioClone = radioTemplate.content.cloneNode(true);
                    const radioEl = radioClone.querySelector('.radio-input');
                    buildChoiceEl(radioEl, riddleId, choiceIndex, choice, radioClone);
                    if (choice.correct === true) {
                        riddle.correctIndex = choiceIndex;
                    }
                    controlEl.appendChild(radioClone);
                });
                controlEl.classList.add('radio-group');
            }
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
    const riddleTitleWrapper = document.querySelector('.riddle-title-wrapper');
    let targetTitleWrapper;
    if (dataGlobal.title) {
        document.title = dataGlobal.title;
        targetTitleWrapper = document.querySelector('.common-title-wrapper');
        targetTitleWrapper.querySelector('.title').textContent = dataGlobal.title;
        targetTitleWrapper.classList.remove('hide');
        riddleTitleWrapper.classList.add('hide');
    } else {
        targetTitleWrapper = riddleTitleWrapper
    }
    if (dataGlobal.subtitle) {
        targetTitleWrapper.querySelector('.subtitle').textContent = dataGlobal.subtitle;
    }

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
            audioId = 'sad';
        }

        setTimeout(async () => {
            try {
                // const sound = document.getElementById(audioId);
                // sound.play();
                if (isMobileChromeGlobal) {
                    playGameOver(audioCtxGlobal, audioId);
                } else {
                    const sound = new Audio(`./assets/${audioId}.mp3`);
                    await sound.play();
                }
                window.scrollTo({top: 0, behavior: 'smooth'});
                scoreHeadlineEl.classList.add('blink');
                if (audioId === 'sad') {
                    scoreHeadlineEl.querySelector('.sad').classList.remove('hide');
                } else {
                    scoreHeadlineEl.querySelector('.happy').classList.remove('hide');
                }
            } catch (error) {
                console.error('Failed to play sound for final score:', error);
                // Still perform visual feedback even if sound fails
                window.scrollTo({top: 0, behavior: 'smooth'});
                scoreHeadlineEl.classList.add('blink');
            }
        }, 1000);
    }
}

function setCorrectAnswer(riddleEl) {
    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];
    const controlEl = riddleEl.querySelector('.control');
    const correctAnswerWrapper = riddleEl.querySelector('.correct-answer-wrapper');
    const answerEl = correctAnswerWrapper.querySelector('.answer');

    if (controlEl.classList.contains('checkbox-group')) {
        // checkbox group may have multiple correct answers, show all correct answers
        const correctAnswers = currentRiddle.correctIndex.map(index => {
            const choice = currentRiddle.choices[index];
            const answer = choice.answer ? `${index + 1} ${choice.answer}` : `${index + 1}`;
            return answer;
        });
        answerEl.textContent = correctAnswers.join(', ');
    } else {
        const correctChoice = currentRiddle.choices[currentRiddle.correctIndex];
        if (controlEl.classList.contains('radio-group')) {
            // radio input has only 1 correct answer
            if (correctChoice.answer) {
                answerEl.textContent = `${currentRiddle.correctIndex + 1} ${correctChoice.answer}`;
            } else {
                answerEl.textContent = `${currentRiddle.correctIndex + 1}`;
            }
        } else {
            // text input may have multiple answers, show the first correct answer
            if (Array.isArray(correctChoice.answer)) {
                answerEl.textContent = correctChoice.answer[0];
            } else {
                answerEl.textContent = correctChoice.answer;
            }
        }
        if (correctChoice.notes) {
            const notesEl = correctAnswerWrapper.querySelector('.notes');
            notesEl.textContent = `(${correctChoice.notes})`;
        }
    }
    correctAnswerWrapper.style.opacity = 1;
}

function handleYourAnswer(riddleEl, selectedRadioOrCheckboxes) {
    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];
    let isCorrect = false;

    if (selectedRadioOrCheckboxes && selectedRadioOrCheckboxes.length > 0) {
        // checkbox group may have multiple correct answers, get all selected answers
        const yourAnswers = Array.from(selectedRadioOrCheckboxes).map(input => input.value);
        const sortedYourAnswers = [...yourAnswers].sort();
        const sortedCorrectAnswers = [...currentRiddle.correctIndex].sort();
        isCorrect = sortedCorrectAnswers.every((value, index) => value == sortedYourAnswers[index]);
    } else {
         // text input or radio group has only 1 correct answer
        if (selectedRadioOrCheckboxes){
            selectedRadioOrCheckboxes.classList.add('selected');
            isCorrect = currentRiddle.correctIndex == selectedRadioOrCheckboxes.value;
        } else {
            const inputEl = riddleEl.querySelector('.text-input');
            const yourAnswer = inputEl.value.trim().toLowerCase();
            const correctChoice = currentRiddle.choices[currentRiddle.correctIndex];
            const correctAnswer = correctChoice.answer;
            if (Array.isArray(correctAnswer)) {
                isCorrect = correctAnswer.includes(yourAnswer);
            } else {
                isCorrect = correctAnswer == yourAnswer;
            }
        }
    }

    const questionWrapper = riddleEl.querySelector('.question-wrapper');
    if (isCorrect) {
        scoreGlobal++;
        playTada(audioCtxGlobal);
        questionWrapper.classList.add('yes');
    } else {
        playMidTone(audioCtxGlobal);
        questionWrapper.classList.add('no');
    }
}

function handleCheckboxInput(riddleEl) {
    const selectedCheckboxes = riddleEl.querySelectorAll('.checkbox-input:checked');
    if (!selectedCheckboxes.length) {
        riddleEl.querySelector('.error').classList.remove('hide');
        playSoftTone(audioCtxGlobal);
        return;
    }
    setCorrectAnswer(riddleEl);
    handleYourAnswer(riddleEl, selectedCheckboxes);
    disableAllInputs(riddleEl);
    updateScoreHeadline();
}

function handleRadioInput(riddleEl) {
    const selectedRadio = riddleEl.querySelector('.radio-input:checked');
    if (!selectedRadio) {
        riddleEl.querySelector('.error').classList.remove('hide');
        playSoftTone(audioCtxGlobal);
        return;
    }
    setCorrectAnswer(riddleEl);
    handleYourAnswer(riddleEl, selectedRadio);
    disableAllInputs(riddleEl);
    updateScoreHeadline();
}

function handleTextInput(riddleEl) {
    const inputEl = riddleEl.querySelector('.text-input');
    inputEl.value = inputEl.value.trim();
    if (!inputEl.value) {
        inputEl.placeholder = '請輸入答案再提交';
        playSoftTone(audioCtxGlobal);
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
    playMidTone(audioCtxGlobal);
}

function handleMoreHints(riddleEl) {
    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];
    const moreHints = currentRiddle.moreHints;
    const moreHintBtn = riddleEl.querySelector('.btn-hint');

    let hintIndex = Number.parseInt(moreHintBtn.dataset.hintIndex);
    let moreHintText
    if (hintIndex == 0) {
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
    playSoftTone(audioCtxGlobal);
    hintCountGlobal++;
    const hintCountEl = document.querySelector('.hint-count');
    hintCountEl.textContent = hintCountGlobal;
}

function disableAllInputs(riddleEl) {
    const inputEls = riddleEl.querySelectorAll('input');
    inputEls.forEach(el => {
        if (!el.classList.contains('btn-hint') && !el.classList.contains('selected')) {
            el.disabled = 'true';
        }
    });
}

function handleClick(event) {
    if (!audioCtxGlobal) {
        audioCtxGlobal = new AudioContext();
    }
    const eventEl = event.target;
    const riddleEl = eventEl.closest('.riddle');
    riddleEl.querySelector('.error').classList.add('hide');
    if (eventEl.tagName === 'INPUT' && eventEl.type === 'button') {
        if (eventEl.classList.contains('btn-pass')) {
            handleByPass(riddleEl);
        }
        else if (eventEl.classList.contains('btn-hint')) {
            handleMoreHints(riddleEl);
        } else {
            const controlEl = riddleEl.querySelector('.control');
            if (controlEl.classList.contains('checkbox-group')) {
                handleCheckboxInput(riddleEl);
            } else if (controlEl.classList.contains('radio-group')) {
                handleRadioInput(riddleEl);
            } else {
                handleTextInput(riddleEl);
            }
        }
    }
}

function handleEnter(event) {
    if (!audioCtxGlobal) {
        audioCtxGlobal = new AudioContext();
    }
    const eventEl = event.target;
    if (event.key === 'Enter' && eventEl.tagName === 'INPUT' && eventEl.type === 'text') {
        const riddleEl = eventEl.closest('.riddle');
        handleTextInput(riddleEl);
    }
}

function onLoad() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const mobile = /iPhone|iPad|iPod|Android/i;
    const small = /iPhone|iPod|Android/i;

    if (mobile.test(userAgent)) {
        document.body.classList.add('mobile');
        isMobileChromeGlobal = userAgent.indexOf("chrome") > -1 || userAgent.includes('crios');
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
let isMobileChromeGlobal = false;

const searchParams = new URLSearchParams(window.location.search);
const noSkipGlobal = searchParams.get('f') == '1';
const isAdmGlobal = searchParams.get('adm') == '1';

// find/setup the target data, riddlesDB is defined in db.js
const fisrtId = riddlesDB.defaultDBId;
const dbid = searchParams.get('id');
const dataGlobal = riddlesDB[dbid] ? riddlesDB[dbid] : riddlesDB[fisrtId];
const masterDB = riddlesDB.masterDB;

// window.onload = onLoad
window.addEventListener('load', onLoad);
const mainEl = document.querySelector('main');
mainEl.addEventListener('click', handleClick);
mainEl.addEventListener('keyup', handleEnter);
