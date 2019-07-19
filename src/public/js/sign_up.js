
// Sign UP
const pass = document.querySelector('.password');
const complexityItem = document.getElementsByClassName('complexity__item');
const complexity = document.querySelector('.complexity');
const content = document.querySelector('.content');
// On click
content.addEventListener('click', (event) => {
  // Toggle class "is-active"
  if (event.target === pass) {
    complexity.classList.add('active');
  } else {
    complexity.classList.remove('active');
  }
  pass.addEventListener('input', (eve) => {
    const lengthOfPass = eve.target.value.split('').length;
    if (lengthOfPass == 0) {
      complexity.classList.remove('active');
    } else if (lengthOfPass <= 7) {
      for (let i = 0; i < complexityItem.length; i++) {
        complexityItem[i].classList.remove('complexity__item--good');
        complexityItem[i].classList.remove('complexity__item--perfect');
      }
      complexityItem[0].classList.add('complexity__item--bad');
    } else if (lengthOfPass <= 8 && eve.target.value.match(/[A-Z]/i)) {
      for (let i = 0; i < complexityItem.length; i++) {
        complexityItem[i].classList.remove('complexity__item--bad');
        complexityItem[i].classList.remove('complexity__item--perfect');
      }
      for (let i = 0; i < complexityItem.length - 1; i++) {
        complexityItem[i].classList.add('complexity__item--good');
      }
    } else if (lengthOfPass > 8 && eve.target.value.match(/[A-Z]/i) && eve.target.value.match(/\d/i) && eve.target.value.match(/[a-z]/i)) {
      for (let i = 0; i < complexityItem.length; i++) {
        complexityItem[i].classList.remove('complexity__item--bad');
        complexityItem[i].classList.remove('complexity__item--good');
      }
      for (let i = 0; i < complexityItem.length; i++) {
        complexityItem[i].classList.add('complexity__item--perfect');
      }
    }
  });
  // Do something else, like open/close menu
});
