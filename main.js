"use strict"
  const toggle = document.getElementById('toggle');
  const header = document.getElementById('header');

  toggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });