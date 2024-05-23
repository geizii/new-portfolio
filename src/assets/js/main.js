document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.projects-box');
    
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var url = card.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});

