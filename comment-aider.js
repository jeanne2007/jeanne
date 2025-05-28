document.addEventListener('DOMContentLoaded', function() {
    const helpForm = document.getElementById('helpForm');
    const confirmation = document.getElementById('confirmation');

    // Soumission du formulaire
    helpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulation d'envoi
        setTimeout(() => {
            helpForm.style.display = 'none';
            confirmation.style.display = 'block';
            confirmation.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });

    // Sélection multiple stylisée
    const skillsSelect = document.getElementById('skills');
    if (skillsSelect) {
        skillsSelect.addEventListener('change', function() {
            const selected = Array.from(this.selectedOptions).map(opt => opt.value);
            console.log('Compétences sélectionnées:', selected);
        });
    }
});