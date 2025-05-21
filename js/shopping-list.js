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

    let editButton= document.createAttribute('button');

    editButton.innerHTML= '<ion-icon name="pencil-outline"></ion-icon>';

    editButtononclicl = function(){
        editItem(li);
    }


    let deleteButton= document.createElement('button');

    deleteButton.innerHTML= '<ion-icon name="trash-outline"></ion-icon>';

    deleteButton.oneclick= function(){

        deleteItem(li);
    }

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    shoppingList.appendChild(li);

    itemInput.value= ""


}