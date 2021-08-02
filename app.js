
const contact = document.getElementById('contact');
const formPage = document.getElementById('form-page')
const close = document.getElementById('close')
const overlayForm = document.getElementById('overlay-form')

contact.addEventListener('click', () => {

  formPage.classList.add('open')

})

close.addEventListener('click', () => {
  formPage.classList.remove('open')
})


// section 5 slider in index html

const carousel = document.getElementById('carousel');
const slider = document.getElementById('slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function() {
  direction = -1;
  // carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-33%)'; 
  console.log(direction); 
});

prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  // carousel.style.justifyContent = 'flex-end';    
  slider.style.transform = 'translate(33%)';  
  
});

slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.5s';
  })
}, false);


// end of section 5 slider in index html
