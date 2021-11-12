var uid = sessionStorage.getItem("uid")

if (uid != null) {
    if (document.location.href == "http://localhost/IS216/testprojectstyling/signin.html") {
        window.location.href = "dashboard.html";
    } else if (document.location.href == "http://localhost/IS216/testprojectstyling/index.html" || document.location.href == "http://localhost/IS216/testprojectstyling/" || document.location.href == "http://localhost/IS216/testprojectstyling")   {
        window.location.href = "dashboard.html";
    }
}

