// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire pour la démo
    alert("Formulaire soumis avec succès !");
});
