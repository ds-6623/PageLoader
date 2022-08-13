const progressBar = document.getElementsByClassName('loader')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + Math.random(1))
}, 50);


setTimeout(function() {
  document.getElementById('loader-container').style.opacity = "0";
}, 15000);


setTimeout(function() {
  document.getElementById('loader-container').style.display = "none";
}, 20000);


