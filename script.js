document.addEventListener('DOMContentLoaded', () => {
    const ratingContainer = document.getElementById('ratingContainer');
  const ratingButtons = document.querySelectorAll('.rating-btn');
  const ratingNumbers = document.getElementById('ratingNumbers');
  const submitButton = document.getElementById('submitRating');
  const thankYouDiv = document.getElementById('thankYou');
  const selectedRatingSpan = document.getElementById('selectedRating');
  let selectedRating = null;

  const main = document.getElementById("background");
    for (let i = 0; i < 200; i++) {
        const span = document.createElement("span");
        main.appendChild(span);
    }

  ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'selected' class from all buttons
      ratingButtons.forEach(btn => btn.classList.remove('selected'));
      // Add 'selected' class to clicked button
      button.classList.add('selected');
      // Store the selected rating
      selectedRating = button.getAttribute('data-value');
      // Show submit button
      submitButton.style.display = 'block';
    });
  });

  submitButton.addEventListener('click', () => {
    if (selectedRating) {
      // Hide rating numbers and submit button
      ratingContainer.style.display = 'none';
      ratingNumbers.style.display = 'none';
      submitButton.style.display = 'none';
      // Update thank-you message with selected rating
      selectedRatingSpan.textContent = selectedRating;
      // Show thank-you message
      thankYouDiv.style.display = 'flex';
    }
  });
});