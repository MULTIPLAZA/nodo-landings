// --- Terminal typewriter animation (se dispara al entrar en viewport) ---
(function initTerminalAnimation() {
    const terminals = document.querySelectorAll('[data-terminal-animated]');
    if (!terminals.length) return;

    terminals.forEach((terminal) => {
        const lines = terminal.querySelectorAll('.term-line, .term-spacer');
        if (!lines.length) return;

        let played = false;

        const playSequence = () => {
            if (played) return;
            played = true;

            let cumulativeDelay = 0;
            lines.forEach((line) => {
                const delay = parseInt(line.dataset.delay, 10) || 220;
                cumulativeDelay += delay;
                setTimeout(() => {
                    line.classList.add('term-visible');
                }, cumulativeDelay);
            });
        };

        if (!('IntersectionObserver' in window)) {
            playSequence();
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    playSequence();
                    observer.unobserve(terminal);
                }
            });
        }, { threshold: 0.25, rootMargin: '0px 0px -80px 0px' });

        observer.observe(terminal);
    });
})();

// --- Formulario de registro → WhatsApp ---
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const experiencia = document.getElementById('experiencia').value;
    const objetivo = document.getElementById('objetivo').value.trim();

    const expTexto = {
        'nada': 'No uso IA todavía',
        'chatgpt-basico': 'Uso ChatGPT de forma básica',
        'chatgpt-avanzado': 'Uso ChatGPT seguido',
        'varias': 'Uso varias herramientas de IA'
    };

    let mensaje = `Hola! Quiero reservar cupo en el taller de Claude Code para contadores.\n\n`;
    mensaje += `*Nombre:* ${nombre}\n`;
    mensaje += `*WhatsApp:* ${whatsapp}\n`;
    mensaje += `*Ciudad:* ${ciudad}\n`;
    mensaje += `*Experiencia con IA:* ${expTexto[experiencia] || experiencia}\n`;
    if (objetivo) {
        mensaje += `*Quiero automatizar:* ${objetivo}\n`;
    }
    mensaje += `\nQuedo atento/a a la info de precio y fecha.`;

    const urlWhatsapp = `https://wa.me/595992316979?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp, '_blank');
});
