const header = document.querySelector('.colorHeadline');
const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');

btn.addEventListener('click', () => {

  // random color generator
  // choosing a n umber between 0.255
  // no shades yet
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


// creating array from sections
const sections = [...document.getElementsByTagName('section')];

// scroll event
window.addEventListener('scroll', function () {
  document.body.style = '';
/* 
  const colorScroll = document.getElementsByClassName('colorScroll'); */

  // page Y-axis off sett 
  const scrollFromTop = window.pageYOffset;

  // looping thru the sections and checking offset to top
  for (let i = 0; sections.length > i; i++) {
    if (scrollFromTop <= sections[i].offsetTop) {
      document.body.className = colors[i];
      break;
    }
  }
});


// keeping
/* 
btn.addEventListener('click', () => {
let randomColor = () => {
  return Math.floor(Math.random() * 255) +1;
}

bodyColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}) `;
body.style.backgroundColor = bodyColor;

}); */
