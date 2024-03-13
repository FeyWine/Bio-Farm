// Fonction pour activer le mode sombre
function activerModeSombre() {
    document.body.style.backgroundColor = '#333'; // Fond sombre
    document.body.style.color = '#fff'; // Texte blanc
    // Autres styles pour le mode sombre
}

// Fonction pour désactiver le mode sombre
function desactiverModeSombre() {
    document.body.style.backgroundColor = ''; // Retour au fond par défaut
    document.body.style.color = ''; // Retour au texte par défaut
    // Autres styles pour le mode clair
}

// Fonction pour basculer entre le mode sombre et le mode clair
function basculerModeSombre() {
    var modeSombreActive = document.body.classList.contains('dark-mode');
    if (modeSombreActive) {
        desactiverModeSombre();
    } else {
        activerModeSombre();
    }
    document.body.classList.toggle('dark-mode'); // Bascule la classe dark-mode
}

// Ajouter un gestionnaire d'événements à la div du logo pour basculer le mode sombre
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('modeSombreDiv').addEventListener('click', basculerModeSombre);
});