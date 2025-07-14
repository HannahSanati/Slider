let images = [];

if (document.title === "Cats") {
  images = [
    "./src/cats/1cat.jpeg",
    "./src/cats/2cat.jpg",
    "./src/cats/3cat.jpeg"
  ];
}

if (document.title === "Dogs") {
  images = [
    "./src/dogs/dog1.jpeg",
    "./src/dogs/dog2.jpeg",
    "./src/dogs/dog3.jpeg"
  ];
}


let current = 0;

function updateImage() {
  const box = document.getElementById("slider-image");
  if (box && images.length > 0) {
    box.src = images[current];
  }
}

function nextSlide() {
  current = (current + 1) % images.length;
  updateImage();
}


function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    updateImage();
  }
  
  window.onload = updateImage;