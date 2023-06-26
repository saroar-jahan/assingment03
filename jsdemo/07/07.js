// 7.JS Common Events:
// Implement a webpage with the following functionality:

// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

document.addEventListener('click', function(event) {
    const x = event.pageX;
    const y = event.pageY;

    alert(`Clicked at (${x}, ${y})`);
  });


//  b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.

document.addEventListener('keydown', event => {
  let pressedKey = event.keyCode;
  
  alert(`Key code: ${pressedKey}`);
})

// c. When the user moves the mouse over an image, change the image source to another image of your choice.

let img = document.querySelector('img');

img.addEventListener('mouseover', () => {
  img.src = 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253950/javascript-icon-sm.png';
})

img.addEventListener('mouseout', () => {
  img.src = 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png';
})