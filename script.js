// Wait for the page to load
window.addEventListener('load', function() {
    // Hide the loading animation and show the content after 2 seconds
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 2000); // You can adjust the timeout for the loading screen duration
});

// Toggle FAQ answers
function toggleAnswer(faqId) {
    var answer = document.getElementById(faqId);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

// Scroll to specific section when button is clicked
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}