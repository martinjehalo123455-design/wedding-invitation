// Animación de aparición: los textos suben ligeramente y se desvanecen
// hacia adentro conforme entran en el viewport al hacer scroll.
document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('#corazon-bordado-img, #header-card-index p, #header-card-index img, main p, main h3, main a#ceremonia-button, .icon');

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

// Carga diferida de los fondos de las secciones .foto (foto-1, foto-2):
// el background-image se asigna solo cuando la sección está a punto de
// entrar en el viewport, en vez de cargarse de inmediato con la página.
document.addEventListener('DOMContentLoaded', () => {
    const fondosLazy = document.querySelectorAll('.foto[data-bg]');
    if (!fondosLazy.length) return;

    const observadorFondos = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                const el = entrada.target;
                el.style.backgroundImage = `url('${el.dataset.bg}')`;
                observadorFondos.unobserve(el);
            }
        });
    }, { rootMargin: '200px 0px' });

    fondosLazy.forEach((el) => observadorFondos.observe(el));
});
