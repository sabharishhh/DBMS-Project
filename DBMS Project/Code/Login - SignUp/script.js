document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the text on the button
        this.textContent = type === 'password' ? 'Show' : 'Hide';
    });

    const loginButton = document.querySelector('.login-btn');
    loginButton.addEventListener('click', function (e) {
        e.preventDefault();

        loginButton.innerHTML = 'Logging in...';
        setTimeout(() => {
            loginButton.innerHTML = 'Log in';
            alert('Login Successful!');
        }, 1500);
    });
});
