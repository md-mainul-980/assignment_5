document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked; 
    if(email && password) {
        alert('Login Successful');
        window.location.href = './src/main.html';
    } else {
        alert('Please fill all the fields');
    }
});