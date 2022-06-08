console.log('hello');

// Récupération des éléments

const btnRules = document.querySelector('.rules-btn');
const rulesDiv = document.querySelector('aside');
const rulesClose = document.querySelector('.close-rules');

    rulesClose.addEventListener('click', function(){
        console.log(rulesClose);
    
    });

btnRules.addEventListener('click', function(){

    rulesDiv.style.opacity = "1";


});