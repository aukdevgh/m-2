const videoElements = document.querySelectorAll('.video-element');

function updateVideoSegments() {
    videoElements.forEach(element => {
        const rect = element.getBoundingClientRect(); 
        element.firstElementChild.style = `transform: translate(-${rect.x}px, -${rect.y}px)`
    });
}
window.addEventListener('scroll', updateVideoSegments);
window.addEventListener('resize', updateVideoSegments);
window.addEventListener('load', updateVideoSegments);
