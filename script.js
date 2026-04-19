// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (hamburger && navMenu) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Header scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (!header) return;

    header.style.background = window.scrollY > 100 
        ? 'rgba(255,255,255,0.98)' 
        : 'rgba(255,255,255,0.95)';
});

// Footer injection
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer');
    if (footer && !footer.innerHTML.trim()) {
        footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>PS Max Services</h3>
                    <p>आपकी सभी जरूरतों का समाधान एक ही जगह।</p>
                </div>
                <div class="footer-column">
                    <h3>लिंक</h3>
                    <ul>
                        <li><a href="index.html">होम</a></li>
                        <li><a href="about.html">हमारे बारे में</a></li>
                        <li><a href="services.html">सेवाएं</a></li>
                        <li><a href="contact.html">संपर्क</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>संपर्क</h3>
                    <p>📞 9012595651</p>
                    <p>📧 psmaxservices@gmail.com</p>
                </div>
            </div>
        </div>`;
    }
});