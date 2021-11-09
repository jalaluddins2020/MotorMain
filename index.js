var uid = sessionStorage.getItem("uid");

// nav bar open close
    function navOpenClose() {
        if (document.getElementById("mySidebar").style.width == "15%") {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("main").style.width = "100%"
        }
        else {
        document.getElementById("mySidebar").style.width = "15%";
        document.getElementById("main").style.marginLeft = "15%";
        document.getElementById("main").style.width = "85%"
        }
    }

// alert message when sign out
    function signOut(){
        sessionStorage.clear();
        window.location.href = "index.html";
        alert("You have been successfully logged out!")
    }

//display successful creation of account
    function verify(){
        alert("You have successfully created your account!")
    }

    // Update Current Mileage/Date
    function updateCr() {
        var newMileage = Number(prompt("Enter new mileage (km) "));
        while (newMileage == "") {
            newMileage = Number(prompt("Please enter new mileage (km) "));
        }

        var intDate = prompt("Enter date of service (dd/mm/yyy) (if today, leave empty)");
        
        while ((intDate[2] != "/" || intDate[5] != "/") && intDate != "") {
            intDate = prompt("Enter date of service (dd/mm/yyy) (if today, leave empty)");
        }

        if (intDate == "") {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            var newDate = dd + '/' + mm + '/' + yyyy;
        } else {
            var newDate = intDate;
        }

        // var toRefer = "users/" + uid + "/bikeInfo"
        var ref = firebase.database().ref("users/" + uid + "/bikeInfo");

        ref.update ({
        "crMile": newMileage,
        "crDate" : newDate
        });
        location.reload();
      }

    // Update eo Mileage/Date
    function updateEo() {
        var newMileage = Number(prompt("Enter new mileage (km) "));
        while ( newMileage == "") {
            newMileage = Number(prompt("Please enter new mileage (km) "));
        }

        var intDate = prompt("Enter date of service (dd/mm/yyy) (if today, leave empty)");
        
        while ((intDate[2] != "/" || intDate[5] != "/") && intDate != "") {
            intDate = prompt("Enter date of service (dd/mm/yyy) (if today, leave empty)");
        }

        if (intDate == "") {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            var newDate = dd + '/' + mm + '/' + yyyy;
        } else {
            var newDate = intDate;
        }

        var ref = firebase.database().ref("users/" + uid + "/bikeInfo");
        ref.update ({
        "crMile": newMileage,
        "crDate": newDate,
        "eoMile": newMileage,
        "eoDate" : newDate
        });
        location.reload();
      }


    // Update sp Mileage/Date
    function updateSp() {
        var newMileage = Number(prompt("Enter new mileage (km) "));
        while ( newMileage == "") {
            newMileage = Number(prompt("Please enter new mileage (km) "));
        }

        var intDate = prompt("Enter date of service (dd/mm/yyy) (if today, leave empty)");
        
        while ((intDate[2] != "/" || intDate[5] != "/") && intDate != "") {
            intDate = prompt("Please enter date of service (dd/mm/yyy) (if today, leave empty)");
        }

        if (intDate == "") {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            var newDate = dd + '/' + mm + '/' + yyyy;
        } else {
            var newDate = intDate;
        }

        var ref = firebase.database().ref("users/" + uid + "/bikeInfo");

        ref.update ({
        "crMile": newMileage,
        "crDate": newDate,
        "spMile": newMileage,
        "spDate" : newDate
        });
        location.reload();
      }

