// 4.Window Object:

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

function openWindow(url, width, height) {
  window.open(url, "", "width=" + width + ",height=" + height);
}
