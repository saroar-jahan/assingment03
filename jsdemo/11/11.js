let listContainer = document.querySelector('#listContainer');

function createLi(){
    for(i = 1; i <= 5; i++){
        let li = document.createElement('li');

        listContainer.appendChild(li);
        li.innerText = i;
    }
}

createLi();