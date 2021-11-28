 function main() {
	let message;

	if (document.getElementById("-18").checked) 
		message = "accès interdit";
	else 
		message = "accès autorisé";

	document.write(message);
}
