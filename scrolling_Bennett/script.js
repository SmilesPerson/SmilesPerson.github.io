// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/image01.jpg', alt: 'shadow',
caption: 'The Front Of Old Memories'
},
{ src: 'images/image02.jpg', alt: 'second',
 caption: 'What Took You So Long?'
},
{ src: 'images/image03.jpg', alt: 'third',
 caption: 'Come Along With Me'
},
{ src: 'images/image04.jpg', alt: 'fourth',
 caption: 'Seek The Path Ahead' 
},
{ src: 'images/image05.jpg', alt: 'fifth',
 caption: 'The Heights We Can Take'
},
{ src: 'images/image06.jpg', alt: 'sixth',
 caption: 'Back To The Ground We Stand'
},
{ src: 'images/image07.jpg', alt: 'seventh',
 caption: 'The View Is So Narrow'
},
{ src: 'images/image08.jpg', alt: 'eighth',
 caption: 'It Is Why You Look All Around'
},
{ src: 'images/image09.jpg', alt: 'ninth',
 caption: 'Focus On The Future'
},
{ src: 'images/image10.jpg', alt: 'tenth',
 caption: 'If It Is Up In The Sky'
},
{ src: 'images/image11.jpg', alt: 'eleventh',
 caption: 'As I Focus On Now'
},
{ src: 'images/image12.jpg', alt: 'twelvth',
 caption: 'With You And I'
}
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);
