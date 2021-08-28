var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
const images = document.querySelectorAll('.inner-project-section-2 .modalContent .inner-project-item img')

images.forEach(img => {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// section 2

const spans = document.querySelectorAll('.inner-project-section-2 .choose-section span');
const contents = document.querySelectorAll('.inner-project-section-2 .content')

spans[0].addEventListener('click', () => {
  checkActive(spans[0], contents[0]);
})
spans[1].addEventListener('click', () => {
  checkActive(spans[1], contents[1]);
})
spans[2].addEventListener('click', () => {
  checkActive(spans[2], contents[2]);
})
spans[3].addEventListener('click', () => {
  checkActive(spans[3], contents[3]);
})
spans[4].addEventListener('click', () => {
  checkActive(spans[4], contents[4]);
})
spans[5].addEventListener('click', () => {
  checkActive(spans[5], contents[5]);
})



function checkActive(setSpan, setContent){
  spans.forEach(span => {
    span.classList.remove('active');
  })
  contents.forEach(content => {
    content.classList.remove('active');
  })
  setSpan.classList.add('active');
  setContent.classList.add('active');
}