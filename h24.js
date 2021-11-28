function transfo_h24() {
// Déclaration des variables
let h24; // donnée en entrée : heure au format 24h
         // entier entre 0 et 23
let h12; // résultat : heure au format 12h
         // chaine de caractères : nombre entre 1 et 12 + suffixe "AM" ou "PM"
         
// initialisation des données du problème
h24 = document.getElementById("h24").value;

// calcul
if (h24==0) {h12 = "12AM";}
else if (h24==12) {h12 = "12PM";}
else if (h24 > 12) {h12 = (h24-12)+"PM";}
else { h12 = h24+"AM";}

// Affichage du résultat
document.write(h12);
}


