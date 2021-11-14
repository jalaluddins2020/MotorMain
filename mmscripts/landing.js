// This file checks if the user has entered his motorcycle details, if he hasn't he will be redirected to the profile page to enter his details, else he will be redirected to the dashboard

function toRedirect(){
    var username = sessionStorage.getItem("name")
    var year = sessionStorage.getItem("year")
    var make = sessionStorage.getItem("make")
    var model = sessionStorage.getItem("model")
    
    if (username == null || year == null || make == null || model == null) {
        window.location.href = "profile.html";
    } else {
        window.location.href = "dashboard.html";
    }
}