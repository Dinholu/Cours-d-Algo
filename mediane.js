 function main() {
	let a;
	let b;
	let c;
	let mediane;

	a = parseInt(document.getElementById("a").value);
	b = parseInt(document.getElementById("b").value);
	c = parseInt(document.getElementById("c").value);

	if (((a<=b)&&(b<=c))||((c<=b)&&(b<=a))) mediane=b;
	else if (((b<=a)&&(a<=c))||((c<=a)&&(a<=b))) mediane=a;
	else mediane = c;

	document.write("Médiane de "+a+", "+b+" et "+c+" : "+mediane);
}
