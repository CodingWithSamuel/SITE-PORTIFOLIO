
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username')
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');



    // Check if fields are empty
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        return;
    }

    // Check login attempts
    if (typeof localStorage.loginAttempts === 'undefined') {
        localStorage.loginAttempts = 0;
    }
    
    if (localStorage.loginAttempts >= 3) {
        errorMessage.textContent = 'Too many login attempts. Please try again later.';
        return;
    }

    // Validate credentials
    if (username === 'Andrey' && password === '1234') {
        alert('Login successful');
        errorMessage.textContent = '';
        localStorage.loginAttempts = 0;  // Reset login attempts on successful login
        // Redirecionar ou executar outra ação aqui
    } else {
        localStorage.loginAttempts = Number(localStorage.loginAttempts) + 1;
        errorMessage.textContent = 'Invalid username or password';
        
        if (localStorage.loginAttempts >= 3) {
            setTimeout(() => {
                localStorage.loginAttempts = 0;
                errorMessage.textContent = '';
            }, 60000); // Reset attempts after 60 seconds
        }
    }
});

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Reset login attempts
document.getElementById('resetAttempts').addEventListener('click', function() {
    localStorage.removeItem('loginAttempts');
    alert('Login attempts reset.');
});
