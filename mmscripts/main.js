// This file contains codes that are used for every webpage.


//Checking if uid is set

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

// Sign Out
function signOut(){
    sessionStorage.clear();
    window.location.href = "index.html";
    alert("You have been successfully logged out!")
}

// Creation of vue for mounting of information inside SideBar
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
                nameTemp = nameTemp.charAt(0).toUpperCase() + nameTemp.slice(1)
                return nameTemp
            }
            var nameTemp = this.name.charAt(0).toUpperCase() + this.name.slice(1)
            return nameTemp
        }
    }
}).mount('#nameSide')
