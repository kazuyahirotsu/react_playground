console.log("test");

//get something
const title1 = document.getElementById("title");
console.log(title1);

const title2 = document.querySelector("#title");
console.log(title2);

const containers = document.getElementsByClassName("container");
console.log(containers);

const container = document.querySelector(".container");
console.log(container);

const containers2 = document.querySelectorAll(".container");
console.log(containers2);


//make dom
const divEl0 = document.createElement("div");
console.log(divEl0);

const divEl = document.createElement("div");
const pEl = document.createElement("p");
const h2El = document.createElement("h2");
divEl.appendChild(pEl);
divEl.appendChild(h2El);
console.log(divEl);


//make button with dom
const buttonEl = document.createElement("button");
buttonEl.textContent = "button";
const divEl_b = document.querySelector(".container");
divEl_b.appendChild(buttonEl);

//remove dom
const h1El = document.getElementById("title");
const bodyEl = document.querySelector("body");
bodyEl.removeChild(h1El);