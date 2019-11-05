let buttonLeft = document.getElementById('left')
let buttonRight = document.getElementById('right')
let elems = document.querySelectorAll('.img__item');
let count = 0;
moveSlide()

function moveSlide() {

  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.add('opacity');
  }
  elems[count].classList.remove('opacity')
}

buttonLeft.onclick = function () {
  if (count - 1 === -1) {
    count = elems.length - 1;
  } else {
    count--;
  }
  moveSlide();
};
buttonRight.onclick = function () {
  if (count === elems.length - 1) {
    count = 0;
  } else {
    count++
  }
  moveSlide();
};