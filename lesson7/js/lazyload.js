// Progressive loading images
let images = document.querySelectorAll('[data-src]');

let imgOptions = {
  threshold: 0,
  rootMargin: '0px 0px 100px 0px',
};

let imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

function preloadImage(img) {
  let src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
  img.onload = () => {
    img.removeAttribute('data-src');
  };
}

images.forEach((image) => {
  imgObserver.observe(image);
});