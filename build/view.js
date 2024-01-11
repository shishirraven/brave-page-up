/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle scroll event
  function handleScroll() {
    var scrollPosition = window.scrollY;
    var scrollToTopContainer = document.getElementById("scroll-to-top-container");
    if (scrollPosition > 100) {
      scrollToTopContainer.style.display = "block";
    } else {
      scrollToTopContainer.style.display = "none";
    }
  }

  // Event listener for scroll
  window.addEventListener("scroll", handleScroll);

  // Event listener for click on "scroll-to-top-container"
  var scrollToTopContainer = document.getElementById("scroll-to-top-container");
  scrollToTopContainer.addEventListener("click", function () {
    // For smooth scrolling
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // For older browsers without smooth scrolling support
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;

    return false;
  });

  // Check initial position on page load
  handleScroll();
});
/******/ })()
;
//# sourceMappingURL=view.js.map