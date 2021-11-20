'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// setTimeout(() => {
//     console.log("I am timer");
// }, 5000);
// console.log(":d");




const request= new XMLHttpRequest()
request.open('GET','https://restcountries.com/v3.1/name/pakistan'
)
request.send();
//when send is completed it will send / emit a load event then
//call back function will run



request.addEventListener('load',function(){
    //this.responseText will only set after request comleted

console.log(this.responseText);

const [data]= JSON.parse(this.responseText)
console.log(data.currencies);

const html=` <article class="country">
<img class="country__img" src="${data.flags.png}" />
<div class="country__data">
  <h3 class="country__name">${data.name.nativeName?.hin ?? 'Country Name'}</h3>
  <h4 class="country__region">REGION</h4>
  <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)}</p>
  <p class="country__row"><span>🗣️</span>${ data.languages.eng}</p>
 
</div>
</article>`

countriesContainer.insertAdjacentHTML('beforeend',html)
countriesContainer.style.opacity=1;
})