console.log('hello');
// Récupération des éléments

// Opacitée fond RULES
const header = document.querySelector('header');
const main = document.querySelector('main');
const section = document.querySelector('section.extra');
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