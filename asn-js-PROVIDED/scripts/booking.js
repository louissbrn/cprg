/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
/*None*/
// When do they need to be reset or updated?
/*reset when the page is loaded or when the clear days button is clicked */



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



var dayCost = 0



const numberOfDaysSelected = 0;
var total = dayCost * numberOfDaysSelected

function addingDays(){
numberOfDaysSelected++;
}

function clickedButton() {
  document.getElementById("blue-hover").addClass(".clicked");
}

document.getElementById("blue-hover").addEventListener('click', addingDays, clickedButton);


/*Challenge*/

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function clear() {
  numberOfDaysSelected = 0;
  document.getElementById("blue-hover").value = "";
 } 

 document.getElementById("clear-button").addEventListener('click', clear());

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function clearfull() {
  fullDays.value = "";
}

var halfDays = document.getElementById("half")
halfDays.addEventListener('click', dayCost = 20, clearfull)

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function clearhalf() {
  halfDays.value = "";
}


var fullDays = document.getElementById("full")
fullDays.addEventListener('click', dayCost = 35)


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


var calcCost = document.getElementById("calculated-cost");
calcCost.innerHTML = total

