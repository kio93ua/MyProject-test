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

            
            document.querySelector('.faq-decor-right').style.top = '69px';
        } else {
            
            document.querySelector('.faq-decor-right').style.top = '-55px';
        }
    });
});
