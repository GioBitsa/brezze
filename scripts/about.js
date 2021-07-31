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


// section 3 about html


const section3Numbers = document.querySelectorAll('.about-section-3 .about-content .about-text .about-numbers span')

const aboutNumber1 = document.getElementById('about-number-1')
const aboutNumber2 = document.getElementById('about-number-2')
const aboutNumber3 = document.getElementById('about-number-3')

const imgSliders = document.querySelectorAll('.about-section-3 .about-content .img-slider-box .img-slider')

aboutNumber1.onclick = () => {
    checkActive(aboutNumber1)
    checkImgSlider(imgSliders[0])
}
aboutNumber2.onclick = () => {
    checkActive(aboutNumber2)
    checkImgSlider(imgSliders[1])
}
aboutNumber3.onclick = () => {
    checkActive(aboutNumber3)
    checkImgSlider(imgSliders[2])
}

function checkActive(index){
    section3Numbers.forEach(num => {
        num.classList.remove('active');
    })
    index.classList.add('active');
}

function checkImgSlider(index){
    imgSliders.forEach(slider => {
        slider.classList.remove('active');
    })
    index.classList.add('active');
}

// end of section 3 about html


// section 4 about html


const section4Numbers = document.querySelectorAll('.about-section-4 .about-content .about-text .about-numbers span')

const aboutNumber4 = document.getElementById('about-number-4')
const aboutNumber5 = document.getElementById('about-number-5')
const aboutNumber6 = document.getElementById('about-number-6')

const imgSliders2 = document.querySelectorAll('.about-section-4 .about-content .img-slider-box .img-slider')


aboutNumber4.onclick = () => {
  checkActive2(aboutNumber4)
  checkImgSlider2(imgSliders2[0])
}
aboutNumber5.onclick = () => {
  checkActive2(aboutNumber5)
  checkImgSlider2(imgSliders2[1])
}
aboutNumber6.onclick = () => {
  checkActive2(aboutNumber6)
  checkImgSlider2(imgSliders2[2])
}


function checkActive2(index){
  section4Numbers.forEach(num => {
      num.classList.remove('active');
  })
  index.classList.add('active');
}

function checkImgSlider2(index){
  imgSliders2.forEach(slider => {
      slider.classList.remove('active');
  })
  index.classList.add('active');
}

// end of section 4 about html


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