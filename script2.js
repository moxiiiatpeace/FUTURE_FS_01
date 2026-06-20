
javascript
function showMessage(){
alert("Thank you for visiting my portfolio!");
}

document.querySelector("form")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully!");

});

