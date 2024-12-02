
function toggleImages(event) {
  event.preventDefault();
  const defaultImages = document.getElementById('default-images');
  const moreImages = document.getElementById('more-images');
  const moreLink = document.querySelector('.more-link');

// Check if the default images are currently visible
  if (defaultImages.style.display !== 'none') {
    // Hide the default images and show the additional images
      defaultImages.style.display = 'none';
      moreImages.style.display = 'block';
      moreLink.textContent = 'less';
  } else {
    // Show the default images and hide the additional images
      defaultImages.style.display = 'grid';// Assume default images use a grid layout
      moreImages.style.display = 'none';
      moreLink.textContent = 'more';
  }
}