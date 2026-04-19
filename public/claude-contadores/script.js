// --- Code rain en el hero (efecto Claude trabajando de fondo) ---
(function initCodeRain() {
    const container = document.querySelector('.code-rain');
    if (!container) return;
    if (window.innerWidth < 720) return; // off en mobile

    const snippets = [
        '$ claude',
        '> /conciliar',
        '✓ 847 mov',
        '✓ libro IVA',
        '◉ CLAUDE.md',
        '→ Auditor',
        '✓ informe',
        '/informe',
        '14.2s',
        '✓ deploy',
        '> /libro-iva',
        'Gs. 290M',
        '◉ Reportero',
        '✓ PDF',
        '→ SIFEN',
        'claude-code',
        '✓ conciliado',
        '→ ContadorBot',
        '✓ validado',
        '$ npm run',
        '> /alertas',
        '2.100.000 Gs',
        '✓ publicado',
        '> /declarar'
    ];

    const colCount = Math.max(8, Math.floor(window.innerWidth / 140));

    for (let i = 0; i < colCount; i++) {
        const col = document.createElement('div');
        col.className = 'rain-col';
        col.style.left = (i * (100 / colCount) + (Math.random() * 3 - 1.5)) + '%';
        col.style.animationDuration = (22 + Math.random() * 18) + 's';
        col.style.animationDelay = (-Math.random() * 30) + 's';

        const lineCount = 8 + Math.floor(Math.random() * 6);
        for (let j = 0; j < lineCount; j++) {
            const span = document.createElement('span');
            span.textContent = snippets[Math.floor(Math.random() * snippets.length)];
            col.appendChild(span);
        }

        container.appendChild(col);
    }
})();

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
