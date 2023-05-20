let error = document.createElement('div')
let btnReg = document.getElementById('btnReg')
error.style = '    grid-column: 1/3;'

function Regiter(event) {
  let username = document.getElementById('username').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let rePassword = document.getElementById('rePassword').value
  let users = {
    username: username,
    email: email,
    password: password,
    rePassword: rePassword,
  }

  if (username !== '' && email !== '' && password !== '' && rePassword !== '') {
    if (rePassword === password) {
      if (password.length >= 8) {
        let count = localStorage.length + 1
        let user = JSON.stringify(users)
        localStorage.setItem(`user ${count}`, user)
        window.open('./login.html')
      } else {
        let form = document.querySelector('form')
        error.innerHTML = 'The Password must be 8 character or more '
        form.appendChild(error)
        event.preventDefault()
      }
    } else {
      let form = document.querySelector('form')
      error.innerHTML = "The password doesn't match"
      form.appendChild(error)
      event.preventDefault()
    }
  } else {
    let form = document.querySelector('form')
    error.innerHTML = 'please insert all data'
    form.appendChild(error)
    event.preventDefault()
  }
}

// let error2 = document.createElement('div')
function Login(event) {
  let userLog = document.getElementById('userLog').value
  let passLog = document.getElementById('passLog').value
  let btnLog = document.getElementById('btnLog')
  let FormLog = document.getElementById('FormLog')
  if (userLog !== '' && passLog !== '') {
    for (let i = 1; i <= localStorage.length; i++) {
      let json = JSON.parse(localStorage.getItem('user ' + i))
      if (userLog === json.username && passLog === json.password) {
        window.open('./welcome.html?username=' + `Welcome ${userLog}`, '_blank')
      } else {
        FormLog.appendChild(error)
        error.innerHTML = 'user or password incorrect'
        event.preventDefault()
      }
    }
  } else {
    FormLog.appendChild(error)
    error.innerHTML = 'please insert data'
    event.preventDefault()
  }
}
