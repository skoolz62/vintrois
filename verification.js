function enter() { // On crée la fonction 
    var age = document.querySelector(".age"); // On récupere l'âge 
    var ageValue = age.value; // Age = valeur du nombre de "age"
    if (ageValue < 18) { // Si age et plus petit que 18
        document.location.href="index.html" // On redirige vers l'accueil
    } else { // Sinon 
        document.location.href="panier.html" // On continue vers le panier 
    }
}

function stopRKey(evt) { 
    var evt = (evt) ? evt : ((event) ? event : null); 
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); // Si l'évenement existe on l'applique sinon on l'annule 
    if ((evt.keyCode == 13 && (node.type=="number")))  { // Si on appuie sur entrée 
        evt.preventDefault(); // preventDefault supprime l'action par default 
        enter(); // On appelle la fonction enter() 
    } 
} 
document.onkeypress = stopRKey;  // On remplace l'action par default par notre fonction stopRKey



var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}
if (modal.style.display === "block") {
    span.onclick = function() {
        modal.style.display = "none";
    }
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
