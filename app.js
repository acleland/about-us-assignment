// import functions
import { people } from './data.js';
// console.log(people, 'people');
// grab DOM elements
const selectEl = document.querySelector('.select');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const bioEl = document.querySelector('.bio');
const hobbiesEl = document.querySelector('.hobbies');
const containEl = document.querySelector('.contain');
console.log(selectEl, nameEl, ageEl, bioEl, hobbiesEl, containEl);
// const 
// set event listeners 
selectEl.addEventListener('change', (e) => {
    console.log('user click');
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
