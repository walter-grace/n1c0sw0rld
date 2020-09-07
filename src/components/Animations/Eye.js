import React from 'react'
let $eye = document.querySelector('.eye');

export default class Eye{
 constructor($eye) {
  this.$container = $eye;
  this.$pupil = this.$container.querySelector('.pupil')
 }
 
 setPupil(x, y){
  let offsetStartX = this.$container.getBoundingClientRect().x + 35;
  let offsetStartY = this.$container.getBoundingClientRect().y + 35;
  
  let offsetEndX = offsetStartX + this.$container.getBoundingClientRect().width - 80;
  let offsetEndY = offsetStartY + this.$container.getBoundingClientRect().height - 80;
  
  if(x > offsetStartX && x < offsetEndX)
   this.$pupil.style.setProperty('--x', ((x - offsetStartX) + 'px'));
  
  if(y > offsetStartY && y < offsetEndY)
   this.$pupil.style.setProperty('--y', ((y - offsetStartY) + 'px'));
 }
}

const eye = new Eye($eye);

window.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event){
 setTimeout(function(){
   eye.setPupil(event.clientX, event.clientY);
 }, 50)
}