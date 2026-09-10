(function () {
  var from = "diagnostic.bellomoleadership.com";
  var to = "diagnostic.thecourageeconomy.net";
  function fix() {
    document.querySelectorAll("a[href*='" + from + "']").forEach(function (a) {
      a.href = a.href.split(from).join(to);
    });
  }
  fix();
  document.addEventListener("DOMContentLoaded", fix);
  window.addEventListener("load", fix);
  var n = 0;
  var id = setInterval(function () {
    fix();
    if (++n > 25) clearInterval(id);
  }, 200);
})();
