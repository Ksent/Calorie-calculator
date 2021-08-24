'use strict';

let toggleChecked = document.querySelector('#man');

let age = document.querySelector('#age');
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
 
let activityLevelChoice = document.querySelector('.calculator__activity');
let activityLevelAll = document.querySelectorAll('.calculator__activity-choice');

let resultButton = document.querySelector('.calculator__calculate-button');
let bmiCalories = document.querySelector('#bmi');
let bmrCalories = document.querySelector('#bmr');
let normalCalories = document.querySelector('#normal');

let activityLevel = [
  {
    name: 'min',
    index: 1.2,
  },
  {
    name: 'low',
    index: 1.375,
  },
  {
    name: 'mid',
    index: 1.55,
  },
  {
    name: 'high',
    index: 1.725,
  },
  {
    name: 'very-high',
    index: 1.9,
  },
];

let activityIndex = activityLevel[0].index;

activityLevelChoice.addEventListener('click', function(evt) {
  let target = evt.target;
  
    if (target.closest('input')) {  

      for (let i = 0; i < activityLevelAll.length; i++) {

        if (activityLevelAll[i] == target.closest('input')) {
          activityIndex = activityLevel[i].index;
        }

      }

    }
          
});

resultButton.addEventListener('click', function(evt) {
  
  if (weight.value && height.value && age.value > 0) {
    evt.preventDefault();   

    let formulaForMan = Math.round(10 * weight.value + 6.25 * height.value - 5 * age.value + 5);
    let formulaForWoman = Math.round(10 * weight.value + 6.25 * height.value - 5 * age.value - 161);
    
    bmiCalories.value = Math.round((weight.value / ((height.value / 100) * (height.value / 100))) * 100) / 100;
    
    if (toggleChecked.checked == true) {
      bmrCalories.value = formulaForMan;
      normalCalories.value = Math.round(formulaForMan * activityIndex);
    } else {
      bmrCalories.value = formulaForWoman;
      normalCalories.value = Math.round(formulaForWoman * activityIndex);
    }

    if (bmiCalories.value >= 18.50 && bmiCalories.value <= 24.99) {
      bmiCalories.classList.remove('site-block__input--hard');
      bmiCalories.classList.add('site-block__input--norm');
    } else {
      bmiCalories.classList.remove('site-block__input--norm');
      bmiCalories.classList.add('site-block__input--hard');
    }

  }

});