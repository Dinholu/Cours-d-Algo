function checkQuestion(numQ) {
    let res;
    
    if ((document.getElementById("q"+numQ+"++").checked) || (document.getElementById("q"+numQ+"+").checked))
        res = 1;
    else
        res = 0; 
    return res;
}


function main2() {
    let nbPoints;
    let score;

    nbPoints = checkQuestion(1)+checkQuestion(2)+checkQuestion(3)+checkQuestion(4);
    score = (nbPoints / 4) * 100;
    document.getElementById("x").textContent = "Votres score : " + score + "%.";
}

function main3() {
    let nbPoints=0;
    let score;

    for (let i=1; i<=4; i++) {
        nbPoints += checkQuestion(i);
    }
    score = (nbPoints / 4) * 100;
    document.getElementById("x").textContent = "Votres score : " + score + "%.";
}

function main() {

// Variables
    let nbPoints;
    let Pourcentage; // calcul du pourcentage

// Initialisations
    nbPoints = 0;

    if ((document.getElementById("q1++").checked) || (document.getElementById("q1+").checked)) 
        nbPoints=nbPoints+1;

    if ((document.getElementById("q2++").checked) || (document.getElementById("q2+").checked)) 
        nbPoints=nbPoints+1;
    
    if ((document.getElementById("q3++").checked) || (document.getElementById("q3+").checked)) 
        nbPoints=nbPoints+1;

    if ((document.getElementById("q4++").checked) || (document.getElementById("q4+").checked)) 
        nbPoints=nbPoints+1;

// calcul final
    Pourcentage = (nbPoints / 4) * 100
    
// affichage du resultat
    
    document.write("Votre assiduité est de "+ Pourcentage+"%.")
       
}


