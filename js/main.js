document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        
        const isActive = button.classList.contains('active');

        document.querySelectorAll('.accordion-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.classList.remove('open');
        });

        
        if (!isActive) {
            button.classList.add('active');
            button.nextElementSibling.classList.add('open');
        }
    });
});

