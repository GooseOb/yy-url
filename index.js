// ==UserScript==
// @name         Copy current url
// @namespace    https://greasyfork.org/en/users/901750-gooseob
// @version      1.0.4
// @description  Copy current website url by pressing yy
// @author       GooseOb
// @license      MIT
// @match        *://*/*
// ==/UserScript==

(function () {
  const isInput = (element) => {
    const tagName = element.tagName.toLowerCase();
    return (
      tagName === "input" || tagName === "textarea" || element.isContentEditable
    );
  };

  const listenForDoublePress = (check, action) => {
    let timeout = 0;
    document.addEventListener("keyup", (e) => {
      if (check(e)) {
        if (timeout) {
          action();
          clearTimeout(timeout);
          timeout = 0;
        } else {
          timeout = setTimeout(() => {
            timeout = 0;
          }, 1000);
        }
      }
    });
  };

  listenForDoublePress(
    (e) => e.key === "y" && !isInput(e.target),
    () => navigator.clipboard.writeText(window.location.href),
  );
})();
