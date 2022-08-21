//event listener on every card 
const btnSelectPlayer = document.getElementsByClassName('btn-select-player');

for (let button of btnSelectPlayer) {
    button.addEventListener('click', function (e) {
        updatePlayerList(e);
    });
};



