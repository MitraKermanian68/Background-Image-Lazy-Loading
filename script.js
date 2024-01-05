document.addEventListener("DOMContentLoaded", function () {
  var LazyBG;

  if ("IntersectionObserver" in window) {
    LazyBG = this.querySelectorAll(".bg");

    var bgObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var bgImg = entry.target;
          bgImg.classList.remove("bg");
          bgObserver.unobserve(bgImg);
        }
      });
    });
    LazyBG.forEach(function (bgImg) {
      bgObserver.observe(bgImg);
    });
  }
});
