console.log('hello');
// Récupération des éléments

// RULES component
const btnRules = document.querySelector('.rules-btn');
const rulesDiv = document.querySelector('aside');
btnRules.addEventListener('click', function(){
    rulesDiv.style.opacity = "1";
    rulesDiv.style.zIndex = "0";
});
const rulesClose = document.querySelector('.close-rules');
rulesClose.addEventListener('click', function(){
    rulesDiv.style.opacity = "0";    
    rulesDiv.style.zIndex = "-1";

});

// GAME components
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');
// All components
const hands = document.querySelectorAll('.option-container')

// GAME DIV
const gameStep1 = document.querySelector('.step-1');
const gameStep2 = document.querySelector('.step-2');

// Play again btn
const btnAgain = document.querySelector('.play-again-btn')

hands.forEach(item => {
    
    item.addEventListener('click', function(){
        gameStep2.classList.add('step-2-minimizer');
        gameStep1.style.display ='none';
        console.log(item);

    })

    btnAgain.addEventListener('click', function(){
        gameStep2.classList.remove('step-2-minimizer');
        gameStep1.style.display ='block';
    });
});