import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import 'photoswipe/dist/photoswipe.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--zoom-transition',
  children: 'a',
  showHideAnimationType: 'zoom',
  pswpModule: () => import('photoswipe/dist/photoswipe.esm.js')
});
lightbox.addFilter('contentErrorElement', (contentErrorElement, content) => {
  const el = document.createElement('div');
  el.className = 'pswp__error-msg';
  el.innerHTML = `<a href="${content.data.src}" target="_blank">The image #${content.slide.index + 1}</a> cannot be loaded</a>`;
  return el;
});
lightbox.init();
