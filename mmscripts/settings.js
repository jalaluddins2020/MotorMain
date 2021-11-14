

function updateDetails() {
    var email = document.getElementById("inputEmail").value
    var password = document.getElementById("inputPassword").value
    const auth = getAuth();
    updateEmail(auth.currentUser, "joe@example.com").then(() => {
      // Email updated!
      alert("hello")
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
      alert("byebye")
    });
  }