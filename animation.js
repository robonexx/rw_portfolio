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
      let trgt = entry.target.className;
      trgt = '';
      console.log('e target className: ' + trgt);
      console.log('after change: ' + entry.target.classList);
      for (const child of entry.target.children) {
        if (entry.isIntersecting) {
          child.classList.add('animate');
          child.classList.remove('stop');
          console.log('is intersecting child elem class: ' + child.classList);

          /* entry.target.classList.add('slideInLeft'); */
        } else {
          child.classList.remove('animate');
          child.classList.add('stop');
          /*  child.style.transform = 'tranalsteX(-100vw)'; */
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

    a.classList.remove('textSplit', 'stop');
    /* a.classList = replaceClass(`${a.className}`, '') */
    console.log('after removal : ' + a.classList);
  }

  console.log(a.textContent);
});

arr.forEach((a) => {
  console.log('observer classlist: ' + a.classList);
  observer.observe(a);
});

function replaceClass(classN, newClassN) {
  let target = document.getElementsByClassName(`${classN}`)[1];
  target.className = newClassN;
}

/* 
"http://stackoverflow.com/questions/11115998" StackOverflow question : Using classList add and classlist remove with several classes
 */

/* 
function addClasses (el, classes) {
  classes = Array.prototype.slice.call (arguments, 1);
  console.log (classes);
  for (var i = classes.length; i--;) {
    classes[i] = classes[i].trim ().split (/\s*,\s*|\s+/);
    for (var j = classes[i].length; j--;)
      el.classList.add (classes[i][j]);
  }
}

function removeClasses (el, classes) {
  classes = Array.prototype.slice.call (arguments, 1);
  for (var i = classes.length; i--;) {
    classes[i] = classes[i].trim ().split (/\s*,\s*|\s+/);
    for (var j = classes[i].length; j--;)
      el.classList.remove (classes[i][j]);
  }
}

var test = document.createElement ('div');
addClasses (test, "simple", "list", "of  classes, in a single string");
document.write ('<br>classList : ' + test.classList);
removeClasses (test, "list, of  classes, in a single string");
document.write ('<br>classList : ' + test.classList);
addClasses (test, "simple  ", "  three, four", " five");
document.write ('<br>classList : ' + test.classList);
*/
