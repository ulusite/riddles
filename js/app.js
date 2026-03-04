function loadImage(imageId, templateNode) {
    const imageWrapper = templateNode.querySelector('.image-wrapper');
    const imgEl = templateNode.querySelector('.img');
    imgEl.src = `images/${imageId}`;
    imageWrapper.classList.remove('hide');
}

function buildChoiceEl(choiceEl, riddleId, choiceIndex, choice, templateNode) {
    const elId = `id-${riddleId}-${choiceIndex}`;
    const nameAttr = `riddle-${riddleId}`;
    choiceEl.id = elId;
    choiceEl.value = choiceIndex;
    choiceEl.name = nameAttr;
    choiceEl.dataset.currentIndex = choiceIndex;
    if (choice.imageId) {
        loadImage(choice.imageId, templateNode);
    }
    const labelEl = templateNode.querySelector('label');
    labelEl.htmlFor = elId;
    const labelTextEl = labelEl.querySelector('.label-text');
    let answer = choice.answer;
    if (answer) {
        if (Array.isArray(answer)) {
            answer = answer[0]; // pick the first correct answer for radio choice
        }
        labelTextEl.textContent = `${choiceIndex + 1}. ${answer}`;
    } else {
        labelTextEl.textContent = `${choiceIndex + 1} `;
    }

}

function loadRiddles() {
    // get singleton objects once only
    const mainEl = document.querySelector('main');
    const listEl = mainEl.querySelector('ol');
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
        const riddleNode = riddleTemplate.content.cloneNode(true);
        const riddleEl = riddleNode.querySelector('.riddle');
        riddleEl.dataset.riddleId = riddleId;

        // load riddle question
        // const numberEl = riddleNode.querySelector('.number');
        // numberEl.textContent = `${questionCountGlobal}. `;
        const questionEl = riddleNode.querySelector('.question.first-line');
        const linkQuestionEl = riddleNode.querySelector('.question.link');
        if (riddle.link) {
            if (Array.isArray(riddle.question)) {
                linkQuestionEl.textContent = riddle.question.join(' ');
            } else {
                linkQuestionEl.textContent = riddle.question;
            }
            linkQuestionEl.href = riddle.link;
            linkQuestionEl.classList.remove('hide');
            questionEl.classList.add('hide');
        }
        if (Array.isArray(riddle.question)) {
            questionEl.textContent = riddle.question[0];
            questionEl.classList.add('block');
            const restLines = riddle.question.slice(1);
            let previousEl = questionEl;
            restLines.forEach((line, index) => {
                const lineEl = document.createElement('span');
                lineEl.textContent = line;
                lineEl.classList.add('block');
                previousEl.after(lineEl);
                previousEl = lineEl;
            });
        }
        else {
            questionEl.textContent = riddle.question;
        }

        if (riddle.hint) {
            const hintEl = riddleNode.querySelector('.hint');
            hintEl.textContent = riddle.hint;
            hintEl.classList.remove('hide');
        }

        if (riddle.imageId) {
            loadImage(riddle.imageId, riddleNode);
        }

        // load riddle answer choices
        const controlEl = riddleNode.querySelector('.control');
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
            const textNode = textTemplate.content.cloneNode(true);
            const inputEl = textNode.querySelector('.text-input');
            inputEl.name = nameAttr;
            if (riddle.skipInput == true) {
                inputEl.placeholder = '請直接提交';
                inputEl.disabled = 'true';
            }
            controlEl.appendChild(textNode);
        } else {
            const correctIndixes = riddle.choices.map((choice, index) => (choice.correct == true ? index : -1)).filter(index => index !== -1);
            if (correctIndixes.length > 1) {
                riddle.correctIndex = correctIndixes;
                // multi choices, load riddle with checkboxes
                riddle.choices.forEach((choice, choiceIndex) => {
                    const checkboxNode = checkboxTemplate.content.cloneNode(true);
                    const checkboxEl = checkboxNode.querySelector('.checkbox-input');
                    buildChoiceEl(checkboxEl, riddleId, choiceIndex, choice, checkboxNode);
                    controlEl.appendChild(checkboxNode);
                });
                controlEl.classList.add('checkbox-group');
            }
            else {
                // single choice, load riddle with radio buttons
                riddle.choices.forEach((choice, choiceIndex) => {
                    const radioNode = radioTemplate.content.cloneNode(true);
                    const radioEl = radioNode.querySelector('.radio-input');
                    buildChoiceEl(radioEl, riddleId, choiceIndex, choice, radioNode);
                    if (choice.correct === true) {
                        riddle.correctIndex = choiceIndex;
                    }
                    controlEl.appendChild(radioNode);
                });
                controlEl.classList.add('radio-group');
            }
        }
        if (riddle.moreHints && riddle.moreHints.length) {
            const moreHintsEl = riddleNode.querySelector('.more-hints');
            moreHintsEl.classList.remove('hide');
            const moreHintBtn = moreHintsEl.querySelector('.btn-hint');
            moreHintBtn.dataset.hintIndex = 0;
        }
        listEl.appendChild(riddleNode);
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
    scoreHeadlineEl.querySelector('.question-count').textContent = questionCountGlobal;
    scoreHeadlineEl.querySelector('.answer-count').textContent = answerCountGlobal;
    scoreHeadlineEl.querySelector('.hint-count').textContent = hintCountGlobal;
    scoreHeadlineEl.querySelector('.bypass-count').textContent = bypassCountGlobal;
    scoreHeadlineEl.querySelector('.wrong-count').textContent = wrongCountGlobal;
    scoreHeadlineEl.querySelector('.correct-count').textContent = correctCountGlobal;
    scoreHeadlineEl.querySelector('.score').textContent = scoreGlobal;
    scoreHeadlineEl.style.opacity = 1;
}

