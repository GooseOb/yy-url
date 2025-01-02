// ==UserScript==
// @name         Copy current url
// @namespace    https://greasyfork.org/en/users/901750-gooseob
// @version      1.0.1
// @description  Copy current website url by pressing yy
// @author       GooseOb
// @license      MIT
// @match        *://*/*
// ==/UserScript==

(function () {
  let isPressed = false;
  document.addEventListener("keyup", function (e) {
    if (e.key === "y") {
      if (isPressed) {
        navigator.clipboard.writeText(window.location.href);
        isPressed = false;
      } else {
        isPressed = true;
        setTimeout(() => {
          isPressed = false;
        }, 1000);
      }
    }
  });
})();
