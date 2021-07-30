const heroBtn = document.querySelectorAll('.project-hero main .btn-box span');

const dependContent = document.querySelectorAll('.project-section-2 .content .depend-content')

heroBtn[0].addEventListener('click', () => {
    checkActive(heroBtn[0]);
    checkContent(dependContent[0])
})

heroBtn[1].addEventListener('click', () => {
    checkActive(heroBtn[1]);
    checkContent(dependContent[1])
})


function checkContent(index){
    dependContent.forEach(content => {
        content.classList.remove('active');
    })
    index.classList.add('active');
}

function checkActive(index){
    heroBtn.forEach(btn => {
        btn.classList.remove('active');
    })
    index.classList.add('active');
}