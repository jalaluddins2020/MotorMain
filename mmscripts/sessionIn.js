// This file ensures that users who are not logged in are enable to access the features of the website such as dashboard etc.

var uid = sessionStorage.getItem("uid")

if (uid != null) {
    if (document.location.href == "http://localhost/Motormain/signin.html") {
        window.location.href = "landing.html";
    } else if (document.location.href == "http://localhost/Motormain/index.html" || document.location.href == "http://localhost/Motormain/" || document.location.href == "http://localhost/Motormain")   {
        window.location.href = "landing.html";
    }
}

