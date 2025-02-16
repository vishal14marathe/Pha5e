// Initial animations
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    const shapes = document.querySelectorAll('.hero-shape');
    const images = document.querySelectorAll('.hero-image');

    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Animate title, subtitle, and button
    tl.to(heroTitle, { duration: 1, opacity: 1, y: -20, ease: 'power2.out' })
      .to(heroSubtitle, { duration: 1, opacity: 1, y: -20, ease: 'power2.out' }, '-=0.5')
      .to(ctaButton, { duration: 1, opacity: 1, y: -20, ease: 'power2.out' }, '-=0.5');

    // Animate shapes
    shapes.forEach((shape, index) => {
        tl.to(shape, {
            duration: 1.5,
            scale: 1,
            ease: 'elastic.out(1, 0.3)',
            delay: index * 0.2
        }, '-=1');
    });

    // Animate images
    images.forEach((image, index) => {
        tl.to(image, {
            duration: 1,
            opacity: 0.3,
            ease: 'power2.out',
            delay: index * 0.5
        }, '-=1');
    });

    // Mouse movement effect with requestAnimationFrame
    const hero = document.querySelector('.hero');
    let mouseX = 0;
    let mouseY = 0;
    let rafId = null;

    hero.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
        if (!rafId) {
            rafId = requestAnimationFrame(updateShapes);
        }
    });

    function updateShapes() {
        shapes.forEach((shape, index) => {
            const speed = 0.05 + index * 0.05;
            gsap.to(shape, {
                duration: 0.5,
                x: mouseX * window.innerWidth * speed,
                y: mouseY * window.innerHeight * speed,
                ease: 'power2.out'
            });
        });
        rafId = null;
    }
});