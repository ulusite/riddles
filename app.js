function loadRiddles() {
    const mainEl = document.querySelector('main');
    const riddleTemplate = document.querySelector('#template__riddle');
    const choiceTemplate = document.querySelector('#template__choice');
    DB.forEach((riddle, riddleIndex) => {
        const riddleClone = riddleTemplate.content.cloneNode(true);
        const questionEl = riddleClone.querySelector('.question');
        questionEl.textContent = riddle.question;
        const hintEl = riddleClone.querySelector('.hint');
        hintEl.textContent = riddle.hint;
        const choicesEl = riddleClone.querySelector('.choices');
        riddle.choices.forEach(choice => {
            const choiceClone = choiceTemplate.content.cloneNode(true);
            const radioEl = choiceClone.querySelector('input[type=radio]');
            const answer = choice.answer;
            radioEl.value = answer;
            radioEl.id = answer;
            radioEl.name = `riddle-${riddleIndex}`;
            radioEl.dataset.correct = choice.correct;
            const labelEl = choiceClone.querySelector('label');
            labelEl.htmlFor = answer;
            labelEl.textContent = answer;
            if (choice.note) {
                const noteEl = choiceClone.querySelector('.note');
                noteEl.textContent = choice.note;
            }
            choicesEl.appendChild(choiceClone);
        });
        mainEl.appendChild(riddleClone);
    });
}

window.onload = function() {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile');
    }
    loadRiddles();
}

const questionCount = DB.length;
const questionCountEl = document.querySelector('.question-count');
questionCountEl.textContent = questionCount;
const answerCountEl = document.querySelector('.answer-count');
const scoreLineEl = document.querySelector('.score-line');
const scoreEl = document.querySelector('.score');
const mainEl = document.querySelector('main');

let answerCount = 0;
let score = 0;
let audioContext;

mainEl.addEventListener('click', event => {
    if (!audioContext) {
        audioContext = new AudioContext();
    }
    let radioEl = event.target;
    if (radioEl.tagName === 'INPUT') {
        const riddleEl = radioEl.closest(".riddle");
        const answerPointEl = riddleEl.querySelector('.answer-point');

        // update headline and question answer/point only if this question hasn't been answered
        if (answerPointEl.style.opacity == 0) {
            const answerEl = answerPointEl.querySelector('.answer');
            const pointEl = answerPointEl.querySelector('.point');
            answerEl.textContent = radioEl.value;

            // set the question's answer/point
            if (radioEl.dataset.correct == 'true') {
                answerEl.classList.add('yes');
                pointEl.textContent = '1';
                score++;
                tada();
            } else {
                answerEl.classList.add('no');
                pointEl.textContent = '0';
                beep();
            }

            // update the score headline
            answerCount++;
            answerCountEl.textContent = answerCount;
            scoreEl.textContent = score;
            answerPointEl.style.opacity = 1;

            // play win/sad sound effect when all questions are answered
            if (answerCount === questionCount) {
                let audioId = 'win';
                if (score / questionCount * 100 <= 50) {
                    audioId = 'sad'
                }
                setTimeout(() => {
                    playWav(audioId);
                }, 1000);
                // setTimeout(() => {
                //     document.getElementById(audioId).play();
                // }, 1000);
            }
        }

        // add yes/no mark to the selected choice even the question has been answered
        // const labelEls = riddleEl.querySelectorAll('label');
        // labelEls.forEach(el => el.className = '');
        const labelEl = radioEl.nextElementSibling;
        if (radioEl.dataset.correct == 'true') {
            labelEl.className = 'yes';
        } else {
            labelEl.className = 'no';
        }

        // if the selected choice has a note, show it now
        const noteEl = labelEl.nextElementSibling;
        if (noteEl.textContent) {
            noteEl.style.display = 'inline';
        }

        // show the score headline when user starts answering
        scoreLineEl.style.opacity = 1;
    }
});
