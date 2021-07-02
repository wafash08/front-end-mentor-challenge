const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    setErrorFor("firstname", "First Name is required");
  } else {
    removeErrorfrom("firstname");
  }

  if (lastName === "") {
    setErrorFor("lastname", "Last Name is required");
  } else {
    removeErrorfrom("lastname");
  }

  if (email === "") {
    setErrorFor("email", "Email is required");
  } else if (!isValid(email)) {
    setErrorFor("email", "Email is not valid");
  } else {
    removeErrorfrom("email");
  }

  if (password === "") {
    setErrorFor("password", "Password is required");
  } else {
    removeErrorfrom("password");
  }
});

function setErrorFor(field, message) {
  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
  small.style.opacity = 1;
}

function removeErrorfrom(field) {
  const small = form[field].parentNode.querySelector("small");
  small.style.opacity = 0;
}

function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
