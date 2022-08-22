//function for selecting players name  dynamically and append it to the player list
const playerList = document.getElementById('player-list');

function updatePlayerList(e) {
    //error handling - if player number is equals to 5 code, will not execute to the next line.
    if (playerList.children.length > 4) {
        alert('You can not select more than five players');
        return;
    }
    //finding the player from the dom.
    const btnSelectParent = e.target.parentNode.parentNode;
    const playerNameElem = btnSelectParent.childNodes[1];
    const playerName = playerNameElem.innerText;

    //create a li element to be added to the player list.
    const playerListChild = document.createElement('li');
    playerListChild.classList.add('players')
    playerListChild.innerHTML = `${playerName}`;

    //append the player name to the player list.
    playerList.appendChild(playerListChild);

    //button disabled after appending the player name
    const buttonSelect = e.target;
    buttonSelect.classList.add('btn-secondary');
    buttonSelect.setAttribute("disabled", true);
}


//function for calculating the player expenses
const playerExpenseTotalElem = document.getElementById('player-expense-total');

function calculatePlayerExpenses() {
    const perPlayerIuputElem = document.getElementById('input-per-player-cost');
    const playerExpenseTotalElem = document.getElementById('player-expense-total');
    const playerNumber = playerList.children.length;
    //error handling - if player number is a negetive number
    if (playerNumber <= 0) {
        alert('Please select at least one player');
        return;
    }
    const perPlayerCost = parseFloat(perPlayerIuputElem.value);
    //error handling - if per player cost is not a number
    if (isNaN(perPlayerCost)) {
        perPlayerIuputElem.value = '';
        alert('Please enter at least a number');
        return;
    }
    //error handling - if per player cosnt is a negetive number
    if (perPlayerCost <= 0) {
        alert('Please enter positive numbers only');
        return;
    }
    const playerExpensesTotal = perPlayerCost * playerNumber;
    playerExpenseTotalElem.innerText = playerExpensesTotal;
}

//function for calculating total amout
const btnCalculateTotalElem = document.getElementById('calculate-total');
function calculateCost() {

    const playerExpense = parseFloat(playerExpenseTotalElem.innerText);
    //error handling - if player expenses is not a number or less than zero
    if (isNaN(playerExpense) || playerExpense <= 0) {
        alert('Please enter player expenses first');
        return;
    }
    //total cost calculation
    const managerInputElem = document.getElementById('input-manager-cost');
    const coachInputElem = document.getElementById('input-coach-cost');
    const totalCostElem = document.getElementById('total-cost');

    //finding the manager and coach cost in number
    const managerCost = parseFloat(managerInputElem.value);
    const coachCost = parseFloat(coachInputElem.value);
    //error handling - if manager cost and coarch cost is not a number
    if (isNaN(managerCost) || isNaN(coachCost)) {
        managerInputElem.value = '';
        coachInputElem.value = '';
        alert('Please enter at least a number');
        return;
    }
    //error handling - if manager cost and coarch value is a negetive number
    if (managerCost < 0 || coachCost < 0) {
        alert('Please enter positive numbers only');
        return;
    }
    //calculating the total cost
    const totalCost = playerExpense + managerCost + coachCost;
    totalCostElem.innerText = totalCost;
}