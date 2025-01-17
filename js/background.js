const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
];

let lastest = null;

function changeBackground() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * images.length);
  } while (images[randomIndex] === lastest);

  document.body.style.backgroundImage = `url('img/${images[randomIndex]}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";

  document.body.style.imageRendering = "auto";
  lastest = images[randomIndex];
}

changeBackground();

setInterval(changeBackground, 10000);
