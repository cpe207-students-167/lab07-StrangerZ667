const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PassInput = document.querySelector("#password-input");
const CpassInput = document.querySelector("#password-confirm-input");

const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};

PassInput.onkeyup = () => {
  PassInput.classList.remove("is-valid");
  PassInput.classList.remove("is-invalid");
};

CpassInput.onkeyup = () => {
  CpassInput.classList.remove("is-valid");
  CpassInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPassOk = false;
  isCpassOk = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (validateEmail(EmailInput.value)) {
    EmailInput.classList.add("is-valid");
    isEmailOk = true;
  } else {
    EmailInput.classList.add("is-invalid");
  }
0
  if (PassInput.value.length < 6) {
    PassInput.classList.add("is-invalid");
  } else {
    PassInput.classList.add("is-valid");
    isPassOk = true;
  }

  if (CpassInput.value !== PassInput.value || CpassInput.value === "" || CpassInput.value.length < 6) {
    CpassInput.classList.add("is-invalid");
  } else {
    CpassInput.classList.add("is-valid");
    isCpassOk = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPassOk && isCpassOk) alert("Registered successfully");
};

resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  EmailInput.value = "";
  PassInput.value = "";
  CpassInput.value = "";
  firstNameInput.onkeyup();
  lastNameInput.onkeyup();
  EmailInput.onkeyup();
  PassInput.onkeyup();
  CpassInput.onkeyup();
}
