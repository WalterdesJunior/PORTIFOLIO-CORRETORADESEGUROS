document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('a[href="#home"]');
    const sobreLink = document.getElementById('sobre-link');
    const servicosLink = document.querySelector('a[href="#servicos"]');
    const contatoLink = document.querySelector('a[href="#contato"]');
    const heroSection = document.getElementById('home');
    const sobreSection = document.getElementById('sobre');
    const servicosSection = document.getElementById('servicos');
    const contatoSection = document.getElementById('contato');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const heroContactBtn = document.querySelector('.hero-content .cta-btn');

    function hideAllSections() {
        heroSection.style.display = 'none';
        sobreSection.style.display = 'none';
        servicosSection.style.display = 'none';
        contatoSection.style.display = 'none';
    }

    function showSection(section) {
        hideAllSections();
        section.style.display = section === heroSection ? 'flex' : 'block';
        window.scrollTo(0, 0);
    }

    function closeMenu() {
        navLinks.classList.remove('active');
    }

    function handleNavClick(e, section) {
        e.preventDefault();
        showSection(section);
        closeMenu();
    }

    homeLink.addEventListener('click', (e) => handleNavClick(e, heroSection));
    sobreLink.addEventListener('click', (e) => handleNavClick(e, sobreSection));
    servicosLink.addEventListener('click', (e) => handleNavClick(e, servicosSection));
    contatoLink.addEventListener('click', (e) => handleNavClick(e, contatoSection));

    heroContactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(contatoSection);
    });

    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Mostrar a seção inicial (home) por padrão
    showSection(heroSection);

});


    