function updateScoreHeadline() {
    answerCountGlobal++;
    const scoreHeadlineEl = document.querySelector('.score-headline');
    scoreHeadlineEl.querySelector('.answer-count').textContent = answerCountGlobal;
    scoreHeadlineEl.querySelector('.score').textContent = scoreGlobal;
    scoreHeadlineEl.querySelector('.correct-count').textContent = correctCountGlobal;
    scoreHeadlineEl.querySelector('.wrong-count').textContent = wrongCountGlobal;
    scoreHeadlineEl.querySelector('.bypass-count').textContent = bypassCountGlobal;

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
                if (isIphoneChromeGlobal) {
                    playGameOver(audioCtxGlobal, audioId);
                } else {
                    const sound = new Audio(`./assets/${audioId}.mp3`);
                    await sound.play();
                }
                window.scrollTo({top: 0, behavior: 'smooth'});
                scoreHeadlineEl.classList.add('blink');
                scoreHeadlineEl.querySelector(`.${audioId}`).classList.remove('hide');
            } catch (error) {
                console.error('Failed to play sound for final score:', error);
                // Still perform visual feedback even if sound fails
                window.scrollTo({top: 0, behavior: 'smooth'});
                scoreHeadlineEl.classList.add('blink');
            }
        }, 1000);
    }
}

function showCorrectAnswer(riddleEl) {
    const correctAnswerWrapper = riddleEl.querySelector('.correct-answer-wrapper');
    if (correctAnswerWrapper.classList.contains('had-shown')) {
        return;
    }

    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];
    const controlEl = riddleEl.querySelector('.control');
    const answerEl = correctAnswerWrapper.querySelector('.answer');

    if (controlEl.classList.contains('checkbox-group')) {
        // checkbox group may have multiple correct answers, show all correct answers
        // const notes = [];
        const correctAnswers = currentRiddle.correctIndex.map(index => {
            const choice = currentRiddle.choices[index];
            const answer = choice.answer ? `${index + 1}. ${choice.answer}` : `${index + 1}`;
            if (choice.notes) {
                return `${answer} (${choice.notes})`;
            }
            return answer;
        });
        answerEl.textContent = correctAnswers.join(', ');
    } else {
        const correctChoice = currentRiddle.choices[currentRiddle.correctIndex];
        if (controlEl.classList.contains('radio-group')) {
            // radio input has only 1 correct answer
            if (correctChoice.answer) {
                answerEl.textContent = `${currentRiddle.correctIndex + 1}. ${correctChoice.answer}`;
            } else {
                answerEl.textContent = `${currentRiddle.correctIndex + 1}`;
            }
        } else {
            if (currentRiddle.skipInput && !correctAnswerWrapper.classList.contains('had-shown')) {
                const notesEl = correctAnswerWrapper.querySelector('.notes');
                if (correctChoice.notes) {
                    notesEl.textContent = `(${correctChoice.notes})`;
                }
                if (correctChoice.answerImageId) {
                    const imgEl = document.createElement('img');
                    imgEl.classList.add('img');
                    imgEl.classList.add('block');
                    imgEl.src = `images/${correctChoice.answerImageId}`;
                    notesEl.after(imgEl);
                }
                correctAnswerWrapper.style.opacity = 1;
                correctAnswerWrapper.classList.add('had-shown');
                return;
            }
            const isExactMulti = currentRiddle.exactMultiChoice == true;
            // only when user answer matches all correct answers can be considered correct answer, show all
            if (isExactMulti && Array.isArray(correctChoice.answer)) {
                answerEl.textContent = correctChoice.answer.join(', ');
            } else {
                // when single correct answer but has multi representations, show the first
                if (Array.isArray(correctChoice.answer)) {
                    if (currentRiddle.multiAnswer) {
                        answerEl.textContent = correctChoice.answer.join(', ');
                    } else {
                        answerEl.textContent = correctChoice.answer[0];
                    }
                } else {
                    answerEl.textContent = correctChoice.answer;
                }
            }
        }
        // support notes for single correct answer only
        if (correctChoice.notes) {
            const notesEl = correctAnswerWrapper.querySelector('.notes');
            notesEl.textContent = `(${correctChoice.notes})`;
        }
    }
    correctAnswerWrapper.style.opacity = 1;
    correctAnswerWrapper.classList.add('had-shown');
}

