
// 5.Navigator Object:

// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

let p = document.getElementById('p');

function getBrowserName(){
  let appName = navigator.appName;
  let version = navigator.appVersion;

  p.innerText = `
  Software Name: ${appName} Version: ${version}
  `; 
}
