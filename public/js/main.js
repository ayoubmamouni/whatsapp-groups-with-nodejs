const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');

//butons
const registerBtn = document.querySelector('.register');
const loginBtn = document.querySelector('.login');


//close button
const closeFormRegisterBtn = document.querySelector('.close-pop-up-form-register');
const closeFormLoginBtn = document.querySelector('.close-pop-up-form-login');

//events
registerBtn.addEventListener('click', () => registerForm.classList.add('show-form'))
loginBtn.addEventListener('click', () => loginForm.classList.add('show-form'))

//close form when close btn is clicked
closeFormRegisterBtn.addEventListener('click', () => registerForm.classList.remove('show-form'))
closeFormLoginBtn.addEventListener('click', () => loginForm.classList.remove('show-form'))


//scroll animation..
const loadMoreBtn = document.querySelector('.load-more');
const animations = document.querySelector('.animations');
loadMoreBtn.addEventListener('click', () => animations.classList.toggle('active'))