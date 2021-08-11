
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
const sliderContent = document.querySelectorAll('#slider .column')

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function() {
  direction = -1;
  // carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-33%)';
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


// form data


// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'User 1'
//   })
// }).then(res => {
//   return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log(error))

// const url = "https://hookb.in/6Jpom3WKwquLbb031X6E";
//       const formEl = document.getElementById("myForm");
//       formEl.addEventListener("submit", async (e) => {
//         e.preventDefault();
//         const formData = new FormData(formEl);
//         const formDataSerialized = Object.fromEntries(formData);
//         const jsonObject = {
//           ...formDataSerialized,
//           sendToSelf: formDataSerialized.sendToSelf ? true : false,
//         };
//         try {
//           const response = await fetch(url, {
//             method: "POST",
//             body: JSON.stringify(jsonObject),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           const json = await response.json();
//           console.log(json);
//         } catch (e) {
//           console.error(e);
//           alert("there as an error");
//         }
//       });

// end of form data