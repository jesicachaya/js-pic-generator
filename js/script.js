const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");


const getImage = async function () {
    const results = await fetch("https://picsum.photos/v2/list?limit=100.");
    const images = await results.json();
    selectRandomImage(images);
}

const selectRandomImage = function(images) {
    randomImageIndex = Math.floor(Math.random()*images.length);
    randomImage = images[randomImageIndex];
    updateInfo(randomImage);
}

const updateInfo = function(randomImage) {
    authorSpan.innerText = randomImage.author;
    img.src = randomImage.download_url;
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", function() {
    getImage();
})