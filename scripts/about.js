// section 2 about html


const years = document.querySelectorAll('.about-section-2 .content .top ul li')


const year1 = document.getElementById('year1')
const year2 = document.getElementById('year2')

const bottoms = document.querySelectorAll('.about-section-2 .content .content-box .bottom')


year1.onclick = () => {
  checkActiveYears(year1)
  checkDisplay(bottoms[0])
}
year2.onclick = () => {
  checkActiveYears(year2)
  checkDisplay(bottoms[1])
}

function checkDisplay(index){
    bottoms.forEach(slider => {
        slider.classList.remove('active');
    })
    index.classList.add('active')
}

function checkActiveYears(index){
  years.forEach(year => {
    year.classList.remove('active');
  })
  index.classList.add('active');
}


// end of section 2 about html


// section 3



$(window).scroll(function(){
  var position = $('.about-section-3 .about-content').offset().top;
  var scroll = $(window).scrollTop() + $(window).height();
  if(position <= scroll){
      $(".about-section-3 .about-content img").addClass("animation3-img");
  }
})
$(window).scroll(function(){
  var position = $('.about-section-3 .about-content').offset().top;
  var scroll = $(window).scrollTop() + $(window).height();
  if(position <= scroll){
      $(".about-section-3 .about-content .about-text").addClass("animation3");
  }
})

// end of section 3


// section 4



$(window).scroll(function(){
  var position = $('.about-section-4 .about-content').offset().top;
  var scroll = $(window).scrollTop() + $(window).height();
  if(position <= scroll){
      $(".about-section-4 .about-content img").addClass("animation4-img");
  }
})
$(window).scroll(function(){
  var position = $('.about-section-4 .about-content').offset().top;
  var scroll = $(window).scrollTop() + $(window).height();
  if(position <= scroll){
      $(".about-section-4 .about-content .about-text").addClass("animation4");
  }
})

// end of section 4


// section 5

const dirImgsBox = document.querySelector('.about-section-5 .about-content .choose-dir')
const dirImgs = document.querySelectorAll('.about-section-5 .about-content .choose-dir img')

const columnRowsBox = document.querySelector('.about-section-5 .about-content .row')
const columnRows = document.querySelectorAll('.about-section-5 .about-content .row .column')

const columnImg1 = document.getElementById('column-img-1')
const columnImg2 = document.getElementById('column-img-2')
const columnImg3 = document.getElementById('column-img-3')
const columnImg4 = document.getElementById('column-img-4')

const img1 = dirImgs[0];
const img2 = dirImgs[1];
const img3 = dirImgs[2];
const img4 = dirImgs[3];

// first image

img1.addEventListener('click', () => {
  dirImgsBox.classList.add('disabled')
  columnRowsBox.classList.add('active')
  columnRows[0].classList.add('active')
})

columnImg1.addEventListener('click', () => {
  dirImgsBox.classList.remove('disabled');
  columnRowsBox.classList.remove('active');
  columnRows[0].classList.remove('active')
})


// second image

img2.addEventListener('click', () => {
  dirImgsBox.classList.add('disabled')
  columnRowsBox.classList.add('active')
  columnRows[1].classList.add('active')
})

columnImg2.addEventListener('click', () => {
  dirImgsBox.classList.remove('disabled');
  columnRowsBox.classList.remove('active');
  columnRows[1].classList.remove('active')
})


// third image

img3.addEventListener('click', () => {
  dirImgsBox.classList.add('disabled')
  columnRowsBox.classList.add('active')
  columnRows[2].classList.add('active')
})

columnImg3.addEventListener('click', () => {
  dirImgsBox.classList.remove('disabled');
  columnRowsBox.classList.remove('active');
  columnRows[2].classList.remove('active')
})


// fourth image

img4.addEventListener('click', () => {
  dirImgsBox.classList.add('disabled')
  columnRowsBox.classList.add('active')
  columnRows[3].classList.add('active')
})

columnImg4.addEventListener('click', () => {
  dirImgsBox.classList.remove('disabled');
  columnRowsBox.classList.remove('active');
  columnRows[3].classList.remove('active')
})

// end of section 5