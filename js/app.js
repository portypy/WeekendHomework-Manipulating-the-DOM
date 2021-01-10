document.addEventListener('DOMContentLoaded', () => {

    const newRadioChange = document.querySelector('#radio');
    newRadioChange.addEventListener('click', handleRadioChange);

    const newGameInput = document.querySelector('#game');
    newGameInput.addEventListener('input', handleNewGameInput);

    const newPlayerForm = document.querySelector('#new-player-form');
    newPlayerForm.addEventListener('submit', handleNewPlayerFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteClick);

});

const handleRadioChange = function (event) {
    const resultParagraph = document.querySelector('#game-ranking');
    resultParagraph.textContent = `This game is ${event.target.value}`;
};


const handleNewGameInput = function (event) { 
    const resultParagraph = document.querySelector('#game-title');
    resultParagraph.textContent = `Game name: ${event.target.value}`;
};


const handleNewPlayerFormSubmit = function (event) {
    event.preventDefault();

    const playersListItem = createPlayersListItem(event.target);
    const playersList = document.querySelector('#players-list');
    playersList.appendChild(playersListItem);
    
    event.target.reset();
};

let counter = 0;

const createPlayersListItem = function (form) {
    counter += 1;
    if (counter < 3){
        var playersListItem = document.createElement('li');
        playersListItem.classList.add('players-list-item');

        const name = document.createElement('p');
        name.textContent = form.name.value;
        playersListItem.appendChild(name);

        const faction = document.createElement('p');
        faction.textContent = form.faction.value;
        playersListItem.appendChild(faction);

        const mat = document.createElement('p');
        mat.textContent = form.mat.value;
        playersListItem.appendChild(mat);
        
    } else {
        var playersListItem = document.createElement('li');
        playersListItem.classList.add('players-list-item');

        const end = document.createElement('p');
        end.textContent = "No more players!";
        end.classList = 'red';
        playersListItem.appendChild(end)
    }

    return playersListItem;
};

const handleDeleteClick = function (event) {
    counter = 0;
    const readingList = document.querySelector('#players-list');
    const gameTitle = document.querySelector('#game-title');
    const gameRanking = document.querySelector('#game-ranking');
    gameTitle.innerHTML = 'Game name:';
    gameRanking.innerHTML = 'This game is rated';
    readingList.innerHTML = '';
    game.value = '';
  };
