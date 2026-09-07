// Animación de aparición: los textos suben ligeramente y se desvanecen
// hacia adentro conforme entran en el viewport al hacer scroll.
document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('#header-card-index p, #header-card-index img, main p, main h3, main a#ceremonia-button');

    if (!elementos.length) return;

    // Escalona pequeños retrasos entre textos que aparecen juntos (mismo contenedor)
    const gruposPorPadre = new Map();
    elementos.forEach((el) => {
        const padre = el.parentElement;
        if (!gruposPorPadre.has(padre)) gruposPorPadre.set(padre, []);
        gruposPorPadre.get(padre).push(el);
    });

    gruposPorPadre.forEach((grupo) => {
        grupo.forEach((el, indice) => {
            el.classList.add('reveal-text');
            el.style.transitionDelay = `${Math.min(indice, 5) * 0.12}s`;
        });
    });

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('is-visible');
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    elementos.forEach((el) => observador.observe(el));
});
