const images = document.images;

for (let i = 0; i < images.length; i++) {
  if (images[i].hasAttribute("alt")) {
    images[i].alt = "Old";
  } else {
    images[i].alt = "New Elzero";
  }
}