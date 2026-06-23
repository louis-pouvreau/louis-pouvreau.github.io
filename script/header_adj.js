function underlineUpdate() {
  root.style.setProperty('--width_text_header', document.getElementById('text_header').getBoundingClientRect().width); 
}


window.addEventListener('load', underlineUpdate);
window.addEventListener('resize', underlineUpdate);
