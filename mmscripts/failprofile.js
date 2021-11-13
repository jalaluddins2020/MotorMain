function toRedirect(){
    var username = sessionStorage.getItem("name")
    console.log(name)
    var year = sessionStorage.getItem("year")
    console.log(year)
    var make = sessionStorage.getItem("make")
    console.log(make)
    var model = sessionStorage.getItem("model")
    console.log(model)

    if (username == null || year == null || make == null || model == null) {
        window.location.href = "profile.html";
    } else {
        window.location.href = "dashboard.html";
    }
}