function login() {
var us = document.getElementById("int").value;
localStorage.setItem("users", us);
window.location="kwitter_room.html";

}