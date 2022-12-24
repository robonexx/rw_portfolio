const open = document.querySelector('.openBtn');
const close = document.querySelector('.closeBtn');
const menu = document.querySelector('nav');
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
  menu.style.transform = 'translateX(110%)';
});

const lines = document.querySelectorAll('.text');
let currIdx = 0;

function animateNextLine() {
  lines.forEach((t) => (t.style.display = 'none'));
  currIdx = currIdx % lines.length;

  lines[currIdx].style.animation = 'text-animation 3s';
  lines[currIdx].style.animationDirection = 'alternate';

  lines[currIdx].style.display = 'block';
  currIdx++;

  setTimeout(animateNextLine, 3000);
}

animateNextLine();
