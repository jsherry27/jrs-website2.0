let firstNameValue = "";
let lastNameValue = "";
let emailValue = "";

const firstNameEl = document.querySelector(".first");
firstNameEl.addEventListener("input", (e) => {
  firstNameValue = e.target.value;
});

const lastNameEl = document.querySelector(".last");
lastNameEl.addEventListener("input", (e) => {
  lastNameValue = e.target.value;
});

const email = document.querySelector(".email");
email.addEventListener("input", (e) => {
  emailValue = e.target.value;
});

const bigBtn = document.querySelector(".bigBtn");
bigBtn.addEventListener("click", (e) => {
  console.log({
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
  });
});
