const toggleBtn = document.querySelector('.toggle-btn');
        const navbarNav = document.querySelector('.navbar-nav');

        toggleBtn.addEventListener('click', () => {
            navbarNav.classList.toggle('show');
        });