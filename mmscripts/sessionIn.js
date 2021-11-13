var uid = sessionStorage.getItem("uid")

if (uid != null) {
    if (document.location.href == "http://localhost/Motormain/signin.html") {
        window.location.href = "landing.html";
    } else if (document.location.href == "http://localhost/Motormain/index.html" || document.location.href == "http://localhost/Motormain/" || document.location.href == "http://localhost/Motormain")   {
        window.location.href = "landing.html";
    }
}

