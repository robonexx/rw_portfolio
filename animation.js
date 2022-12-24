let arr = Array.from(document.querySelectorAll('.textSplit'));

console.log('array of texts: ' + arr);
/* 
let winHeight = window.innerHeight;

window.addEventListener('resize', function () {
  winHeight = window.innerHeight;
}); */

const observer = new IntersectionObserver(
  (entries, cls) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('slideInLeft', entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
      console.log(
        'this i classList from entry inside observer: ' + entry.target.classList
      );
    });
  },
  {
    threshold: 1,
    rootMargin: '50px',
  }
);

arr.forEach((a) => {
  let textLineArr = a.textContent.split(' ');

  console.log(textLineArr);

  let html = '';

  let animation = a.classList;
  console.log('animation class list: ' + animation);

  for (i = 0; i < textLineArr.length; ++i) {
    html +=
      " <span style='animation-delay:" +
      i * 200 +
      "ms; display:inline-block' class='" +
      animation +
      "'>" +
      textLineArr[i] +
      '</span>';

    console.log(html);

    a.innerHTML = html;

    a.parentElement.classList.remove();
  }

  console.log(a.textContent);
});

arr.forEach((a) => {
  console.log(a.classList);
  observer.observe(a);
});
