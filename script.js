// Ensure this code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const firstButton = document.querySelector('.reveal-button');
    const secondButton = document.querySelector('.reveal-button-2');
    const letterContent = document.querySelector('.letter');
    
    // Trigger when the first button (box) is clicked
    firstButton.addEventListener('click', function () {
        firstButton.classList.add('fade-out');  // Hide the first button (box)
        
        // Delay the appearance of the envelope
        setTimeout(function () {
            secondButton.style.display = 'block';  // Show the second button (envelope)
        }, 1500); // Envelope appears after 1.5 seconds
    });
  
    // Trigger when the second button (envelope) is clicked
    secondButton.addEventListener('click', function () {
        secondButton.classList.add('fade-out'); // Fade out animation for the envelope
        
        // Delay the appearance of the letter content after the envelope is completely gone
        setTimeout(function () {
            letterContent.classList.add('show');  // Show the letter content
        }, 1500); // Letter appears after 1.5 seconds (to match envelope fade out)
    });
  });
  