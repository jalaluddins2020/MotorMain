// This file contains the functions used to update user values in firebase

function updateInfo() {
    var name = document.getElementById("name").value
    var year = document.getElementById("year").value
    var make = document.getElementById("make").value
    var model = document.getElementById("model").value
    var crMile = document.getElementById("crMile").value
    var crDate = document.getElementById("crDate").value
    var brMile = document.getElementById("brMile").value
    var brDate = document.getElementById("brDate").value
    var cMile = document.getElementById("cMile").value
    var cDate = document.getElementById("cDate").value
    var eoMile = document.getElementById("eoMile").value
    var eoDate = document.getElementById("eoDate").value
    var spMile = document.getElementById("spMile").value
    var spDate = document.getElementById("spDate").value
    if (name==""||year==""||make==""||model==""){
        alert("Some fields are missing information.")
    } else {
        var ref = firebase.database().ref("users/" + uid)
        console.log(uid)
        console.log(name)
        console.log(year)
        console.log(make)
        ref.set({
            "name": name,
            "bikeInfo" : {
                "Year": year,
                "Make" : make,
                "Model" : model,
                "brDate" : brDate,
                "brMile": brMile,
                "cDate": cDate,
                "cMile": cMile,
                "spDate": spDate,
                "spMile": spMile,
                "eoDate": eoDate,
                "eoMile": eoMile,
                "crDate": crDate,
                "crMile": crMile
            }
        });
    }
    window.location.href = "dashboard.html";
}