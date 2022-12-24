let arr = Array.from(document.querySelectorAll('.textSplit'));

/* console.log('array of texts: ' + arr); */
/* 
let winHeight = window.innerHeight;

window.addEventListener('resize', function () {
  winHeight = window.innerHeight;
}); */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      for (const child of entry.target.children) {
        if (entry.isIntersecting) {
          console.log('child elem tag: ' + child.classList);
          child.classList.add('slideInLeft');

          /* entry.target.classList.add('slideInLeft'); */
        } else {
          child.classList.remove('slideInLeft');
          entry.target.style.transform = '-100vw';
        }
      }
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      } else {
      }
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

    a.classList.remove('textSplit');
  }

  console.log(a.textContent);
});

arr.forEach((a) => {
  console.log(a.classList);
  observer.observe(a);
});
