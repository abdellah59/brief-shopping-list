"use strict"

let shoppingList = document.getElementById('shoppingList');


function addItem(){

    let itemInput = document.getElementById('itemInput');
    let itemText= itemInput.value;

    if(itemText === ""){

        return;
    }

    let li = document.createElement('li');
    li.innerHTML = itemText;

    let editButton= document.createElement('button');

    editButton.innerHTML= '<ion-icon name="pencil-outline"></ion-icon>';

    editButton.onclick = function(){
        editItem(li);
    }


    let deleteButton= document.createElement('button');

    deleteButton.innerHTML= '<ion-icon name="trash-outline"></ion-icon>';

    deleteButton.onclick= function(){

        deleteItem(li);
    }

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    shoppingList.appendChild(li);

    itemInput.value= ""

}


function editItem(item){

    let itemTextElement= item.firstChild;
    let itemText= itemTextElement.textContent;

    let newItemText = prompt("Modifier l'article :", itemText);

    if(newItemText === null || newItemText=== ""){

        return;
    }

    itemTextElement.textContent= newItemText;
}


function deleteItem(item){

    shoppingList.removeChild(item);
}