function prepareText(text) {
    const data = text.replace(/ /g, '').toLowerCase();
    return c2tGlobal ? c2tGlobal(data) : data;
}

function checkTextAnswer(riddle, yourAnswer, correctAnswer) {
    const isExactMulti = riddle.exactMultiChoice == true;
    if (!isExactMulti && !Array.isArray(correctAnswer)) {
        return prepareText(correctAnswer) == prepareText(yourAnswer);
    }
    let correctAnswerSorted;
    if (Array.isArray(correctAnswer)) {
        correctAnswerSorted = correctAnswer.map(answer => prepareText(answer)).sort();
    } else {
        correctAnswerSorted = [prepareText(correctAnswer)];
    }
    if (!isExactMulti) {
        return correctAnswerSorted.includes(prepareText(yourAnswer));
    }
    const yourAnswersSorted = yourAnswer.split(/[, ]+/).map(answer => prepareText(answer)).sort();
    return correctAnswerSorted.every((value, index) => value == yourAnswersSorted[index]);
}

function showAnswerResult(riddleEl, isCorrect) {
    const questionWrapper = riddleEl.querySelector('.question-wrapper');
    if (isCorrect) {
        scoreGlobal++;
        playTada(audioCtxGlobal);
        questionWrapper.classList.add('yes');
        riddleEl.querySelector('.result-mark').classList.add('yes');
        correctCountGlobal++;
    } else {
        scoreGlobal--;
        playMidTone(audioCtxGlobal);
        questionWrapper.classList.add('no');
        riddleEl.querySelector('.result-mark').classList.add('no');
        wrongCountGlobal++;
    }
}

function handleYourAnswer(riddleEl, selectedRadioOrCheckboxes) {
    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];

    if (currentRiddle.skipInput == true) {
        showAnswerResult(riddleEl, true);
        return;
    }

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
            const yourAnswer = inputEl.value;
            const correctChoice = currentRiddle.choices[currentRiddle.correctIndex];
            const correctAnswer = correctChoice.answer;
            isCorrect = checkTextAnswer(currentRiddle, yourAnswer, correctAnswer);
        }
    }
    showAnswerResult(riddleEl, isCorrect);
}

function handleCheckboxInput(riddleEl) {
    const selectedCheckboxes = riddleEl.querySelectorAll('.checkbox-input:checked');
    if (!selectedCheckboxes.length) {
        riddleEl.querySelector('.error').classList.remove('hide');
        playSoftTone(audioCtxGlobal);
        return;
    }
    showCorrectAnswer(riddleEl);
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
    showCorrectAnswer(riddleEl);
    handleYourAnswer(riddleEl, selectedRadio);
    disableAllInputs(riddleEl);
    updateScoreHeadline();
}

function handleTextInput(riddleEl) {
    const inputEl = riddleEl.querySelector('.text-input');
    inputEl.value = inputEl.value.trim();
    const riddleId = riddleEl.dataset.riddleId;
    const currentRiddle = masterDB[riddleId];

    if (!inputEl.value && !currentRiddle.skipInput) {
        inputEl.placeholder = '請輸入答案再提交';
        playSoftTone(audioCtxGlobal);
        return;
    }
    showCorrectAnswer(riddleEl);
    handleYourAnswer(riddleEl);
    disableAllInputs(riddleEl);
    updateScoreHeadline();
}

function handleByPass(riddleEl) {
    const questionWrapper = riddleEl.querySelector('.question-wrapper');
    questionWrapper.classList.add('passed');
    riddleEl.querySelector('.result-mark').classList.add('passed');
    showCorrectAnswer(riddleEl);
    disableAllInputs(riddleEl);
    bypassCountGlobal++;
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
    document.querySelector('.hint-count').textContent = hintCountGlobal;
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
    if (!riddleEl) {
        return;
    }
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
    const mobile = /iPhone|iPad|Android/i;
    const iphone = /iPhone/i;
    const small = /iPhone|Android/i;

    if (mobile.test(userAgent)) {
        document.body.classList.add('mobile');
        isIphoneChromeGlobal = iphone.test(userAgent) && userAgent.includes('crios');
        if (small.test(userAgent)) {
            document.body.classList.add('small');
        }
    } else {
        document.body.classList.add('desktop');
    }
    loadRiddles();
    initHeader(); // init after riddles are loaded as some might be marked skipped
    if (isAdmGlobal) {
        const riddleEls = document.querySelectorAll('.riddle');
        riddleEls.forEach(riddleEl => showCorrectAnswer(riddleEl));
    }
    // initialize Chinese simplified to traditional converter
    if (OpenCC) {
        c2tGlobal = OpenCC.Converter({ from: 'cn', to: 't' });
    }
}

// initialize global vars
let audioCtxGlobal;
let questionCountGlobal = 0;
let answerCountGlobal = 0;
let hintCountGlobal = 0;
let wrongCountGlobal = 0;
let correctCountGlobal = 0;
let bypassCountGlobal = 0;
let scoreGlobal = 0;
let isIphoneChromeGlobal = false;
let c2tGlobal;

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
document.querySelector('footer').querySelector('.year').textContent = new Date().getFullYear();
