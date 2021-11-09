function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password). then(cred => {
        console.log(cred)
    });
}


function logOut() {
    auth.signOut().then(() => {
        console.log("user signed out");
        document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    })
}

function logIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred.user);
    })
    var uid = firebase.auth().currentUser.uid;
    document.cookie = "uid=" + uid;
    console.log(document.cookie)
    window.location.href = "dashboard.html";
}

function getUser() {
    console.log(firebase.auth().currentUser.uid);
    const uid = firebase.auth().currentUser.uid;
}

