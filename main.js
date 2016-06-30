var compteur = 1;
var score = 0;

function affichage() {
    score = score + compteur;
    document.getElementById('affichage').innerHTML = score;
}

function incrementer() {
	if (score >= 20*compteur*compteur) {
		compteur = compteur*2;
		score = score - 50;
		document.getElementById('multiplicateur').innerHTML = "multiplicateur x" + compteur;
		document.getElementById('palier').innerHTML = "Prix du prochain : " + 20*compteur*compteur;
	}
	else {
		alert("Tu ne peux pas encore acheter !");
	}
}