// Get elements
const fArtDivs = document.querySelectorAll('.f-art div');
const carouselOverlay = document.querySelector('.carousel-overlay');
const carouselImage = document.querySelector('.carousel-image');
const dateText = document.querySelector('.date');
const materialText = document.querySelector('.material');
const sizeText = document.querySelector('.size');
const artistText = document.querySelector('.artist');
const inquireButton = document.querySelector('.inquire');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const slides = [
    { image: './images/wyh/hillslope.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Wang Yonghai' },
    { image: './images/fz/lantern-night.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Fei Zheng' },
    { image: './images/nyg/golden-age.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Niu Yungong' },
    { image: './images/lsk/redhouse.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Lu Shukai' },
    { image: './images/jxg/loess-space.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Jia Xiangguo' },
    { image: './images/zss/girl-read.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Zhang Shisheng' },
    { image: './images/wt/dragon-robe.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Wang Tao' },
    { image: './images/wzj/riverside.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Wei Zejia' },
    { image: './images/girl.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Unknown' },
    { image: './images/xihu.jpg', date: '2021', material: 'Watercolor on paper', size: '50x60 cm', artist: 'Gong Liuchao' },
    { image: './images/dafu.jpg', date: '2021', material: 'Paper', size: '50x60 cm', artist: 'Unknown author' },
    { image: './images/snow-village.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Unknown author' },
    { image: './images/wqk/forest-ref.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Wang Qikang' },
    { image: './images/shepherd.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Unknown author' },
    { image: './images/hjt/jt-lamb.jpg', date: '2021', material: 'Oil on canvas', size: '50x60 cm', artist: 'Huang Jitian' }
    // Add more slide objects corresponding to each artist
];

let currentSlideIndex = 0;

// Function to show the carousel
function showCarousel(index) {
    currentSlideIndex = index;
    updateCarouselContent();
    carouselOverlay.classList.add('active');
}

// Function to hide the carousel
function hideCarousel() {
    carouselOverlay.classList.remove('active');
}

// Function to update carousel content
function updateCarouselContent() {
    const slide = slides[currentSlideIndex];
    carouselImage.src = slide.image;
    dateText.textContent = `Date: ${slide.date}`;
    materialText.textContent = `Material: ${slide.material}`;
    sizeText.textContent = `Size: ${slide.size}`;
    artistText.textContent = `Artist: ${slide.artist}`;
}

// Add click event to each div in f-art to open carousel
fArtDivs.forEach((div, index) => {
    div.addEventListener('click', () => showCarousel(index));
});

// Hide carousel when clicking outside
carouselOverlay.addEventListener('click', (e) => {
    if (e.target === carouselOverlay) {
        hideCarousel();
    }
});

// Function to slide to the next content with an animation
function slideToNext() {
   const carouselContent = document.querySelector('.carousel-content');
   carouselContent.style.transform = 'translateX(-100%)'; // Slide current content to the left
   
   // Wait for the animation to complete before updating content
   setTimeout(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarouselContent();
    carouselContent.style.transition = 'none'; // Disable transition for instant reset
    carouselContent.style.transform = 'translateX(100%)';  // Reset position to the right
    
    // Re-enable transition  and slide in the new content from the right
    setTimeout(() => {
        carouselContent.style.transition = 'transform 0.5s ease';
        carouselContent.style.transform = 'translateX(0)';
    },20);

   }, 500); // Match the duration of the transition
}

// Function to slide to the previous content with an animation
function slideToPrev() {
   const carouselContent = document.querySelector('.carousel-content');
   carouselContent.style.transform = 'translateX(100%)'; // Slide current content to the right

   // Wait for the animation to complete before updating content
   setTimeout(() => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarouselContent();
    carouselContent.style.transition = 'none'; // Disable transition for instant reset
    carouselContent.style.transform = 'translateX(-100%)';  // Reset position to the left

    // Re-enable transition and slide in the new content from the left
    setTimeout(() => {
        carouselContent.style.transition = 'transform 0.5s ease';
        carouselContent.style.transform = 'translateX(0)';
    }, 20);
   }, 500 ); // Match the duration of the transition
}

// Add event listeners for next and prev buttons
nextButton.addEventListener('click', slideToNext);
prevButton.addEventListener('click', slideToPrev);
