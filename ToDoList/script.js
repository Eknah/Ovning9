
let tbLabel = document.querySelector("#tbLabel");
let btnAdd = document.querySelector("#btnAdd");
let listContent = document.querySelector("#listContent");

const addItem = function() {
    let newDiv = document.createElement('div');
    newDiv.innerText = tbLabel.value;
    newDiv.classList.add('listItem');
    newDiv.addEventListener('click', (e) => {e.target.classList.toggle('listItemChecked');})
    listContent.append(newDiv);
}

btnAdd.addEventListener('click', addItem);