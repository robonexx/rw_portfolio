let arr = Array.from(document.querySelectorAll('.textSplit'));

console.log(arr);

let winHeight = window.innerHeight;

// Recalc height of window in case of resize
window.addEventListener('resize', function () {
  winHeight = window.innerHeight;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('animated', entry.isIntersecting);
      console.log(
        'this i classList from entry inside observer: ' + entry.target.classList
      );
    });
  },
  {
    threshold: 1,
  }
);
/* 
arr.forEach((a) => {
  let textLineArr = a.textContent.split(' ');

  console.log(textLineArr);
  
  let html = '';
  
  let animation = a.classList;
  console.log(animation);
  
  for (i = 0; i < textLineArr.length; ++i) {
   
    html.innerHTML +=
      " <div style='animation-delay:" +
      i * 200 +
      "ms; display:inline-block' class='" +
      animation +
      "'>" +
      textLineArr[i] +
      '</div>';

    console.log(html);

    a.append(html);
  }

  console.log(a.textContent);
}); */

arr.forEach((arr) => {
  console.log(arr.classList);
  observer.observe(arr);
});
