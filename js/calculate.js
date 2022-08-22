//calculating the player expenses;
const btnCalculatePlayerExpense = document.getElementById('calculate');
const btnCalculateTotalElem = document.getElementById('calculate-total');

//event listener to calculate button;
btnCalculatePlayerExpense.addEventListener('click', function () {
    calculatePlayerExpenses();
});

//event listener to calculate total button
btnCalculateTotalElem.addEventListener('click', function () {
    //playerExpense calculation
    //const playerExpense = calculatePlayerExpenses();
    const playerExpense = parseFloat(playerExpenseTotalElem.innerText);
    if (isNaN(playerExpense) || playerExpense <= 0) {
        alert('Please enter player expenses first');
        return;
    }
    //total cost calculation
    const managerInputElem = document.getElementById('input-manager-cost');
    const coachInputElem = document.getElementById('input-coach-cost');
    const totalCostElem = document.getElementById('total-cost');

    const managerCost = parseFloat(managerInputElem.value);
    const coachCost = parseFloat(coachInputElem.value);

    if (isNaN(managerCost) || isNaN(coachCost)) {
        managerInputElem.value = '';
        coachInputElem.value = '';
        alert('Please enter at least a number');
        return;
    }

    if (managerCost < 0 || coachCost < 0) {
        alert('Please enter positive numbers only');
        return;
    }
    const totalCost = playerExpense + managerCost + coachCost;
    totalCostElem.innerText = totalCost;
});










