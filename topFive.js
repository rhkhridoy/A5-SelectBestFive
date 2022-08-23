/****************************** Append Children Function***************************/
function appendChildren(selectPlayer) {
    const player = document.getElementById(selectPlayer);
    const playerName = player.innerText;
    const orderdList = document.getElementById('appendPlayers');
    const newItem = document.createElement('li');
    newItem.innerText = playerName;
    /*************** warning condition for more than 5 players ******************/
    if (orderdList.children.length >= 5) {
        return alert('You can not select more than 5 players')
    };
    orderdList.appendChild(newItem);
}

