const imageContainerEl = document.getElementById("img-cont");

const listImages = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
let imagesHtml = "";
let currentImage = 0;

for (let i = 0; i < listImages.length; i++) {
  const image = listImages[i];
  let activeClass = i == currentImage ? "active" : "";
  imagesHtml += `<img src="./consegna/img/${image}" class="img ${activeClass}" alt="image${i}" />`;
}

imageContainerEl.innerHTML += imagesHtml;

const arrowUp = document.querySelector(".up");
const arrowDown = document.querySelector(".down");

arrowDown.addEventListener("click", function () {
  scrollDown();
});

arrowUp.addEventListener("click", function () {
  const nextImage = document.querySelector(".img.active");
  nextImage.classList.remove("active");
  const allImages = document.getElementsByClassName("img");

  if (currentImage <= 0) {
    currentImage = allImages.length - 1;
  } else {
    currentImage--;
  }

  let newImage = allImages[currentImage];
  newImage.classList.add("active");
});

const scroll = setInterval(scrollImage, 3000);
function scrollImage() {
  scrollDown();
}

function scrollDown() {
  const nextImage = document.querySelector(".img.active");
  nextImage.classList.remove("active");
  const allImages = document.getElementsByClassName("img");

  if (currentImage <= 0) {
    currentImage = allImages.length - 1;
  } else {
    currentImage--;
  }

  let newImage = allImages[currentImage];
  newImage.classList.add("active");
}

imageContainerEl.addEventListener("mouseover", function () {
  clearInterval(scroll);
});

imageContainerEl.addEventListener("mouseout", function () {
  setInterval(scrollImage, 3000);
});
