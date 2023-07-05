window.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.querySelector('.content .button:last-child');
  const loginMessage = document.createElement('div');
  loginMessage.classList.add('login-message');
  loginMessage.style.display = 'none';
  
  loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === 'Sam' && password === 'password') {
      loginMessage.textContent = 'Login successful';
      loginMessage.style.color = 'green';
      loginMessage.style.display = 'block';
      setTimeout(function() {
        loginMessage.style.display = 'none';
        showLoggedInBox();
      }, 1000);
    } else {
      loginMessage.textContent = 'Invalid username or password';
      loginMessage.style.color = 'red';
      loginMessage.style.display = 'block';
    }
    
    usernameInput.value = '';
    passwordInput.value = '';
  });
  
  function showLoggedInBox() {
    const loggedInMessage = document.createElement('div');
    loggedInMessage.classList.add('logged-in-message');
    loggedInMessage.textContent = 'Logged in';
    document.body.appendChild(loggedInMessage);
  }
});
