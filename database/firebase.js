
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDO5olDApwyfXFTakiRtvL1V-xwy4Z4VHk",
    authDomain: "motormain-c6aa7.firebaseapp.com",
    databaseURL: "https://motormain-c6aa7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "motormain-c6aa7",
    storageBucket: "motormain-c6aa7.appspot.com",
    messagingSenderId: "621607556649",
    appId: "1:621607556649:web:f5947efc7a152602a9ee38",
    measurementId: "G-NJ31DVEDBM"
  };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // getting uid from session
    // if (sessionStorage.getItem("uid") == "") {
    //   sessionStorage.clear();
    //   window.location.href = "index.html";
    // }
    // else {
    //   var uid = sessionStorage.getItem("uid");
    // }
    var uid = sessionStorage.getItem("uid", uid);
    
        var ref = firebase.database().ref();
        ref.on("value", function(snapshot) {
            sessionStorage.setItem("name",(snapshot.val()).users[uid].name)
            sessionStorage.setItem("year", (snapshot.val()).users[uid].bikeInfo.Year)
            sessionStorage.setItem("make", (snapshot.val()).users[uid].bikeInfo.Make)
            sessionStorage.setItem("model", (snapshot.val()).users[uid].bikeInfo.Model)
            sessionStorage.setItem("crMile", (snapshot.val()).users[uid].bikeInfo.crMile)
            sessionStorage.setItem("crDate", (snapshot.val()).users[uid].bikeInfo.crDate)
            sessionStorage.setItem("eoMile", (snapshot.val()).users[uid].bikeInfo.eoMile)
            sessionStorage.setItem("eoDate", (snapshot.val()).users[uid].bikeInfo.eoDate)
            sessionStorage.setItem("spMile", (snapshot.val()).users[uid].bikeInfo.spMile)
            sessionStorage.setItem("spDate", (snapshot.val()).users[uid].bikeInfo.spDate)
            sessionStorage.setItem("eoChangeMile", (snapshot.val()).schedule.eo.eoChangeMile)
            sessionStorage.setItem("eoChangeDate", (snapshot.val()).schedule.eo.eoChangeDate)
            sessionStorage.setItem("spChangeDate", (snapshot.val()).schedule.sp.spChangeDate)
            sessionStorage.setItem("spChangeMile", (snapshot.val()).schedule.sp.spChangeMile)
            sessionStorage.setItem("user", JSON.stringify((snapshot.val()).users))
            sessionStorage.setItem("shopList", JSON.stringify(snapshot.val()).shopList)
            console.log((snapshot.val()).shopList)
        }, function (error) {
            console.log("Error: " + error.code);
            document.getElementById("error").innerHTML= 
            `<div class = 'row mt-5'>
                <div class = 'col-6 mx-auto'>
                    <h1>Oops, you weren't supposed to see this!</h1>
                    <p class = 'text-center'>Click <a href = 'login.html'>here</a> to return to the login page</p>
                    <div class = 'text-center'>
                    <img src = 'sadface.jpg' class = 'img-fluid w-50 h-auto'>
                    </div>
                </div>
            </div>`
        });


