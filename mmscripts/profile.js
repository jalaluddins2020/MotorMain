function updateInfo() {
    var name = document.getElementById("name").value
    var year = document.getElementById("year").value
    var make = document.getElementById("make").value
    var model = document.getElementById("model").value
    if (name==""||year==""||make==""||model==""){
        alert("Some fields are missing information.")
    } else {
        var ref = firebase.database().ref("users/" + uid + "/bikeInfo");
        console.log(uid)
        ref.update ({
        "Year": year,
        "Make" : make,
        "Model" : model
    });
    var ref2 = firebase.database().ref("users/" + uid);
        console.log(uid)
        ref2.update ({
        "name": name
    });
    }
}