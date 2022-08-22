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
    return playerList;

}


//function for calculating the player expenses

const playerExpenseTotalElem = document.getElementById('player-expense-total');

function calculatePlayerExpenses() {
    const perPlayerIuputElem = document.getElementById('input-per-player-cost');
    const playerExpenseTotalElem = document.getElementById('player-expense-total');
    const playerNumber = playerList.children.length;
    if (playerNumber <= 0) {
        alert('Please select at least one player');
        return;
    }
    const perPlayerCost = parseFloat(perPlayerIuputElem.value);
    if (isNaN(perPlayerCost)) {
        perPlayerIuputElem.value = '';
        alert('Please enter at least a number');
        return;
    }
    if (perPlayerCost <= 0) {
        perPlayerIuputElem.value = '';
        alert('Please enter a positive number');
        return;
    }
    const playerExpensesTotal = perPlayerCost * playerNumber;
    playerExpenseTotalElem.innerText = playerExpensesTotal;
    return playerExpensesTotal;
}