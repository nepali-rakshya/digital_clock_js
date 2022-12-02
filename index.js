let clockContainer = document.getElementsByClassName("container")[0];
let date = new Date();

let hourB = document.createElement("div");
hourB.innerText = date.getHours() % 12;
clockContainer.append(hourB);
hourB.classList.add("clock");
hourB.insertAdjacentHTML("afterend", ":");

let minB = document.createElement("div");
minB.innerText = date.getMinutes();
clockContainer.append(minB);
minB.classList.add("clock");
minB.insertAdjacentHTML("afterend", ":");

let secB = document.createElement("div");
secB.innerText = date.getSeconds();
clockContainer.append(secB);
secB.classList.add("clock");

let amPm = document.createElement("div");
clockContainer.append(amPm);
amPm.classList.add("clock", "am-pm");

if (date.getHours() >= 0 && date.getHours() < 12) {
  amPm.innerText = "am";
} else {
  amPm.innerText = "pm";
}

let bgValue = document.getElementsByClassName("body")[0];
let stylingBg = (bgValue.style.background =
  "url(./img/trees.jpg) center/cover no-repeat");

setInterval(function () {
  let imagesArr = [
    "ocean1.jpg",
    "trees.jpg",
    "flower.jpg",
    "green.jpg",
    "green1.jpg",
    "lake.jpg",
    "lake1.jpg",
    "lake2.jpg",
    "lake3.jpg",
    "night.jpg",
    "night1.jpg",
    "road.jpg",
  ];
  let randomValue = Math.floor(Math.random() * imagesArr.length);
  stylingBg =
    bgValue.style.background = `url(./img/${imagesArr[randomValue]}) center/cover no-repeat`;
}, 10000);
