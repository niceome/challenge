const images = [
  "img1.avif",
  "img2.avif",
  "img3.avif",
  "img4.avif",
  "img5.avif",
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

  document.documentElement.style.height = "100%";
  document.body.style.height = "100%";
  lastest = images[randomIndex];
}

changeBackground();

setInterval(changeBackground, 10000);
