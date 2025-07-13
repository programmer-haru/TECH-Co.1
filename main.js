"use strict"
  const toggle = document.getElementById('toggle');
  const header = document.getElementById('header');

  toggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });

  
  { 
  function callback(entries,obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }


  const observer = new IntersectionObserver(callback, {
    threshold:1,
  });


  document.querySelectorAll(".fadein").forEach(el => {
  observer.observe(el);
  });
}