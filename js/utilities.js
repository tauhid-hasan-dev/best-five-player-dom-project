


function updatePlayerList(e) {
    const playerList = document.getElementById('player-list');
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
    const totalPlayer = playerList.children.length;
    return totalPlayer;
}