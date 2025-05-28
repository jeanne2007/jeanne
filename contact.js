document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la carte
    const map = L.map('map').setView([-4.322447, 15.307045], 15); // Coordonnées de Lingwala, Kinshasa

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Ajout d'un marqueur
    L.marker([-4.322447, 15.307045]).addTo(map)
        .bindPopup('Siège de UpcDonat<br>Avenue de libération, Lingwala')
        .openPopup();

    // Gestion du formulaire
    const contactForm = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulation d'envoi
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'none';
            confirmation.style.display = 'block';
        }, 1000);
    });
});