/*
function pageLoad() {

    let now = new Date();

    let myHTML = '<div style="text-align:center;">'
        + '<h1>Student Revision Tool</h1>'
        + '<button type="LogInButton">Log In</button>'
        + '<button type="SignUpButton">Sign Up</button>'
        + '<img src="/Client/img/study.gif"  alt="Logo"/>'
        + '<div style="font-style: italic;">'
        + 'Generated at ' + now.toLocaleTimeString()
        + '</div>'
        + '</div>';

    document.getElementById("testDiv").innerHTML = myHTML;
}


/!*function LogIn() {

    let myHTML = '<div style="text-align:center;">'
        + '<h1>Student Revision Tool</h1>'
        + '<button type="LogInButton">Log In</button>'
        + '<button type="signUpButton">Sign Up</button>'
        + '<img src="/client/img/logo.png"  alt="Logo"/>'
        + '</div>'
        + '</div>';

    document.getElementById("testDiv").innerHTML = myHTML;
}

function LogIn() {
    const id = event.target.getAttribute("data-id");

    if (id === null) {

        document.getElementById("LogIn").innerHTML = 'Log In:';

        document.getElementById("email").value = '';
        document.getElementById("password").value = '';

        document.getElementById("listDiv").style.display = 'none';
        document.getElementById("LogInDiv").style.display = 'block';

    } else {

    }*!/


    function checkLogin() {

        let email = Cookies.get("email");

        let logInHTML = '';

        if (email === undefined) {

            let LogInButton = document.getElementsByClassName("Log In");
            for (let button of LogInButton) {
                button.style.visibility = "hidden";
            }

            let signUpButton = document.getElementsByClassName("Sign Up");
            for (let button of signUpButton) {
                button.style.visibility = "hidden";
            }

            logInHTML = "Not logged in. <a href='/client/login.html'>Log in</a>";
        } else {

            let LogInButton = document.getElementsByClassName("Log In");
            for (let button of LogInButton) {
                button.style.visibility = "visible";
            }

            let signUpButton = document.getElementsByClassName("Sign Up");
            for (let button of signUpButton) {
                button.style.visibility = "visible";
            }
            checkLogin();
            logInHTML = "Logged in as " + email + ". <a href='/client/login.html?logout'>Log out</a>";

        }

        document.getElementById("loggedInDetails").innerHTML = logInHTML;


}
*/



<!--old stuff-->
function pageLoad() {
/*if (Cookies.get('token') === ""){
    window.location.href = '../login.html'
}
  window.onload=pageLoad();*/

    let now = new Date();

    let myHTML = '<div style="text-align:center;">'
        + '<h1>Student Revision Tool</h1>'
        + '<img src="/client/img/study.gif"  alt="Logo"/>'
        + '<button id="LogInButton" onclick="login()">Log In</button>'
        + '<button id="SignUpButton" onclick="signUp()">Sign Up</button>'
        + '<div style="font-style: italic;">'
        + 'Generated at ' + now.toLocaleTimeString()
        + '</div>'
        + '</div>';

    document.getElementById("testDiv").innerHTML = myHTML;

    let LogInButton = document.getElementsByClassName("LogInButton");
    for (let button of LogInButton) {
        button.style.visibility = "visible";
        button.addEventListener("click", Login);
    }
    let SignUpButton = document.getElementsByClassName("SignUpButton");
    for (let button of SignUpButton) {
        button.addEventListener("click", SignUp);
        button.style.visibility = "hidden";
    }
}


function checkLogin() {

    let myHTML = '<div style="text-align:center;">'
        + '<h1>Student Revision Tool</h1>'
        + '<button type="LogInButton">Log In</button>'
        + '<button type="signUpButton">Sign Up</button>'
        + '<img src="/client/img/logo.png"  alt="Logo"/>'
        + '</div>'
        + '</div>';

    document.getElementById("testDiv").innerHTML = myHTML;

    let email = Cookies.get("email");

    let logInHTML = '';

    if (email === undefined) {

        let LogInButton = document.getElementsByClassName("Log In");
        for (let button of LogInButton) {
            button.style.visibility = "hidden";
        }

        let signUpButton = document.getElementsByClassName("Sign Up");
        for (let button of signUpButton) {
            button.addEventListener("click", signUp);
            button.style.visibility = "hidden";
        }

        logInHTML = "Not logged in. <a href='/client/login.html'>Log in</a>";
    } else {

        let LogInButton = document.getElementsByClassName("Log In");
        for (let button of LogInButton) {
            button.style.visibility = "visible";
            button.addEventListener("click", Login);
        }

        let signUpButton = document.getElementsByClassName("Sign Up");
        for (let button of signUpButton) {
            button.style.visibility = "visible";
        }
        checkLogin();
        logInHTML = "Logged in as " + email + ". <a href='/client/login.html?logout'>Log out</a>";

    }

    document.getElementById("loggedInDetails").innerHTML = logInHTML;

}


function SignUp(event){
    let myHTML = '<a href = "signUp.html">'
        + '<div id="signUp">'
        + '</div>'
        + 'Sign Up'
        + '</a>'
}
function Login(event){
    let myHTML = '<a href = "login.html">'
        + '<div id="login">'
        + '</div>'
        + 'Login Page'
        + '</a>'

}






