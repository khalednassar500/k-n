'use strict'
/*loading page*/
let light = document.getElementById('light');
let myImage = document.getElementById('my-image');
let myName = document.querySelector('.top-name');

function movePage() {
  let loadingPage = document.getElementById('loading-page');
  loadingPage.style.top = '-100vh';
  document.body.style.cssText = 'overflow-y: visible';
  
  myName.style.opacity = '1'; // after animation loading page finish the animation of my image start 
  myImage.style.cssText = 'animation: myimage 1.3s ease-in-out forwards';
}
light.addEventListener('animationend', movePage);
/*technique for making animation iterate (one by one)*/
let html = document.querySelector('.html');
let counts = document.querySelectorAll('.count');
let allSkills = document.getElementById('skills');
let x = 1;
let x75 = '0.8s html forwards';
let x50 = '0.8s js forwards';
function quantity() {
  if (x == 5) {return};
  counts[(x == 4? 3: x-1)].style.opacity = '1';  
  allSkills.children[x].lastElementChild.firstElementChild.style.animation = (x >= 2? x50 : x75);
  allSkills.children[x].lastElementChild.firstElementChild.addEventListener('animationend', quantity);
  x++;
}
html.addEventListener('animationend', quantity);
/*top icon toggle (links to social media) */
let topIcon = document.getElementById('top-toggle-icon');
let socialMedia = document.querySelector('nav');
function openSocial() {
if (socialMedia.style.top == '0px') {
    document.body.style.cssText = 'margin-top: 0px; transition: 0.5s ease-out;overflow-y: visible;';
    socialMedia.style.cssText = 'top: -50px';
    document.querySelector('header').appendChild(this)
    this.lastElementChild.style.cssText = 'border: 3px solid #ED9A9B;';
    this.firstElementChild.style.cssText = 'border: 3px solid #D2E6E8;';
    this.style.cssText = "margin-top: 0px;";
    return;
  }
  document.body.style.cssText = 'margin-top: 50px; transition: 0.5s ease-out;overflow-y: visible;';
  socialMedia.style.cssText = 'top: 0px';
  socialMedia.appendChild(this);
  this.style.cssText = "margin-top: -10px;";
  this.lastElementChild.style.cssText = 'border: 3px solid #3E4348';
  this.firstElementChild.style.cssText = 'border: 3px solid #3E4348';
}
topIcon.addEventListener('click', openSocial);

/*Animation control*/
let htmlSkill = document.querySelector('.html');
function startAnimateSkills() {
  htmlSkill.style.cssText = 'animation: 0.8s html forwards;';
}
myImage.addEventListener('animationend', startAnimateSkills);

let topArrow = document.getElementById('arrow');
function Arrow() {
  topArrow.style.cssText = 'animation: 1.2s arrow infinite alternate-reverse;opacity: 1;';
}
allSkills.children[3].lastElementChild.firstElementChild.addEventListener('animationend', Arrow);

/*open and close cv page */
let close = document.getElementById('close');
function clos() {
  this.parentNode.style.cssText = 'height: 0;'
  document.body.style.cssText = 'overflow-y: auto';
}
close.addEventListener('click', clos);

let cv = document.getElementById('cv-page');
let open = document.getElementById('link-cv');
function ope() {
  cv.style.cssText = 'height: 100vh;top: 0; transform: translate(0, 0)';
  document.body.style.overflow = 'hidden';
}
open.addEventListener('click', ope);
/***********the button on degree page************ */
let myProject = document.getElementById('websites');
let buttonToProject = document.getElementById('toMyProject');
function toMyProject() {
  this.parentNode.parentNode.parentNode.parentNode.style.cssText = 'height: 0';
  document.body.style.cssText = 'overflow-y: auto';
}
buttonToProject.addEventListener('click', toMyProject)

window.onscroll = () => {
  let scrollToTop = document.querySelector('.scroll-top');
  if (document.documentElement.scrollTop > 637 || document.body.scrollTop > 637) {
    scrollToTop.style.right = '0';
  }else {
    scrollToTop.style.right = '-45px';
  }
}
//alert(window.innerWidth)
//alert(document.documentElement.scrollTop)