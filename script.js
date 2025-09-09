function loginConfirm(){

}
function showRegisterPage(){
    document.getElementById("password-register").type = "password";
    document.getElementById("password-repeat").type = "password";
    document.getElementById("password-login").type = "hidden";
    document.getElementById("login-button").style.display = "none";
    document.getElementById("register-page").style.display = "none";
    document.getElementById("register-button").style.display = "block";
    document.getElementById("login-page").style.display = "block";




    
}
function showLoginPage(){
    document.getElementById("password-register").type = "hidden";
    document.getElementById("password-repeat").type = "hidden";
    document.getElementById("password-login").type = "password";
    document.getElementById("register-button").style.display = "none";
    document.getElementById("login-page").style.display = "none";
        document.getElementById("login-button").style.display = "block";
    document.getElementById("register-page").style.display = "block";

}