document.getElementById('arrow-down').addEventListener('click', () =>{
  document.getElementById('corp').scrollIntoView({behavior: 'smooth'});
});

setTimeout(() => {
  if (scrollY === 0) {
    document.getElementById('arrow-down').classList.add('transition-arrow');
  }
}, 2500);
