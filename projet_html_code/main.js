// Récupération des éléments

// Opacitée fond RULES
const header = document.querySelector('header');
const main = document.querySelector('main');
const section = document.querySelector('section.extra');
// RULES Btn
const btnRules = document.querySelector('.rules-btn');

// RULES component
const rulesDiv = document.querySelector('aside');
btnRules.addEventListener('click', function(){
    rulesDiv.style.opacity = "1";
    rulesDiv.style.zIndex = "0";
    document.body.style.backgroundColor = "hsl(237, 49%, 8%)";
    header.style.opacity = "0.5";
    main.style.opacity = "0.5";
    section.style.opacity = "0.5";
});
const rulesClose = document.querySelector('.close-rules');
rulesClose.addEventListener('click', function(){
    rulesDiv.style.opacity = "0";
    rulesDiv.style.zIndex = "-1";

    document.body.style.backgroundColor = "var(--background)";
    header.style.opacity = "1";
    main.style.opacity = "1";
    section.style.opacity = "1";


});

// GAME components
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');

// All components
const hands = document.querySelectorAll('.option-container');

// GAME DIV
const gameStep1 = document.querySelector('.step-1');
const gameStep2 = document.querySelector('.step-2');

const playerPick = document.querySelector('.player-pick');
const computerPick = document.querySelector('.computer-pick');

// Play again btn
const btnAgain = document.querySelector('.play-again-btn');

const myArray = [paper, scissors, rock];

function computerPlay(){
    var rand = Math.floor(Math.random()*myArray.length);
    var rValue = myArray[rand];
    const computerLast = computerPick.lastElementChild;
    computerLast.classList.remove('replace');
    computerLast.classList.add(rValue.classList[1]);

    const imgAdress = `icon-${rValue.classList[1]}.svg`
    computerLast.innerHTML = `<div class="option"><img src="${imgAdress}" alt="option"></div>`
}

myArray.forEach(item => {
    item.addEventListener('click', function(){
        gameStep2.classList.add('step-2-minimizer');
        gameStep1.style.display ='none';
        const playerLast = playerPick.lastElementChild;
        playerLast.classList.remove('replace');
        playerLast.classList.add(item.classList[1]);

        const imgAdress = `icon-${item.classList[1]}.svg`
        playerLast.innerHTML = `<div class="option"><img src="${imgAdress}" alt="option"></div>`

        console.log(playerLast);

        computerPlay();
 
    
        btnAgain.addEventListener('click', function(){
            gameStep2.classList.remove('step-2-minimizer');
            gameStep1.style.display ='block';
            playerLast.classList.remove(item.classList[1]);
            const computerLast = computerPick.lastElementChild;
            computerLast.classList.remove(item.classList[1]);
        });

    })
});