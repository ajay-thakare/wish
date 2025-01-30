// Confetti Effect
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
});
setInterval(() => {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.6 },
  });
}, 3000);

// Random Photo Functionality
const randomPhotoButton = document.querySelector(".random-photo-button");
const randomPhotoDiv = document.querySelector(".random-photo");
const cakeCuttingDiv = document.querySelector(".cake-cutting");
const hiddenText = document.getElementById("hidden-text");
const images = [
  document.getElementById("random-image-1"),
  document.getElementById("random-image-2"),
  document.getElementById("random-image-3"),
];

const photos = [
  "images/kitkat.jpg", // KitKat
  "images/karela.webp", // Bitter Gourd
  "images/cat.png", // Cat
];

let currentImageIndex = 0;

randomPhotoButton.addEventListener("click", () => {
  // Hide the text and show the photo slider
  hiddenText.style.display = "none";
  randomPhotoDiv.style.display = "block";
  cakeCuttingDiv.style.display = "block";

  // Set the first image
  images.forEach((img, index) => {
    img.src = photos[index];
    img.classList.remove("active");
  });
  images[currentImageIndex].classList.add("active");

  // Start the slider
  const interval = setInterval(() => {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
  }, 3000); // Change image every 3 seconds

  // Add more confetti for the surprise
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
  });

  // Disable the button after clicking
  randomPhotoButton.disabled = true;
  randomPhotoButton.textContent = "Surprise Revealed! 🎉";
});
