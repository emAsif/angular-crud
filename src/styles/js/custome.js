  //  To avoid bottle necks in complex structures 
  //  we can listen to the event of common parent element instead of listening for each indivually.
  
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNavHandler() {
  document.getElementById("mySidenav").style.width = "230px";
  document.getElementById("main").style.marginLeft = "230px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNavHandler() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}