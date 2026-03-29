// main.js

// ===== Navbar Transparency on Scroll =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Animate Elements on Page Load =====
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.animate-up');
    animatedElements.forEach(el => {
        el.style.opacity = 1; // سيظهر عند التحميل
    });
});

// ===== Optional: Contact Form Submission Handling =====
// هنا مثال بسيط لمنع إعادة تحميل الصفحة عند الضغط على إرسال
const contactForm = document.querySelector('form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('تم إرسال رسالتك! (هذا مثال، يمكن ربطه بخادم لاحق)');
        contactForm.reset();
    });
}

// ===== Optional: Add more JS interactions here =====