const btnCalculatePlayerExpense = document.getElementById('calculate');


//console.log(btnCalculatePlayerExpense);


btnCalculatePlayerExpense.addEventListener('click', function () {
    const perPlayerIuputElem = document.getElementById('input-per-player-cost');
    const playerExpenseTotalElem = document.getElementById('player-expense-total');

    //console.log(perPlayerIuputElem)
    const managerInputElem = document.getElementById('input-manager-cost');
    const coachInputElem = document.getElementById('input-coach-cost');
    const playerNumber = playerList.children.length;
    const perPlayerCost = parseFloat(perPlayerIuputElem.value);
    const playerExpensesTotal = perPlayerCost * playerNumber;

    playerExpenseTotalElem.innerText = playerExpensesTotal;


})

