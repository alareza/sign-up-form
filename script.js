
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const telNumber = document.getElementById('tel-number');
const pword = document.getElementById('pword')
const pwordConfirm = document.getElementById('pword-confirm');
const submitBtn = document.getElementById('submit-btn');
const telNumberRegExp = /^\(\d{3}\)\d{3}-\d{4}$/;
const pwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address.");
  } else {
    email.setCustomValidity("");
  }
});

telNumber.addEventListener("input", (event) => {
  if (!telNumberRegExp.test(telNumber.value) && telNumber.value.length > 0) {
    telNumber.setCustomValidity("Please enter a valid 10 digit U.S. phone number (###)###-####.");
  } else {
    telNumber.setCustomValidity("");
  }
});

pword.addEventListener("input", (event) => {
  if (!pwordRegExp.test(pword.value)) {
    pword.setCustomValidity("Please enter a minimum of eight characters, at least one letter and one number.");
  } else {
    pword.setCustomValidity("");
  }
});

pwordConfirm.addEventListener("input", (event) => {
  if (pword.value !== pwordConfirm.value) {
    pwordConfirm.setCustomValidity("Passwords do not match, please try again.");
  } else {
    pwordConfirm.setCustomValidity("");
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  pwordConfirm.reportValidity();
  pword.reportValidity();
  telNumber.reportValidity();
  email.reportValidity();
  lastName.reportValidity();
  firstName.reportValidity();
});
