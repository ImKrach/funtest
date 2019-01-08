// Constantes utilisées dans ce code
const resultat = 24682779393128;
const lettresPossibles = "acdegilmnoprstuw";

// Fonction de hash qui retourne un entier
function hash(s) {
	var h = 7;

	for (var i = 0; i < s.length; i++) {
		h = h * 37 + lettresPossibles.indexOf(s[i]);
	}

	return h;
}


var mystere = "";

var tentatives = 0;
console.time("timer");

while (hash(mystere) != resultat) {
	mystere = "";
	tentatives++;
	for (var i = 0; i < 8; i++) {
		mystere += lettresPossibles.charAt(Math.floor(Math.random() * lettresPossibles.length));
	}
}

console.log(mystere);
console.log(tentatives + " tentatives avant de trouver.");
console.timeEnd("timer");