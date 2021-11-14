// This file contains the functions related to the dashboard/profile page as well as updating of firebase.

// Updates Current Mileage/Date
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

    var ref = firebase.database().ref("users/" + uid + "/bikeInfo");
    ref.update ({
    "crMile": newMileage,
    "crDate" : newDate
    });
    location.reload();
  }

// Update Engine Oil Mileage/Date
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


// Update Spark Plug Mileage/Date
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


// Updates Brake Pad Service Mileage/Date
  function updateBr() {
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
    "brMile": newMileage,
    "brDate" : newDate
    });
    location.reload();
  }

// Updates Coolant Service Mileage/Date
  function updateC() {
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
    "cMile": newMileage,
    "cDate" : newDate
    });
    location.reload();
  }

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Vue for Dashboard servicing details
Vue.createApp({
    data(){
        return {
            name: sessionStorage.getItem("name"),
            bikeInfo:  
                { 
                    year : sessionStorage.getItem("year"),
                    make : sessionStorage.getItem("make"),
                    model : sessionStorage.getItem("model"),
                    crMile : sessionStorage.getItem("crMile"),
                    crDate : sessionStorage.getItem("crDate"),
                    eoMile : sessionStorage.getItem("eoMile"),
                    eoDate : sessionStorage.getItem("eoDate"),
                    spMile : sessionStorage.getItem("spMile"),
                    spDate : sessionStorage.getItem("spDate"),
                    cMile : sessionStorage.getItem("cMile"),
                    cDate : sessionStorage.getItem("cDate"),
                    brMile : sessionStorage.getItem("brMile"),
                    brDate : sessionStorage.getItem("brDate"),
                },
            shopList: sessionStorage.getItem("shopList")

        }
    },
    computed: {
      nextEoMile(){
          var toAdd = sessionStorage.getItem("eoChangeMile")
        return Number(this.bikeInfo.eoMile) + Number(toAdd)
      },
      nextEoDate(){
        if (sessionStorage.getItem("eoDate") == "") {
            return "Pls Update"
        }
        else {
            var eoNext = 3 // service in 3 months time
            var dateArray = this.bikeInfo.eoDate.split("/")
            var convertedDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
            var dateObj = new Date(convertedDate)
            dateObj.setMonth(dateObj.getMonth() + eoNext)
            var dd = String(dateObj.getDate()).padStart(2,0)
            var mm = String(dateObj.getMonth() + 1).padStart(2,0)
            var yyyy = dateObj.getFullYear()
            return (dd+"/"+mm+"/"+yyyy)
        }
      },
      nextSpMile(){
      var toAdd = sessionStorage.getItem("spChangeMile")
        return Number(this.bikeInfo.spMile) + Number(toAdd)
      },
      nextSpDate(){
        if (sessionStorage.getItem("spDate") == "") {
            return "Pls Update"
        } else{
            var spNext = 12 // service in 12 months time
            var dateArray = this.bikeInfo.spDate.split("/")
            var convertedDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
            var dateObj = new Date(convertedDate)
            dateObj.setMonth(dateObj.getMonth() + spNext)
            var dd = dateObj.getDate()
            var mm = dateObj.getMonth() + 1
            var yyyy = dateObj.getFullYear() 
            return (dd+"/"+mm+"/"+yyyy)
        }
      },
      nextCMile(){
        var toAdd = sessionStorage.getItem("cChangeMile")
        return Number(this.bikeInfo.cMile) + Number(toAdd)
      },
      nextCDate(){
        if (sessionStorage.getItem("cDate") == "") {
            return "Pls Update"
        } else{
            var spNext = 24 // service in 24 months time
            var dateArray = this.bikeInfo.spDate.split("/")
            var convertedDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
            var dateObj = new Date(convertedDate)
            dateObj.setMonth(dateObj.getMonth() + spNext)
            var dd = dateObj.getDate()
            var mm = dateObj.getMonth() + 1
            var yyyy = dateObj.getFullYear() 
            return (dd+"/"+mm+"/"+yyyy)
        }
      }
    }
}).mount('#main')
