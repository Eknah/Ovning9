
let tbLabel = document.querySelector("#tbLabel");
let btnAdd = document.querySelector("#btnAdd");
let listContent = document.querySelector("#listContent");

const addItem = function() {
    let newDiv = document.createElement('div');
    //newDiv.innerText = tbLabel.value;
    newDiv.classList.add('listItem');

    let newDivLeft = document.createElement('div');
    newDivLeft.innerText = tbLabel.value;
    newDivLeft.classList.add('innerListItemChild');
    newDivLeft.addEventListener('click', (e) => {e.target.classList.toggle('listItemChecked');})

    let newDivRight = document.createElement('div');
    newDivRight.classList.add('innerListItemChild');

    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Ta bort';
    removeButton.addEventListener('click', (e) => {e.target.parentNode.parentNode.remove();})
    
    newDivRight.append(removeButton);

    newDiv.append(newDivLeft);
    newDiv.append(newDivRight);

    listContent.append(newDiv);
}

btnAdd.addEventListener('click', addItem);