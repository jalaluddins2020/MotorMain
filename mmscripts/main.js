var uid = sessionStorage.getItem("uid")
if (uid == null) {
    sessionStorage.clear();
    window.location.href = "index.html";
}



// Script to open and close sidebar
function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }
    
    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }
// Script to open and close sidebar

// Modal Image Gallery
    function onClick(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
    }
// Modal Image Gallery

// Sign Out
function signOut(){
    sessionStorage.clear();
    window.location.href = "index.html";
    alert("You have been successfully logged out!")
}

// Sign Out
// var users = JSON.parse((sessionStorage.getItem("users")));
// console.log(users)



Vue.createApp({
    data(){
        return {
            name: sessionStorage.getItem("name")
    }
},
    computed: {
        namePrint() {

            if (this.name.split(" ").length > 1) {
                var nameTemp = this.name.split(" ")[0]
                return nameTemp
            }
            return this.name
        }
    }
}).mount('#nameSide')

// Vue for Dashboard servicing details
Vue.createApp({
          data(){
              return {
                  name: sessionStorage.getItem("name").charAt(0).toUpperCase + sessionStorage.getItem("name").slice(1),
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
              var eoNext = 3 // service in 3 months time
              var dateArray = this.bikeInfo.eoDate.split("/")
              var convertedDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
              var dateObj = new Date(convertedDate)
              dateObj.setMonth(dateObj.getMonth() + eoNext)
              var dd = String(dateObj.getDate()).padStart(2,0)
              var mm = String(dateObj.getMonth() + 1).padStart(2,0)
              var yyyy = dateObj.getFullYear()
              return (dd+"/"+mm+"/"+yyyy)
            },
            nextSpMile(){
            var toAdd = sessionStorage.getItem("spChangeMile")
            console.log(toAdd)
              return Number(this.bikeInfo.spMile) + Number(toAdd)
            },
            nextSpDate(){
              var spNext = 12 // service in 12 months time
              var dateArray = this.bikeInfo.spDate.split("/")
              var convertedDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
              var dateObj = new Date(convertedDate)
              dateObj.setMonth(dateObj.getMonth() + spNext)
              var dd = dateObj.getDate()
              var mm = dateObj.getMonth() + 1
              var yyyy = dateObj.getFullYear() 
              return (dd+"/"+mm+"/"+yyyy)
            },
            nextCMile(){
              var toAdd = sessionStorage.getItem("cChangeMile")
              return Number(this.bikeInfo.cMile) + Number(toAdd)
            },
            nextCDate(){
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
      }).mount('#main')
// END of Vue for dashboard servicing details

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
    console.log(uid)
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

  //Settings Page
  function verify(){
    alert("Update Successful!")
  }

  //Review Page - RANGE
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}