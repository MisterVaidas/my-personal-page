// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// On form submit, prevent actual form submission and display the input name
document.getElementById('quiz').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var location = document.getElementById('location').value;
    var occupation = document.getElementById('occupation').value;
    var hobbies = document.getElementById('hobbies').value;
    alert("Thank you for participating, " + name + "! Your answers have been recorded.");
    modal.style.display = "none";
});

// Show the modal as soon as the page loads
window.onload = function() {
    modal.style.display = "block";
}
