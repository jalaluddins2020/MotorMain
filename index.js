
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
