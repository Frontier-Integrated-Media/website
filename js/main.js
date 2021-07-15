function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
  document.getElementById("mySideDrop").style.display = "none";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function toggleSideDrop() {
  var test = document.getElementById("mySideDrop").style.display;
  if (test == "none") {
    document.getElementById("mySideDrop").style.display = "block";
  } else {
    document.getElementById("mySideDrop").style.display = "none";
  }
}
