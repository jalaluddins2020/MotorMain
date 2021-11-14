function toContact(){
    var contactInput = document.getElementById("contactInput").value
    var contactEmail = document.getElementById("contactEmail").value
    var contactTextArea = document.getElementById("contactTextArea").value
    if (contactInput == ""|| contactEmail == ""|| contactTextArea == ""){
        alert("Some fields are missing information.")
    } else {
    alert("Email has been sent successfully! We will respond to your email within 2-3 working days. Thank you!")
    document.getElementById("contactTextArea").value = ""
    document.getElementById("contactEmail").value = ""
    document.getElementById("contactInput").value = ""
    }
}