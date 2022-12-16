// class or id selector
const myForm = document.querySelector("#myForm");
const formCheckbox = document.querySelector("#formCheckbox");
const singUpButton = document.querySelector("#singUpButton");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const errorDiv = document.querySelector("#errorDiv");
const errorEmail = document.querySelector("#errorEmail");
const errorPassword = document.querySelector("#errorPassword");
const errorConfirmPassword = document.querySelector("#errorConfirmPassword");

// add Event Listener

myForm.addEventListener("submit", (e) => {
  myFormFunction(e);
});
formCheckbox.addEventListener("click", (e) => {
  formCheckboxFunction(e);
});

// function making

const myFormFunction = (e) => {
  e.preventDefault();

  // username >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if (username.value.length === 0) {
    username.className = "is-invalid form-control";
    errorDiv.innerHTML = "Please inter your name";
  } else if (!username.value.match(/^[a-zA-Z\-]+$/)) {
    username.className = "is-invalid form-control";
    errorDiv.innerHTML = "Invalid Name";
  } else {
    username.className = "is-valid form-control";
    errorDiv.innerHTML = "";
  }

  // email >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if (email.value.length === 0) {
    email.className = "is-invalid form-control";
    errorEmail.innerHTML = "please inter your email";
  } else if (
    !email.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    email.className = "is-invalid form-control";
    errorEmail.innerHTML = "Invalid Email";
  } else {
    email.className = "is-valid form-control";
    errorEmail.innerHTML = "";
  }

  // password >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if (password.value.length === 0) {
    password.className = "is-invalid form-control";
    errorPassword.innerHTML = "please inter your password";
  } else if (
    !password.value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/) ||
    password.value.length < 8
  ) {
    password.className = "is-invalid form-control";
    errorPassword.innerHTML = "please enter 8 digit password";
  } else {
    password.className = "is-valid form-control";
    errorPassword.innerHTML = "";
  }

  // confirm password >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if (confirmPassword.value.length === 0) {
    confirmPassword.className = "is-invalid form-control";
    errorConfirmPassword.innerHTML = "please inter your password again";
  } else if (
    !confirmPassword.value.match(password.value.length) ||
    confirmPassword.value.length < 8
  ) {
    confirmPassword.className = "is-invalid form-control";
    errorConfirmPassword.innerHTML = "password does't match";
  } else {
    confirmPassword.className = "is-valid form-control";
    errorConfirmPassword.innerHTML = "";
  }
};

// check box

const formCheckboxFunction = (e) => {
  e.target.checked === false
    ? (singUpButton.disabled = true)
    : (singUpButton.disabled = false);
};
