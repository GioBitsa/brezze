
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


// section 2 slider index html


const numbers = document.querySelectorAll('#section-2 .numbers span');
const sliders = document.querySelectorAll('#section-2 .content .project-slider');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');

const slider1 = document.getElementById('slider-1')
const slider2 = document.getElementById('slider-2')
const slider3 = document.getElementById('slider-3')

document.addEventListener("DOMContentLoaded", function() {
  num1.classList.add('active');

  if (window.innerWidth < 900){
    slider1.style.opacity = 1;
    slider2.style.opacity = 0;
    slider3.style.opacity = 0;
  }
  
});


num1.onclick = () => {

  // slide

  slider1.style.transform = 'translateX(0)';
  slider2.style.transform = 'translateX(200%)';
  slider3.style.transform = 'translateX(400%)';
  
  // end of slide

  checkActiveSlider(slider1)

  // checking dots

  checkNums(num1);

  // end of checking dots

}


num2.onclick = () => {

  // slide

  slider1.style.transform = 'translateX(-200%)';
  slider2.style.transform = 'translateX(0)';
  slider3.style.transform = 'translateX(200%)';


  // end of slide

  checkActiveSlider(slider2)

  // checking dots

  checkNums(num2);

  // end of checking dots

}

num3.onclick = () => {

  // slide

  slider1.style.transform = 'translateX(-400%)';
  slider2.style.transform = 'translateX(-200%)';
  slider3.style.transform = 'translateX(0)';


  checkActiveSlider(slider3)

  // end of slide

  // checking dots

  checkNums(num3);

  // end of checking dots

}


// end of section 2 slider index html


// testimonials slider

const dots = document.querySelectorAll('.dots span');
const columns = document.querySelectorAll('.testimonials .column')

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const column3 = document.getElementById('column3');

document.addEventListener("DOMContentLoaded", function() {
  dot2.classList.add('active');

  if (window.innerWidth < 900){
    column1.style.opacity = 0;
    column2.style.opacity = 1;
    column3.style.opacity = 0;
  }
  
});


// console.log(window.innerWidth);

dot1.onclick = () => {

  // slide

  column1.style.transform = 'translateX(100%)';
  column2.style.transform = 'translateX(100%)';
  column3.style.transform = 'translateX(100%)';


  if (window.innerWidth < 900){
    column1.style.opacity = 1;
    column2.style.opacity = 0;
    column3.style.opacity = 0;
  }

  if (window.innerWidth < 800){
    column1.style.transform = 'translateX(0)';
    column2.style.transform = 'translateX(100%)';
    column3.style.transform = 'translateX(100%)';
  }

  
  
  // end of slide

  checkActiveColumn(column1)

  // checking dots

  checkDots(dot1);

  // end of checking dots

}

dot2.onclick = () => {

  // slide

  column1.style.transform = 'translateX(0)';
  column2.style.transform = 'translateX(0)';
  column3.style.transform = 'translateX(0)';


  if (window.innerWidth < 900){
    column1.style.opacity = 0;
    column2.style.opacity = 1;
    column3.style.opacity = 0;
  }

  if (window.innerWidth < 800){
    column1.style.transform = 'translateX(0)';
    column2.style.transform = 'translateX(0)';
    column3.style.transform = 'translateX(100%)';
  }

  

  // end of slide

  checkActiveColumn(column2)

  // checking dots

  checkDots(dot2);

  // end of checking dots

}

dot3.onclick = () => {

  // slide

  column1.style.transform = 'translateX(-100%)';
  column2.style.transform = 'translateX(-100%)';
  column3.style.transform = 'translateX(-100%)';


  if (window.innerWidth < 900){
    column1.style.opacity = 0;
    column2.style.opacity = 0;
    column3.style.opacity = 1;
  }

  if (window.innerWidth < 800){
    column1.style.transform = 'translateX(0)';
    column2.style.transform = 'translateX(100%)';
    column3.style.transform = 'translateX(0)';
  }

  checkActiveColumn(column3)

  // end of slide

  // checking dots

  checkDots(dot3);

  // end of checking dots

}

function checkDots(index){
  dots.forEach(dot => {
    dot.classList.remove('active');
  })
  index.classList.add('active');
}
function checkActiveSlider(index){
  sliders.forEach(slider => {
    slider.classList.remove('active');
  })
  index.classList.add('active');
}
function checkActiveColumn(index){
  columns.forEach(column => {
    column.classList.remove('active');
  })
  index.classList.add('active');
}
function checkNums(index){
  numbers.forEach(numb => {
    numb.classList.remove('active');
  })
  index.classList.add('active');
}


// end of testimonials slider

