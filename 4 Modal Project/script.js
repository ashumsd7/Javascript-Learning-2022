'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const addhideClass = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const removeHideCLass = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', removeHideCLass);

btnCloseModal.addEventListener('click', addhideClass);
overlay.addEventListener('click', addhideClass);

document.addEventListener('keypress',(e)=>{
   if(e.key=='Enter'){
    addhideClass()
       
       
   }

})
