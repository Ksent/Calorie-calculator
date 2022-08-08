'use strict';

let toggleChecked = document.querySelector('#man');

let age = document.querySelector('#age');
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
 
let activityLevelChoice = document.querySelector('.activity');
let activityLevelAll = document.querySelectorAll('.activity__input');

let bmiCalories = document.querySelector('#bmi');
let bmrCalories = document.querySelector('#bmr');
let normalCalories = document.querySelector('#normal');

let caloriesDays = document.querySelectorAll('.calories-day');
let weightMonths = document.querySelectorAll('.weight-month');

let resultButton = document.querySelector('.calculator__button-calculate');
let clearButton = document.querySelector('.calculator__button-count');

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

let deficitLevel = [
  {
    name: 'low',
    index: 0.05,
  },
  {
    name: 'mid',
    index: 0.1,
  },
  {
    name: 'high',
    index: 0.15,
  },
  {
    name: 'very-high',
    index: 0.2,
  },
];

let activityIndex = activityLevel[0].index;
let i = 0;

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
    
    if (bmiCalories.value >= 18.50 && bmiCalories.value <= 25) {
      bmiCalories.classList.remove('site-block__input--hard');
      bmiCalories.classList.add('site-block__input--norm');
    } else {
      bmiCalories.classList.remove('site-block__input--norm');
      bmiCalories.classList.add('site-block__input--hard');
    }
    
    for (i = 0; i < deficitLevel.length; i++) {
      let formulaDeficit = Math.round(normalCalories.value - (normalCalories.value * deficitLevel[i].index));
      let formulaWeightLoss = ((normalCalories.value * deficitLevel[i].index * 30) / 7500).toFixed(1);
      
      fullTableCell(formulaDeficit, caloriesDays);
      fullTableCell(formulaWeightLoss, weightMonths);
    }    

    clearButton.classList.add('calculator__button-reset--active');
  }
  
});

function fullTableCell(formula, cell) {

  for (let j = 0; j < cell.length; j++) {
        
    if (j == i) {
      cell[j].textContent = formula;
    }

  }

}

clearButton.addEventListener('click', function() {
  clearButton.classList.remove('calculator__button-reset--active');
  bmiCalories.classList.remove('site-block__input--norm');
  bmiCalories.classList.remove('site-block__input--hard');
});