// Below here is targeting where the userInfo goes

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
const x = 4;
// const y = 5;
// const z = "fizzbuzz";

if (x <= 3) {
  console.log("buzz");
} else if (x >= 7) {
  console.log("fiz");
} else {
  console.log("GAY");
}
