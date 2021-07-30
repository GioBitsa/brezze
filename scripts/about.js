// section 2 about html


const years = document.querySelectorAll('.about-section-2 .content .top ul li')


const year1 = document.getElementById('year1')
const year2 = document.getElementById('year2')
const year3 = document.getElementById('year3')
const year4 = document.getElementById('year4')
const year5 = document.getElementById('year5')
const year6 = document.getElementById('year6')

const aboutSliders = document.querySelectorAll('.about-section-2 .content .slider-3-box .slider-3')


year1.onclick = () => {
  checkActiveYears(year1)
  checkDisplay(aboutSliders[0])
}
year2.onclick = () => {
  checkActiveYears(year2)
  checkDisplay(aboutSliders[2])
}
year3.onclick = () => {
  checkActiveYears(year3)
  checkDisplay(aboutSliders[3])
}
year4.onclick = () => {
  checkActiveYears(year4)
  checkDisplay(aboutSliders[4])
}
year5.onclick = () => {
  checkActiveYears(year5)
  checkDisplay(aboutSliders[5])
}
year6.onclick = () => {
  checkActiveYears(year6)
  checkDisplay(aboutSliders[6])
}

function checkDisplay(index){
    aboutSliders.forEach(slider => {
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