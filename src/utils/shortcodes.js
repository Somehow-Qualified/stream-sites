module.exports = {

  // {% breakoutImage "/images/og.jpg", "An image test" %}
  breakoutImage: (image, image_alt) => {
    return `<div class="breakout"><img src="${image}" alt="${image_alt}" class="w-full h-96 object-cover" /></div>`;
  }

}
