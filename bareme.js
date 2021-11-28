 function main() {
 	// variables
	let qf; // entrée : quotient familial
	let bareme; // sortie : résultat de l'application de barême

	// 10084, 25710, 73516, 158122
	const t1 = 10084;
	const t2 = 25710;
	const t3 = 73516;
	const t4 = 158122;

	v1 = (25710 - 10084)*0.11 ;
	v2 = v1 + (73516 - 25710)* 0.3;
	v3 = v2 + (158122 - 73516)*0.41;


	// initialisation
	qf = parseInt(document.getElementById("qf").value);

	if   (qf <= 10084) bareme = 0;
	else if (qf <= 25710) bareme = (qf - 10084)*0.11;
	else if (qf <= 73516) bareme = v1 + (qf - 25710)* 0.3;
	else if (qf <= 158122) bareme = v2 + (qf - 73516)*0.41;
	else bareme = v3 +(qf - 158122)*0.45;


	document.write("Le montant dû à l'application du barême au quotient familial "+qf+" vaut "+bareme);
}
