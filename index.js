
// nav bar open close
    function navOpenClose() {
        if (document.getElementById("mySidebar").style.width == "15%") {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
        else {
        document.getElementById("mySidebar").style.width = "15%";
        document.getElementById("main").style.marginLeft = "15%";
        }
    }

// alert message when sign out
    function signOut(){
        alert("You have been successfully logged out!")
    }

//display successful creation of account
    function verify(){
        alert("You have successfully created your account!")
    }




