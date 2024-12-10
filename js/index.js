var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPass = document.getElementById("signupPass");
var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");
var error = document.getElementById("error");
var userList = [];

if (localStorage.getItem("list") === null) {
    userList = [];
} else {
    userList = JSON.parse(localStorage.getItem("list"));
}


function emailExist(email) {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].email === email) {
            return true; 
        }
    }
    return false;
}


function signUp() {
    var user = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPass.value,
    };

    if (signupName.value === "" || signupEmail.value === "" || signupPass.value === "") {
        error.innerHTML = '<span class="text-danger">All inputs are required</span>';
        return false;
    }

    if (emailExist(signupEmail.value)) {
        error.innerHTML = '<span class="text-danger">Email already exists</span>';
        return false;
    }

    userList.push(user);
    localStorage.setItem("list", JSON.stringify(userList));
    error.innerHTML = '<span class="text-success">Sign up successful</span>';
           return true;
}

function LoginEmpty() {

    if (loginPass.value == "" || loginEmail.value == "") {
        return false
    } else {
        return true
    }
}
function login() {

    var password = loginPass.value
    var email = loginEmail.value
        

    if (LoginEmpty() == false) {
        document.getElementById('error').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    for(var i=0;i<userList.length;i++){
        if(userList[i].email==email && userList[i].password==password){
            console.log('tmam');
            window.location.href='home.html'
            localStorage.setItem('username',userList[i].name)
            getuser()
        }else{
            console.log('laaa');
            
        }
    }
  
}


function getuser(){
  
    }

function logout(){
    localStorage.removeItem("currentUser");
    window.location.href="login.html"
}

function display(){
let esm= localStorage.getItem('username')
document.getElementById('message').innerHTML = 'welcome ' + esm
}

