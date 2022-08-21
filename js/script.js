//event listener on every card 
const btnSelectPlayer = document.getElementsByClassName('btn-select-player');

for (let button of btnSelectPlayer) {
    button.addEventListener('click', (e) => {
        updatePlayerList(e);
    });
};



