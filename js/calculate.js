//calculating the player expenses;

const btnCalculatePlayerExpense = document.getElementById('calculate');
const managerInputElem = document.getElementById('input-manager-cost');
const coachInputElem = document.getElementById('input-coach-cost');

btnCalculatePlayerExpense.addEventListener('click', function () {
    calculatePlayerExpenses();
})



