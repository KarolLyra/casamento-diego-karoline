/* ============================================
   CASAMENTO DIEGO & KAROLINE
   JavaScript mínimo — site funciona sem ele
   ============================================ */

(function () {
  'use strict';

  // Indica que o JavaScript carregou
  document.documentElement.classList.add('js-loaded');

  // Prevenção de clique duplicado no botão
  var btn = document.querySelector('.hero__btn');
  if (btn) {
    var clicked = false;
    btn.addEventListener('click', function () {
      if (clicked) return;
      clicked = true;
      // Libera o clique após 3 segundos
      setTimeout(function () {
        clicked = false;
      }, 3000);
    });
  }
})();
