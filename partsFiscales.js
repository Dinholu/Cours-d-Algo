 function main() {
 	// variables
	let situation; // entrée : situation familiale célibataire/couple/isolé
					// 1 si celibataire, 2 si couple, 3 si isolé
	let nbPers; // entrée : nombre de personnes à charge
	let nbParts; // sortie : nombre de parts fiscales

	// initialisation
	if (document.getElementById("celibataire").checked) situation=1;
	else if (document.getElementById("couple").checked) situation=2;
	else situation=3;

	nbPers = parseInt(document.getElementById("personnes").value);

	// calcul
	if (nbPers ==0) nbParts = 1; // pour un célibataire seul 
	else if (nbPers==1) nbParts=1.5; // pour un célibataire avec 1 personne à charge
	else if (nbPers==2) nbParts=2; // pour un célibataire avec 2 personnes à charge
	else nbParts = nbPers;
	// si c'est un couple on ajoute une part
	if (situation==2) nbParts = nbParts +1 ;
	// sinon si c'est un célibataire avec au moins une personne à charge on ajoute une demi-part
	else if ((situation==3)&&(nbPers>0)) nbParts = nbParts +0.5 ;
	
	// affichage du résultat
	document.write("Le nombre de parts est " + nbParts);
}
