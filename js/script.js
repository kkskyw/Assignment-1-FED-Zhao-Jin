// Function to toggle images visibility
function toggleImages(event) {
  event.preventDefault(); // Prevent the default action (e.g., if it's a link click)
  
  // Get references to the default and additional images, and the 'more' link
  const defaultImages = document.getElementById('default-images'); 
  const moreImages = document.getElementById('more-images');
  const moreLink = document.querySelector('.more-link');

  // Check if the default images are currently visible
  if (defaultImages.style.display !== 'none') {
      // Hide default images and show more images
      defaultImages.style.display = 'none';
      moreImages.style.display = 'block';
      moreLink.textContent = 'less'; 
  } else {
      // Show default images and hide more images
      defaultImages.style.display = 'grid';
      moreImages.style.display = 'none';
      moreLink.textContent = 'more'; 
  }
}
