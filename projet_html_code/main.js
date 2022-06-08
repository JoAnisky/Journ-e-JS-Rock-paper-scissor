console.log('hello');
// Récupération des éléments

// RULES Btn
const btnRules = document.querySelector('.rules-btn');
const rulesDiv = document.querySelector('aside');

// Game components
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');

const game = document.querySelector('.step-2');

paper.addEventListener('click', play);
scissors.addEventListener('click', play);
rock.addEventListener('click', play);

function play(){
    game.classList.add('step-2-minimizer');
}
// Game DIV




btnRules.addEventListener('click', function(){
    rulesDiv.style.opacity = "1";
    rulesDiv.style.zIndex = "0";
});
const rulesClose = document.querySelector('.close-rules');
rulesClose.addEventListener('click', function(){
    rulesDiv.style.opacity = "0";    
    rulesDiv.style.zIndex = "-1";

});