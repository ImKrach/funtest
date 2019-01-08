// La combinaison de lettres possibles
const lettresPossibles = "acdegilmnoprstuw";

// Fonction de hash qui retourne un entier
function hash(s) {
	let h = 7;

	for (let i = 0; i < s.length; i++) {
		h = h * 37 + lettresPossibles.indexOf(s[i]);
	}

	return h;
}

// Fonction qui permet de dehash
function dehash(resultat, taille) {
	// Stock le modulo
	let modulo;

	// La réponse à trouver
	let mystere = "";

	// On va faire taille fois l'inverse de ce qui est fait
	for (let i = 0; i < taille; i++) {
		// Modulo 37 pour connaitre le reste
		modulo = resultat % 37;
		
		// Le reste correspond à indexOf sur lettresPossibles, on concatène la lettre trouvée
		mystere += lettresPossibles.charAt(modulo);

		// On soustrait le modulo et on divise par 37 pour remonter la boucle
		resultat = (resultat - modulo) / 37;
	}

	// Le résultat est inversé, on doit le remettre à l'endroit
	mystere = mystere.split("").reverse().join("");

	return mystere;
}

// Affiche la réponse
console.log("La chaîne mystere vaut : " + dehash(24682779393128, 8));

// On peut tester agile
console.log("On retrouve bien agile : " + dehash(hash("agile"), 5));
