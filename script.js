const cats = [
    "./src/cats/1cat.jpeg",
    "./src/cats/2cat.jpg",
    "./src/cats/3cat.jpeg",
];

let currentIndex = 0;

function showImage(index) {
    const cat = document.getElementById("slider-image");
    cat.src = cats[index]
}
 
function nextSlide() {
    currentIndex = (currentIndex + 1) % cats.length;
    showImage(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + cats.length) % cats.length;
    showImage(currentIndex);
}