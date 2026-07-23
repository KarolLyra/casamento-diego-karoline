/* ============================================
   CASAMENTO DIEGO & KAROLINE
   JavaScript mínimo — site funciona sem ele
   ============================================ */

(function () {
  'use strict';

  // Indica que JavaScript está disponível
  document.documentElement.classList.add('js-loaded');

  // Prevenção de clique duplicado no botão
  var btn = document.querySelector('.btn');
  if (btn) {
    var clicked = false;
    btn.addEventListener('click', function () {
      if (clicked) return;
      clicked = true;
      setTimeout(function () {
        clicked = false;
      }, 3000);
    });
  }
})();
