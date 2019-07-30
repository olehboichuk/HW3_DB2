// profile content swap
const result = document.querySelector('.results__map');
const map = document.querySelector('.map');
const sortItems = document.querySelector('.sort__items');
const resultsList = document.querySelector('.results__list');
const results = document.querySelector('.results__results');
// On click
result.addEventListener('click', () => {
  // Toggle class "is-active"
  if (resultsList.classList.contains('list--active')) {
    resultsList.classList.remove('list--active');
    sortItems.classList.remove('list--active');
    map.classList.add('list--active');
    results.classList.add('list--active');
    result.classList.remove('list--active');
  } else {
    resultsList.classList.add('list--active');
    sortItems.classList.add('list--active');
    map.classList.remove('list--active');
  }
});
results.addEventListener('click', () => {
  // Toggle class "is-active"
    resultsList.classList.add('list--active');
    sortItems.classList.add('list--active');
    map.classList.remove('list--active');
    result.classList.add('list--active');
    results.classList.remove('list--active');
});
