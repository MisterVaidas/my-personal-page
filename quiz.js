document.querySelector('#quiz').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let location = document.querySelector('#location').value;
    let occupation = document.querySelector('#occupation').value;
    let hobbies = document.querySelector('#hobbies').value;

    let welcomeMessage = `Thank you, ${name}! Welcome to our website!`;

    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('#thankyou').style.display = 'block';
    document.getElementById('ty-msg').textContent = welcomeMessage;
});

document.getElementById('continue-btn').addEventListener('click', function() {
    document.querySelector('#thankyou').classList.remove('show');
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 500);
    
});
