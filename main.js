function affichage() {
    var score = document.getElementById('affichage').innerHTML;
    score++;
    document.getElementById('affichage').innerHTML = score;
}