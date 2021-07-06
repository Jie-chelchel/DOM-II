// Your code goes here
//title
const h1 = document.querySelector("h1");
h1.style.color = "gray";
h1.style.fontFamily = "Impact,Charcoal,sans-serif";
h1.style.fontSize = "4rem";

//navbar

const navs = document.querySelectorAll(".nav-link");
for (let nav of navs) {
  nav.style.margin = "15px";
  nav.style.textDecoration = "none";
  nav.addEventListener("mouseover", () => {
    nav.style.fontSize = "1.5rem";
  });
  nav.addEventListener("mouseout", () => {
    nav.style.fontSize = "1rem";
  });
}
//introImg
const imgIntro = document.querySelector(".intro img");
// console.log(imgDestination);
imgIntro.style.width = "100%";
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
  img.style.width = "48%";
  img.style.marginLeft = "10px";
  img.style.marginRight = "10px";
}

const firstContentSection = document.querySelector(".content-section");
firstContentSection.style.display = "flex";
firstContentSection.style.margin = "50px";

const secondContentSection = document.querySelector(".inverse-content");
secondContentSection.style.display = "flex";
secondContentSection.style.marginLeft = "50px";
secondContentSection.style.marginRight = "50px";

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
