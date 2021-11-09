const carouselImages1 = document.querySelector('.images1');
const carouselButtons1 = document.querySelectorAll('.button1');
const numberOfImages1 = document.querySelectorAll('.images1 img').length;
let imageIndex1 = 1;
let translateX1 = 0;

carouselButtons1.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous1') {
      if (imageIndex1 !== 1) {
        imageIndex1--;
        if(myWidth <= 375){
          translateX1 += 325;
        }
        else if (myWidth <= 414){
          translateX1 += 364;
        }
        else if (myWidth <= 768){
          translateX1 += 718;
        }
        else if (myWidth >= 1024){
          translateX1 += 364;
        }
      }
    } else if (event.target.id === 'next1'){
      if (imageIndex1 !== numberOfImages1) {
        imageIndex1++;
        if(myWidth <= 375){
          translateX1 -= 325;
        }
        else if (myWidth <= 414){
          translateX1 -= 364;
        }
        else if (myWidth <= 768){
          translateX1 -= 718;
        }
        else if (myWidth >= 1024){
          translateX1 -= 364;
        }
      }
    }
    
    carouselImages1.style.transform = `translateX(${translateX1}px)`;
  });
});

const carouselImages2 = document.querySelector('.images2');
const carouselButtons2 = document.querySelectorAll('.button2');
const numberOfImages2 = document.querySelectorAll('.images2 img').length;
let imageIndex2 = 1;
let translateX2 = 0;

carouselButtons2.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous2') {
      if (imageIndex2 !== 1) {
        imageIndex2--;
        if(myWidth <= 375){
          translateX2 += 325;
        }
        else if (myWidth <= 414){
          translateX2 += 364;
        }
        else if (myWidth <= 768){
          translateX2 += 718;
        }
        else if (myWidth >= 1024){
          translateX2 += 364;
        }
      }
    } else if (event.target.id === 'next2'){
      if (imageIndex2 !== numberOfImages2) {
        imageIndex2++;
        if(myWidth <= 375){
          translateX2 -= 325;
        }
        else if (myWidth <= 414){
          translateX2 -= 364;
        }
        else if (myWidth <= 768){
          translateX2 -= 718;
        }
        else if (myWidth >= 1024){
          translateX2 -= 364;
        }
      }
    }
    
    carouselImages2.style.transform = `translateX(${translateX2}px)`;
  });
});



const carouselImages3 = document.querySelector('.images3');
const carouselButtons3 = document.querySelectorAll('.button3');
const numberOfImages3 = document.querySelectorAll('.images3 img').length;
let imageIndex3 = 1;
let translateX3 = 0;

carouselButtons3.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous3') {
      if (imageIndex3 !== 1) {
        imageIndex3--;
        if(myWidth <= 375){
          translateX3 += 325;
        }
        else if (myWidth <= 414){
          translateX3 += 364;
        }
        else if (myWidth <= 768){
          translateX3 += 718;
        }
        else if (myWidth >= 1024){
          translateX3 += 364;
        }
      }
    } else if (event.target.id === 'next3'){
      if (imageIndex3 !== numberOfImages3) {
        imageIndex3++;
        if(myWidth <= 375){
          translateX3 -= 325;
        }
        else if (myWidth <= 414){
          translateX3 -= 364;
        }
        else if (myWidth <= 768){
          translateX3 -= 718;
        }
        else if (myWidth >= 1024){
          translateX3 -= 364;
        }
      }
    }
    
    carouselImages3.style.transform = `translateX(${translateX3}px)`;
  });
});

