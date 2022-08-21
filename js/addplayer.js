//event listener on every card and adding player to the player list
const btnSelectPlayer = document.getElementsByClassName('btn-select-player');

for (let button of btnSelectPlayer) {
    button.addEventListener('click', function (e) {
        updatePlayerList(e);
    });
};



