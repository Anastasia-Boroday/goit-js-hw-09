!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",!0),t.stop.removeAttribute("disabled"),intervalId=setInterval((function(){t.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stop.addEventListener("click",(function(){t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0),clearInterval(intervalId)}))}();
//# sourceMappingURL=01-color-switcher.80bd666e.js.map