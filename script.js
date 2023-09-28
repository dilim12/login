
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const formContainer = document.getElementById('form-container');

loginBtn.addEventListener('click', () => {
  formContainer.innerHTML = 
    `<form>
      <input type="text" id="username" name="username" placeholder="Username" required>
      <br>
      <input type="password" id="password" name="password" placeholder="Password" required>
      <br>
      <button onclick="change()" id="submit">Login</button>
    </form>
  `
});

registerBtn.addEventListener('click', () => {
  formContainer.innerHTML = 
    `<form>
      <input type="text" id="username" name="username" placeholder="Username" required>
      <br>
      <input type="email" id="email" name="email" placeholder="Email" required>
      <br>
      <input type="password" id="password" name="password" placeholder="Password" required>
      <br>
      <button onclick="change()" id="submit">Register</button>
    </form>
  `
});
function change(){
  alert('succesfully completed')
}