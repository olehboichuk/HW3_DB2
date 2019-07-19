
// profile content swap
const personal = document.querySelector('.headline__personal');
const account = document.querySelector('.headline__account');
const userPersonal = document.querySelector('.user__personal');
const userAccount = document.querySelector('.user__account');
const underlinePersonal = document.querySelector('.underline__personal');
const underlineAccount = document.querySelector('.underline__account');
// On click
personal.addEventListener('click', () => {
  // Toggle class "is-active"
  if (userAccount.classList.contains('account-active')) {
    userAccount.classList.remove('account-active');
    userPersonal.classList.add('personal-active');
    if (!personal.classList.contains('headline__active')) {
      personal.classList.add('headline__active');
      account.classList.add('headline__nonact');
      underlinePersonal.classList.add('underline__active');
      underlineAccount.classList.add('underline__nonact');

      personal.classList.remove('headline__nonact');
      account.classList.remove('headline__active');
      underlinePersonal.classList.remove('underline__nonact');
      underlineAccount.classList.remove('underline__active');
    }
  }
});
account.addEventListener('click', () => {
  // Toggle class "is-active"
  if (userPersonal.classList.contains('personal-active')) {
    userPersonal.classList.remove('personal-active');
    userAccount.classList.add('account-active');
    if (!account.classList.contains('headline__active')) {
      account.classList.add('headline__active');
      personal.classList.add('headline__nonact');
      underlineAccount.classList.add('underline__active');
      underlinePersonal.classList.add('underline__nonact');

      account.classList.remove('headline__nonact');
      personal.classList.remove('headline__active');
      underlineAccount.classList.remove('underline__nonact');
      underlinePersonal.classList.remove('underline__active');
    }
  }
});
