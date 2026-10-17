(function () {
  var tip = document.querySelector('.tip');
  if (!tip) return;
  function show(el, x, y) {
    tip.textContent = el.getAttribute('data-tip');
    tip.hidden = false;
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.min(window.innerWidth - w - 10, Math.max(10, x + 14));
    var top = y - h - 12 < 10 ? y + 16 : y - h - 12;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }
  function hide() { tip.hidden = true; }
  Array.prototype.forEach.call(document.querySelectorAll('[data-tip]'), function (el) {
    el.addEventListener('pointermove', function (ev) { show(el, ev.clientX, ev.clientY); });
    el.addEventListener('pointerleave', hide);
    el.addEventListener('focus', function () {
      var r = el.getBoundingClientRect();
      show(el, r.left + r.width / 2, r.top);
    });
    el.addEventListener('blur', hide);
  });
  window.addEventListener('scroll', hide, { passive: true });
})();
