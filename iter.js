


 function main() {
	let ensNoms = ["Machin", "Truc", "Bidule", "Chose", "Machine"];
	let ensPrenoms = ["Ginette", "Bob", "Albert", "Gertrude", "Machine"];
	
	let nom;
	let texte = "<select>";
	for (nom of ensNoms) {
		texte = texte + "<option>"+nom;
	}
	texte = texte+"</select>";


	texte = "<select>";
	for (let i=0; i<ensNoms.length; i++) {
		texte = texte + "<option>"+ensNoms[i] + " " + ensPrenoms[i];
	}
	texte = texte+"</select>";

	texte = "<select>";
	for (let i=0; i<ensNoms.length; i++) {
		for (let j=0; j<ensPrenoms.length; j++) {
			texte = texte + "<option>"+ensNoms[i] + " " + ensPrenoms[j];
		}
	}
	texte = texte+"</select>";
document.getElementById("x").innerHTML = texte ;
}
