function updateInfo() {
    var name = document.getElementById("name").value
    var year = document.getElementById("year").value
    var make = document.getElementById("make").value
    var model = document.getElementById("model").value
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
                "Model" : model
            }
        });
    }
}