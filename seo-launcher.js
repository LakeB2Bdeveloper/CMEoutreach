/* Hidden SEO Inspector launcher.
   Modifier combos (Ctrl/Cmd+Shift+*) get captured by the host environment,
   and inline <script> blocks are stripped from the preview — so this lives in
   an external file and uses a no-modifier typed trigger instead:
   type the letters  s e o  in quick succession (outside a text field). */
(function () {
  var buf = '';
  var timer = null;
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key && e.key.length === 1) {
      buf = (buf + e.key.toLowerCase()).slice(-3);
      clearTimeout(timer);
      timer = setTimeout(function () { buf = ''; }, 1200);
      if (buf === 'seo') { buf = ''; window.location.href = 'seo-inspector.html'; }
    }
  });
})();
