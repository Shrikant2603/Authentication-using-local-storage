const signupButton = document.getElementById('button');

if (localStorage.getItem('token')) {
  signupButton.style.display = 'none';
}

const form = document.getElementById('signup-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!fullname || !email || !password || !confirmPassword) {
    document.getElementById('error').innerHTML = 'Error : All fields the are mandatory';
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  document.getElementById('error').innerHTML = '';

  const token = window.crypto.getRandomValues(new Uint8Array(16));

  localStorage.setItem('fullname', fullname);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('token', token);

  document.getElementById('success').innerHTML = 'Successfully Signed Up!';

  window.location.href = 'profile.html';
});