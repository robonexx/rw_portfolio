const open = document.querySelector('.openBtn');
const close = document.querySelector('.closeBtn');
const menu = document.querySelector('.nav');
const headline = document.querySelector('h1');

console.log('connected');
open.addEventListener('click', () => {
  console.log('clicked');
  open.style.visibility = 'hidden';
  close.style.visibility = 'visible';
  close.style.transform = 'rotate(90deg)';
  menu.style.transform = 'translateX(0%)';
});

close.addEventListener('click', () => {
  console.log('clicked close');
  open.style.visibility = 'visible';
  close.style.visibility = 'hidden';
  menu.style.transform = 'translateX(100%)';
});

