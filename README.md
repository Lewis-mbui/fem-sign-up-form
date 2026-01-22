# Frontend Mentor - Intro Component with Sign Up Form

This is a solution to the [Intro Component with Sign Up Form](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1) challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

This is a fully responsive landing page built with **HTML5**, **CSS3**, and **vanilla JavaScript**. The project focuses on form validation, user feedback, accessibility, and responsive layout techniques.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Mobile Screenshot](#mobile-screenshot)
  - [Desktop Screenshot](#desktop-screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Features](#features)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive an error message when the form is submitted if:
  - Any input field is empty
  - The email address is not formatted correctly

### Mobile Screenshot

![](/assets/screenshots/mobile-screenshot.png)

### Desktop Screenshot

![](/assets/screenshots/desktop-screenshot.png)

### Links

Live Site URL: [Intro Component with Sign Up Form](https://fem-sign-up-form-alpha.vercel.app/)

## My process

### Features

- **Responsive layout** built with CSS Grid and mobile-first media queries
- **Client-side form validation** using vanilla JavaScript
- **Real-time input feedback** with error and success states
- **Accessible focus and hover states** for form controls
- **Regex-based email validation**
- **Reusable validation helpers** for clean and maintainable logic
- **Visual error indicators** using icons and inline messages

---

#### Form submission handling

```js
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  checkFirstName();
  checkLastName();
  checkEmail();
  checkPassword();

  if (document.querySelectorAll(".error").length === 0) {
    alert("Registration successful. Thank you!");
    formElement.submit();
  }
});
```

This ensures:

- The browser does not submit invalid data
- All fields are validated before submission
- submission only proceeds if no .error states exist

#### Email validation with regex

```js
function checkEmail() {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") setError(emailInput, "Email cannot be empty");
  else if (!regex.test(email))
    setError(emailInput, "Looks like this is not an email");
  else setSuccess(emailInput);
}
```

This checks:

- Empty email input
- Incorrect email format
- Valid email patterns before allowing success

#### Error and success state handling

```js
function setError(input, message) {
  const formGroup = input.parentElement.parentElement;

  formGroup.classList.add("error");
  formGroup.classList.remove("success");
  formGroup.querySelector(".error-message").innerText = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement.parentElement;

  formGroup.classList.add("success");
  formGroup.classList.remove("error");
  formGroup.querySelector(".error-message").innerText = "";
}
```

This helpers:

- Centralize UI state changes
- Keep validation logic clean and reusable
- Toggle CSS-driven visuals

### What I Learned

---

#### JavaScript & Form Validation

- Preventing default form submission
- Validating inputs using string trimming and regular expressions
- Structuring reusable validation functions per input field
- Dynamically toggling UI states using class manipulation

## Author

Github - [Lewis](https://github.com/Lewis-mbui)  
Frontend Mentor - [@Lewis-mbui](https://www.frontendmentor.io/profile/Lewis-mbui)
