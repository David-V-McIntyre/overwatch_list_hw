document.addEventListener('DOMContentLoaded', () => {

    const newCharacterform = document.querySelector('#new-character-form');
    newCharacterform.addEventListener('submit', handleNewCharacterFormSubmit);
  

    const clearListButton = document.querySelector('#clear-list');
    clearListButton.addEventListener('click', handleClearListClick);

  })
  
  const handleNewCharacterFormSubmit = function (event) {
    event.preventDefault();
    const overwatchListItem = createOverwatchListItem(event.target);
    const overwatchList = document.querySelector('#overwatch-list');
    overwatchList.appendChild(overwatchListItem);
    event.target.reset();
  }
  
  const createOverwatchListItem = function (form) {
    const overwatchListItem = document.createElement('li');
    overwatchListItem.classList.add('overwatch-list-item');
  
    const name = document.createElement('h2');
    name.textContent = form.name.value;
    overwatchListItem.appendChild(name);

  
    const category = document.createElement('p');
    category.textContent = form.category.value;
    overwatchListItem.appendChild(category);
  
    const proficiency = document.createElement('p');
    proficiency.textContent = form.proficiency.value;
    overwatchListItem.appendChild(proficiency);

  
    return overwatchListItem;
  }
  
  const handleClearListClick = function (event) {

    const overwatchList = document.querySelector('#overwatch-list');
    overwatchList.innerHTML = '';

  }