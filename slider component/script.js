'use strict';

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

//////////////////////////////////////////////////////////////////////////
let currSlide = 0;
let maxSlide = slides.length - 1;

//set initial x-position of slides
const alignSlides = function () {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
  //choose according dot
  dots.forEach(e => {
    e.classList.remove('active-dot');
  });
  dots[currSlide].classList.add('active-dot');
};

//call function to realign slides at right button click
rightBtn.addEventListener('click', function () {
  currSlide++;
  if (currSlide > maxSlide) {
    currSlide = 0;
  }
  alignSlides();
});

//call function to realign slides at left button click
leftBtn.addEventListener('click', function () {
  currSlide--;
  if (currSlide < 0) {
    currSlide = maxSlide;
  }
  alignSlides();
});

//switch to slide according to clicked dot
dots.forEach((e, i) =>
  e.addEventListener('click', function () {
    currSlide = i;
    alignSlides();
  })
);
