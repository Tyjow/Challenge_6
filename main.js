var compteur = 1;
var score = 0;
var prix = 50;

function affichage() {
    score = score + compteur;
    document.getElementById('affichage').innerHTML = score;
}

function incrementer() {
	if (score >= 20*compteur*compteur) {
		compteur = compteur*2;
		score = score - prix;
		if (score < 0) {
			score = 0;
		}
		prix = prix*2;
		document.getElementById('multiplicateur').innerHTML = "Multiplicateur x" + compteur;
		document.getElementById('palier').innerHTML = "Palier du prochain : " + 20*compteur*compteur;
		document.getElementById('affichage').innerHTML = score;
	}
	else {
		alert("Tu ne peux pas encore acheter !");
	}
}