module.exports = {

  /*
   * Breakout Image
   *
   * Definitions:
   * - image: path to file or URL
   * - image_alt: plain text string
   * - height: TailwindCSS class, h-{size}
   *
   * Usage:
   * {% breakoutImage "/images/og.jpg", "An image test", "h-96" %}
   *
   */
  breakoutImage: (image, image_alt, height) => {
    return `<div class="breakout"><img src="${image}" alt="${image_alt}" class="w-full ${height} object-cover" /></div>`;
  }

}
