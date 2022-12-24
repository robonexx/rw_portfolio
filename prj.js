const header = document.querySelector('.colorHeadline');
const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  let randomColor = () => {
    return Math.floor(Math.random() * 255) + 1;
  };

  bodyColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}) `;
  headerColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  btnColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  wrapperColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

  body.style.backgroundColor = bodyColor;
  wrapper.style.backgroundColor = wrapperColor;
  header.style.color = headerColor;
  btn.style.backgroundColor = btnColor;
  btn.innerHTML.style.color = btnColor;
});

const colors = [
  'sectionZero',
  'sectionOne',
  'sectionTwo',
  'sectionThree',
  'sectionFour',
];

const sections = [...document.getElementsByTagName('section')];

window.addEventListener('scroll', function () {
  document.body.style = '';

  const colorScroll = document.getElementsByClassName('colorScroll');

  const scrollFromTop = window.pageYOffset;

  for (let i = 0; sections.length > i; i++) {
    if (scrollFromTop <= sections[i].offsetTop) {
      document.body.className = colors[i];
      break;
    }
  }
});

/* 
btn.addEventListener('click', () => {
let randomColor = () => {
  return Math.floor(Math.random() * 255) +1;
}

bodyColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}) `;
body.style.backgroundColor = bodyColor;

}); */
