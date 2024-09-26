// Your code goes here
//title
const h1 = document.querySelector("h1");
h1.style.color = "gray";
h1.style.fontFamily = "Impact,Charcoal,sans-serif";
h1.style.fontSize = "4rem";
const navs = document.querySelectorAll(".nav-link");
for (let nav of navs) {
  nav.style.backgroundColor = "#ccffff";
  nav.style.padding = "10px 25px 10px 25px";
  nav.style.borderRadius = "10px";
  nav.addEventListener("click", (e) => {
    e.preventDefault();
  });
  nav.style.margin = "15px";
  nav.style.textDecoration = "none";
  nav.addEventListener("mouseover", () => {
    nav.style.backgroundColor = "#adebeb";
    nav.style.fontSize = "1.5rem";
  });
  nav.addEventListener("mouseout", () => {
    nav.style.fontSize = "1rem";
    nav.style.backgroundColor = "#ccffff";
  });
}
const headerContainer = document.querySelector(".nav-container");
headerContainer.style.display = "flex";
headerContainer.style.justifyContent = "space-around";
headerContainer.style.alignItems = "center";

// headerContainer.appendChild(form);
//navbar

//intro
const intro = document.querySelector(".intro");
const h2 = document.querySelector("h2");
const home = document.querySelector(".home");
const backgroundChanging = (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "lightblue";
};
h2.addEventListener("click", backgroundChanging);
intro.addEventListener("click", function () {
  intro.style.opacity = 0.5;
});
h2.addEventListener("mouseout", function () {
  intro.style.opacity = 1;
});

const imgIntro = document.querySelector(".intro img");
// console.log(imgDestination);
imgIntro.style.width = "100%";
//form

const el = document.createElement("input");
el.type = "text";
el.name = "user_name";
el.id = "user_name1";
el.placeholder = "username";
el.addEventListener("focus", () => {
  el.style.background = "pink";
});
el.addEventListener("blur", () => {
  el.style.background = "";
});
const el2 = document.createElement("input");
el2.type = "password";
el2.name = "password";
el2.id = "password1";
el2.placeholder = "password";
el2.addEventListener("focus", () => {
  el2.style.background = "pink";
});
el2.addEventListener("blur", () => {
  el2.style.background = "";
});
var submit = document.createElement("input");
submit.type = "submit";
submit.value = "log in";
const form = document.createElement("form");

form.appendChild(el);
form.appendChild(el2);
form.appendChild(submit);
form.style.marginBottom = "10px";
form.style.display = "flex";
form.style.justifyContent = "flex-end";
home.prepend(form);

//text-content
const textContents = document.querySelectorAll(".text-content");
// console.log(textContents);
for (let content of textContents) {
  content.style.width = "48%";

  content.style.paddingTop = "30px";

  content.style.textAlign = "center";
  content.addEventListener("wheel", function () {
    content.style.fontSize = "1.5rem";
  });
  content.addEventListener("mouseout", function () {
    content.style.fontSize = "1rem";
  });
  // content.style.backgroundColor = "#E2F2F4";
}
const imgContents = document.querySelectorAll(".img-content");
// console.log(imgContents);
for (let img of imgContents) {
  img.style.marginLeft = "10px";
  img.style.marginRight = "10px";
}

const firstContentSection = document.querySelector(".content-section");
firstContentSection.style.display = "flex";
firstContentSection.style.flexWrap = "wrap";
firstContentSection.style.justifyContent = "center";

firstContentSection.style.margin = "50px";

const secondContentSection = document.querySelector(".inverse-content");
secondContentSection.style.display = "flex";
secondContentSection.style.flexWrap = "wrap";
secondContentSection.style.justifyContent = "center";
secondContentSection.style.margin = "50px";

//destination
const allDestination = document.querySelectorAll(".destination");
// console.log(allDestination);
for (let destination of allDestination) {
  destination.style.width = "33%";
  destination.style.backgroundColor = "#F2F0F5";
  destination.style.margin = "5px";
  destination.style.textAlign = "center";
  destination.style.padding = "20px";
}
const contentPick = document.querySelector(".content-pick");
contentPick.style.display = "flex";

//destination img
const imgDestination = document.querySelector(".content-destination img");
// console.log(imgDestination);
imgDestination.style.width = "100%";

//btn

const buttons = document.querySelectorAll(".btn");
for (let button of buttons) {
  button.style.padding = "5px";
  button.style.borderRadius = "10px";

  button.style.backgroundColor = "#9D89B3";
  button.addEventListener("click", function () {
    window.prompt("Please enter your email");
  });
}

// wheel;
// let scale = 1;
// function zoom(e) {
//   e.preventDefault();
//   scale += e.deltaY * -0.01;
//   scale = Math.min(Math.max(0.125, scale), 4);
// }

// const body = document.querySelector("body");
// firstContentSection.onwheel = zoom;
