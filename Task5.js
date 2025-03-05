// 5. DOM Manipulation - Image Slider

// Create the main container
const container = document.createElement("div");
container.style.textAlign = "center";
document.body.appendChild(container);

// Create the image element
const img = document.createElement("img");
img.style.width = "500px";
img.style.height = "300px";
img.style.borderRadius = "10px";
container.appendChild(img);

// Create Buttons
const prevButton = document.createElement("button");
prevButton.innerText = "Previous";
prevButton.style.margin = "10px";
prevButton.style.padding = "10px";
prevButton.style.cursor = "pointer";
prevButton.style.backgroundColor = "#007BFF";
prevButton.style.color = "white";
prevButton.style.border = "none";
prevButton.style.borderRadius = "5px";
container.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.innerText = "Next";
nextButton.style.margin = "10px";
nextButton.style.padding = "10px";
nextButton.style.cursor = "pointer";
nextButton.style.backgroundColor = "#007BFF";
nextButton.style.color = "white";
nextButton.style.border = "none";
nextButton.style.borderRadius = "5px";
container.appendChild(nextButton);

const images = [
    "https://picsum.photos/seed/pic1/500/300",
    "https://picsum.photos/seed/pic2/500/300",
    "https://picsum.photos/seed/pic3/500/300"
];

let currentIndex = 0;

// Function to update the image
function showImage(index) {
    img.src = images[index];
}

// Event Listeners for buttons
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});


showImage(currentIndex);
