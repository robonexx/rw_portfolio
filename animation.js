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
    });
  },
  {
    threshold: 1,
  }
);

arr.forEach((a) => {
  let textLineArr = a.textContent.split(' ');

  console.log(textLineArr);
  //      Set blank variable
  let html = '';
  //     Get the elements animation classes
  let animation = a.classList;
  console.log(animation);
  //    Our split function
  for (i = 0; i < textLineArr.length; ++i) {
    //   recreate element in html variable with split words, addign "parent" element's class, add animation delay. The new elements have to be divs and not spans to support animation
    html.innerHTML +=
      " <div style='animation-delay:" +
      i * 200 +
      "ms; display:inline-block' class='" +
      animation +
      "'>" +
      textLineArr[i].textContent +
      '</div>';

    console.log(html);

    a.innerHTML = html;

    console.log(a.textContent);
  }

  observer.observe(a);
});
