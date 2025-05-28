document.addEventListener('DOMContentLoaded', function() {
    const donForm = document.getElementById('donForm');
    const confirmation = document.getElementById('confirmation');
    const confirmationText = document.getElementById('confirmation-text');
    const montantInput = document.getElementById('montant');

    // Sélection automatique du montant via les cartes
    document.querySelectorAll('.btn-select').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.option-card');
            const montant = card.getAttribute('data-montant');
            montantInput.value = montant;
            
            // Scroll vers le formulaire
            document.querySelector('.formulaire-don').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Soumission du formulaire (simulé)
    donForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const montant = formData.get('montant');
        const frequence = formData.get('frequence');
        const paiement = formData.get('paiement');
        
        // Message de confirmation personnalisé
        let message = `Votre don de ${montant}€ a bien été enregistré.`;
        if (frequence === 'mensuel') {
            message += ' (Mensuel)';
        }
        message += ` Méthode : ${paiement === 'mobile_money' ? 'Mobile Money' : 'Carte Bancaire'}.`;
        
        // Afficher la confirmation
        confirmationText.textContent = message;
        donForm.style.display = 'none';
        confirmation.style.display = 'block';
        
        // Scroll vers la confirmation
        confirmation.scrollIntoView({ behavior: 'smooth' });
    });

    // Gestion du montant personnalisé
    document.querySelector('.custom-input').addEventListener('input', function() {
        if (this.value) {
            montantInput.value = this.value;
        }
    });
});