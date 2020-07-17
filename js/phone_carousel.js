let buttonUp = document.querySelector('.arrow_up');
let buttonDown = document.querySelector('.arrow_down');

let classCarouselInvisibleBack = 'img--invisible-back';
let classCarouselOne = 'img-1';
let classCarouselTwo = 'img-2';
let classCarouselFree = 'img-3';
let classCarouselFour = 'img-4';
let classCarouselAction = 'action';
let classCarouselInvisibleFront = 'img-6';
let classCarouselFive = 'img-5';
let classCarouselSix = 'img-6';
let classCarouselSeven = 'img-7';
let classCarouselEight = 'img-8';
let classCarouselNine = 'img-9';
let classCarouselTen = 'img-10';



let carouselImages = document.querySelectorAll('.img-carousel');

let carouselClasses = [classCarouselInvisibleBack,classCarouselOne, classCarouselTwo, classCarouselFree, classCarouselFour, classCarouselAction,classCarouselSeven, classCarouselEight, classCarouselNine, classCarouselTen];


let index = 2;

buttonUp.onclick = function () {
    if (index > 5) {
        return;
    } else {
        for (let i = 0; i < carouselImages.length; i++) {
            let carouselItem = carouselImages[i];
            let carouselClass = carouselClasses[i + index];
            carouselItem.classList.remove(carouselClasses[i + index] );
            carouselItem.classList.add(carouselClass);

            console.log(carouselClasses[i + index ]);

        }
        index += 1;
    }
    console.log(index);
};
buttonDown.onclick = function () {
    if (index === 2) {
        return;
    }
    index -= 1;
    for (let j = 0; j < carouselImages.length; j++) {
        let carouselItem = carouselImages[j];
        let carouselClass = carouselClasses[j + index];
        carouselItem.classList.remove(carouselClasses[j + index]);
    }

    console.log(index);
};





















// let buttonUp = document.querySelector('.arrow_up'),
//     buttonDown = document.querySelector('.arrow_down');
// let container = document.querySelector('body');
// let slides = container.querySelectorAll('.img-carousel');




// slides.forEach(el => {
//     el.onclick = function (){
//         container.querySelector('.action').classList.add('img-6');
//       el.classList.add('action');
//       console.log('1');
//     }
//   });
  
// //  function () {
// //     buttonUp.onclick = function () {
// //     for(let i in slides) {
// //         i.classList.remove('action');
// //         i.classList.add('img-6');
// //     }
// //     }
// // }

// buttonUp.onclick = function () {
//     slides.forEach(function(item, i, slides) {
//         item.querySelector('.action');
//         item.classList.add('active');
//     })
// }