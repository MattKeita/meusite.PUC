// main.js - scripts de comportamento global
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav-list');
  if(toggle){
    toggle.addEventListener('click', () => {
      const shown = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', shown ? 'true' : 'false');
    });
  }
});
