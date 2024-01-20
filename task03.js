// Array of image data
const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  // Get the ul.gallery element
  var galleryList = document.querySelector('.gallery');
  
  // Create an array to store the gallery items markup
  var galleryItemsMarkup = [];
  
  // Loop through each image in the array
  images.forEach(function(image) {
    // Create markup for each image using template strings
    var imageMarkup = `
      <li class="gallery-item">
        <img src="${image.url}" alt="${image.alt}" class="gallery-image">
      </li>
    `;
  
    // Push the markup to the array
    galleryItemsMarkup.push(imageMarkup);
  });
  
  // Insert all gallery items into the ul.gallery in a single operation
  galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup.join(''));
  