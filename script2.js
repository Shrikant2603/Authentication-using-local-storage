const fullname = localStorage.getItem('fullname');
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

document.getElementById('fullname1').innerHTML = `Full Name : ${fullname}`;
document.getElementById('email1').innerHTML = `Email : ${email}`;
document.getElementById('password1').innerHTML = `Password : ${password}`;

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {

  localStorage.clear();
  window.location.href = 'index.html';
});
