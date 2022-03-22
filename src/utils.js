export function isUserLoggedIn() {
    var token = localStorage.getItem("token")
    if(token == null)  window.location.href = ("/login")
}