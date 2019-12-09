(function() {
  let updateDom = function() {
    try {
      let header = document.getElementsByTagName("header").item(0);
      header.remove();
    } catch (e) {}
    try {
      let footer = document.getElementsByTagName("footer").item(0);
      footer.remove();
    } catch (e) {}
    try {
      let mainWrapper = document.getElementById("main-wrapper");
      mainWrapper.style.height = "100vh";
      mainWrapper.style.width = "100vw";
    } catch (e) {}
    try {
      let main = document.getElementById("main");
      main.style.borderRadius = 0;
    } catch (e) {}
  }
  updateDom();
  setInterval(updateDom, 5000);
})();