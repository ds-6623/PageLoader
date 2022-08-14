function disableScroll() {
    scrollTop = window.pageXOffset || document.documentElement.scrollTop;

        window.onscroll = function() {
            window.scrollTo(scrollTop);
        };
};

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('loader-container').style.display = "none",
//     window.onscroll = function() {};
// });

setTimeout(function() {
    document.getElementById('loader-container').style.display = "none";
  }, 20000);