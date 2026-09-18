(function () {
  var pairs = [
    [
      "How comfortable lies are bankrupting your organization \u2014 and how to build one that runs on truth.",
      "Why Companies Lie and How to Change Yours",
    ],
    [
      "How Comfortable Lies Are Bankrupting Your Organization \u2014 and How to Build One That Runs on Truth.",
      "Why Companies Lie and How to Change Yours",
    ],
    ["See the place", "See it in your organization"],
    ["SEE THE PLACE", "SEE IT IN YOUR ORGANIZATION"],
    ["The diagnostic is the place.", "The diagnostic is your organization."],
    ["The place", "Your organization"],
    ["THE PLACE", "YOUR ORGANIZATION"],
  ];
  function apply() {
    if (document.title === "The Courage Economy") {
      document.title =
        "The Courage Economy \u2014 Why Companies Lie and How to Change Yours";
    }
    document
      .querySelectorAll('meta[name="description"], meta[property="og:title"]')
      .forEach(function (m) {
        pairs.forEach(function (p) {
          if (m.content && m.content.indexOf(p[0]) !== -1) {
            m.content = m.content.split(p[0]).join(p[1]);
          }
        });
      });
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var text = node.nodeValue;
      var next = text;
      pairs.forEach(function (p) {
        if (next.indexOf(p[0]) !== -1) next = next.split(p[0]).join(p[1]);
      });
      if (next !== text) node.nodeValue = next;
    }
    document.querySelectorAll('img[src*="book-cover"]').forEach(function (img) {
      img.alt =
        "The Courage Economy \u2014 Why Companies Lie and How to Change Yours";
    });
  }
  apply();
  document.addEventListener("DOMContentLoaded", apply);
  window.addEventListener("load", apply);
  var n = 0;
  var id = setInterval(function () {
    apply();
    if (++n > 40) clearInterval(id);
  }, 200);
})();
