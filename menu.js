function toggleMenu() {
    const menu = document.querySelector('.dropdown-content');
    const hamburger = document.querySelector('.hamburger');
    
    // Превключва класовете
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
}

// Затваряне на менюто при клик върху линк
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.dropdown-content').classList.remove('show');
        document.querySelector('.hamburger').classList.remove('active');
    });
});