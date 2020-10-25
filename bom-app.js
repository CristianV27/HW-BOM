class ChangeUrl {
  constructor(button, newContainer) {
    this.button = button;
    this.newContainer = newContainer;
  }

  click() {
    button.addEventListener("click", this.modify);
  }

  modify() {
    const div = { current: "xxx" };
    window.history.pushState(div, "zzz", "/ametitu.html");
    newContainer.innerHTML = "ZZzzZZzz";
    window.location.href = "#newContainer";
  }
}

const button = document.querySelector("#button");
const newContainer = document.querySelector("#newContainer");
changeUrl1 = new ChangeUrl(button, newContainer);
changeUrl1.click();

const optiuneLimba = document.getElementsByName("language");

document.cookie = "language=en-US";
const myCookies = document.cookie;
var cookiePart = window.document.cookie.split("=");
var cookieObject = [];

if (optiuneLimba[0].value === cookiePart[1]) {
  optiuneLimba[0].checked = true;
}

optiuneLimba[1].addEventListener("click", function () {
  if (optiuneLimba[1].checked === true) {
    cookiePart[1] = optiuneLimba[1].value;
    cookieObject.push({
      key: cookiePart[0],
      value: cookiePart[1],
    });
    document.cookie = cookiePart[0] + "=" + cookiePart[1];
  }
});

optiuneLimba[0].addEventListener("click", function () {
  if (optiuneLimba[0].checked === true) {
    cookiePart[1] = optiuneLimba[0].value;
    cookieObject.push({
      key: cookiePart[0],
      value: cookiePart[1],
    });
    document.cookie = cookiePart[0] + "=" + cookiePart[1];
  }
});

window.localStorage.setItem("language", optiuneLimba[0].value);

const initialRadioValue = window.localStorage.getItem("language");

if (optiuneLimba[0].value === initialRadioValue) {
  optiuneLimba[0].checked = true;
}

optiuneLimba[1].addEventListener("click", function () {
  if (optiuneLimba[1].checked === true) {
    window.localStorage.setItem("language", optiuneLimba[1].value);
    const roRadioValue = window.localStorage.getItem("language");
    console.log("value: " + roRadioValue);
    console.log(localStorage);
  }
});

optiuneLimba[0].addEventListener("click", function () {
  if (optiuneLimba[0].checked === true) {
    window.localStorage.setItem("language", optiuneLimba[0].value);
    const enRadioValue = window.localStorage.getItem("language");
    console.log("value: " + enRadioValue);
    console.log(localStorage);
  }
});

window.sessionStorage.setItem("language", optiuneLimba[0].value);

const initialRadioValue1 = window.sessionStorage.getItem("language");

if (optiuneLimba[0].value === initialRadioValue1) {
  optiuneLimba[0].checked = true;
}

optiuneLimba[1].addEventListener("click", function () {
  if (optiuneLimba[1].checked === true) {
    window.sessionStorage.setItem("language", optiuneLimba[1].value);
    const roRadioValue = window.sessionStorage.getItem("language");
    console.log("value: " + roRadioValue);
    console.log(sessionStorage);
  }
});

optiuneLimba[0].addEventListener("click", function () {
  if (optiuneLimba[0].checked === true) {
    window.sessionStorage.setItem("language", optiuneLimba[0].value);
    const enRadioValue = window.sessionStorage.getItem("language");
    console.log("value: " + enRadioValue);
    console.log(sessionStorage);
  }
});
