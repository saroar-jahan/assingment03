// question no 13

let p = document.querySelectorAll('p');

function addClass(){
    for(i = 0; i < p.length; i++){
        p[i].classList.add('newClass');
    }
}

addClass();

let newClass = document.querySelectorAll('.newClass');

function colorRed(){
    for(i = 0; i < newClass.length; i++){
        newClass[i].style.color = 'red';
    }
}

colorRed();


