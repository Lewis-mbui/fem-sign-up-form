const formElement = document.querySelector('.js-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');


function checkFirstName() {
  const firstName = firstNameInput.value.trim();
  if (firstName === null || firstName === '')
    setError(firstNameInput, 'First Name cannot be empty');
  else setSuccess(firstNameInput);
}

function checkLastName() {
  const lastName = lastNameInput.value.trim();

  if (lastName === '' || lastName === null)
    setError(lastNameInput, 'Last Name cannot be empty')
  else
    setSuccess(lastNameInput);
}

function checkEmail() {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === null || email === '')
    setError(emailInput, 'Email cannot be empty');
  else if (!regex.test(email))
    setError(emailInput, 'Looks like this is not an email');
  else setSuccess(emailInput);
}

function checkPassword() {
  const password = passInput.value.trim();

  if (password === '' || password === null)
    setError(passInput, 'Password cannot be empty');
  else setSuccess(passInput);
}

function setError(input, message) {
  const formGroup = input.parentElement.parentElement;

  formGroup.classList.remove('success');
  formGroup.classList.add('error');

  formGroup.querySelector('.error-message')
    .innerText = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement.parentElement;

  formGroup.classList.add('success');
  formGroup.classList.remove('error');

  formGroup.querySelector('.error-message')
    .innerText = '';
}

emailInput.addEventListener('input', () => {
  checkEmail();
})

firstNameInput.addEventListener('input', () => {
  checkFirstName();
});

lastNameInput.addEventListener('input', () => {
  checkLastName();
});

passInput.addEventListener('input', () => {
  checkPassword();
});

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  checkFirstName();
  checkLastName();
  checkEmail();
  checkPassword();

  if(document.querySelectorAll('.error').length === 0) {
    document.querySelectorAll('.success')
      .forEach((element) => {
        element.classList.remove('success');
      });

    alert('Registration successful. Thank you!');
    formElement.submit();
  }
});