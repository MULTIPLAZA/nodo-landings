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
