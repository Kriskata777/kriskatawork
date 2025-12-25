document.addEventListener('DOMContentLoaded', function () {
    const projectList = document.getElementById('project-list');

    // Replace with your YouTube video IDs
    const projects = [
        { url: 'https://www.youtube.com/watch?v=FHJRXfZiObo&ab' },
        { url: 'https://www.youtube.com/watch?v=VIDEO_ID_2' },
        { url: 'https://www.youtube.com/watch?v=VIDEO_ID_3' },
        { url: 'https://www.youtube.com/watch?v=VIDEO_ID_4' },
        { url: 'https://www.youtube.com/watch?v=VIDEO_ID_5' },
        { url: 'https://www.youtube.com/watch?v=VIDEO_ID_6' },
        { url: 'https://www.youtube.com/watch?v=VIDEO_ID_7' },
        { url: 'https://www.youtube.com/watch?v=VIDEO_ID_8' }
    ];

    // YouTube API Key
    const API_KEY = 'AIzaSyB6GFCFGJHSEKEFW2bgrYUbNoZhHSV2HDM';

    projects.forEach(project => {
        const videoId = project.url.split('v=')[1];
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                // Embed YouTube iframe for each project
                projectElement.innerHTML = `
                    <div class="video-container">
                        <iframe width="320" height="180" src="https://www.youtube.com/embed/${videoId}" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `;

                projectList.appendChild(projectElement);
            })
            .catch(error => console.error('Error fetching video data:', error));
    });

    function doPost(e) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);
        
        sheet.appendRow([data.name, data.email, data.message]);
        return ContentService.createTextOutput(JSON.stringify({"status": "success"})).setMimeType(ContentService.MimeType.JSON);
    }
    
});



// Update your JavaScript (photography-script.js)
document.addEventListener('DOMContentLoaded', function() {
    const thumbs = document.querySelectorAll('.photo-thumb');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    const images = Array.from(thumbs).map(thumb => thumb.src);
    
    // Open lightbox
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            currentIndex = index;
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });
    
    // Navigation functions
    function showImage(index) {
        if (index >= 0 && index < images.length) {
            currentIndex = index;
            lightboxImg.src = images[currentIndex];
        }
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentIndex + 1);
            if (e.key === 'Escape') lightbox.style.display = 'none';
        }
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    // Close when clicking outside image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
// Updated JavaScript with hover detection
let touchStartX = 0;
let touchEndX = 0;
const lightbox = document.querySelector('.lightbox');

// Touch event handlers
lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    const threshold = 50; // Minimum swipe distance
    
    if (touchStartX - touchEndX > threshold) {
        // Swipe left - next image
        showImage(currentIndex + 1);
    } else if (touchEndX - touchStartX > threshold) {
        // Swipe right - previous image
        showImage(currentIndex - 1);
    }
}

// Keep your existing showImage() function
function showImage(index) {
    if (index >= 0 && index < images.length) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
    }
}

// Add click/tap events for navigation zones
document.querySelector('.lightbox-prev').addEventListener('click', () => {
    showImage(currentIndex - 1);
});

document.querySelector('.lightbox-next').addEventListener('click', () => {
    showImage(currentIndex + 1);
});
