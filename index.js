// js/index.ts
var onLoad = function() {
  console.log("DOM fully loaded and parsed");
};
if (document.addEventListener)
  document.addEventListener("DOMContentLoaded", onLoad);
else
  window.attachEvent("onload", onLoad);
