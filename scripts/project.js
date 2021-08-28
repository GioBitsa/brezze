
const spans = document.querySelectorAll('.project-hero main p span')
const content1 = document.querySelector('.project-section-2 .content1');
const content2 = document.querySelector('.project-section-2 .content2');

spans[0].addEventListener('click', () => {
    spans[0].classList.add('active');
    content1.classList.add('active');
    spans[1].classList.remove('active');
    content2.classList.remove('active');
})


spans[1].addEventListener('click', () => {
    spans[1].classList.add('active');
    content2.classList.add('active');
    spans[0].classList.remove('active');
    content1.classList.remove('active');
})
