// Hamburger menu
// Adapted from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
function showMenu() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}