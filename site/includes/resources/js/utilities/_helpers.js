// Helpers
const

  /**
   * @description Test if the body id is something
   * @param  		{string}
   * @return 		{bool}
   *
   */

  page = function page(name) {

    if (!name) {
      return $body.getAttribute('id')
    }

    return ($body.getAttribute('id') == name);

  };

if (!page('blog')) {
  document.querySelector('.content > p').classList.add('intro');
}