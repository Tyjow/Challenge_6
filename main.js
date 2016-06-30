function affichage() {
    var compteur = document.getElementById('affichage').innerHTML;
    compteur++;
    document.getElementById('affichage').innerHTML = compteur;
}