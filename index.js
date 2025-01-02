// ==UserScript==
// @name         Copy current url
// @namespace    https://greasyfork.org/en/users/901750-gooseob
// @version      1.0.3
// @description  Copy current website url by pressing yy
// @author       GooseOb
// @license      MIT
// @match        *://*/*
// ==/UserScript==

(function () {
  let isPressed = false;
  const isInput = (element) => {
    const tagName = element.tagName.toLowerCase();
    return (
      tagName === "input" || tagName === "textarea" || element.isContentEditable
    );
  };

  document.addEventListener("keyup", (e) => {
    if (e.key === "y" && !isInput(e.target)) {
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
