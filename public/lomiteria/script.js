/* =============================================
   Ampersand POS — Landing Lomitería / Pizzería
   JS mínimo. Cero dependencias.
   ============================================= */

(function () {
  'use strict';

  // --- Scroll suave en enlaces internos (fallback al CSS scroll-behavior) ---
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // --- Garantizar evento fbq.Contact también si falla el onclick inline ---
  // (por si algún clic se dispara via teclado o el attr se pierde)
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof window.fbq === 'function') {
        try { window.fbq('track', 'Contact'); } catch (err) { /* silencioso */ }
      }
    });
  });

  // --- Log simple de carga (útil para debug local) ---
  if (window.console && console.info) {
    console.info('[Ampersand POS Lomitería] Landing cargada OK');
  }
})();
