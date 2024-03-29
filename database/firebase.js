  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: APIKEYHERE,
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

    // Getting uid from session
    var uid = sessionStorage.getItem("uid", uid);
    

    // Setting database values as variables inside a session
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
            sessionStorage.setItem("cMile", (snapshot.val()).users[uid].bikeInfo.cMile)
            sessionStorage.setItem("cDate", (snapshot.val()).users[uid].bikeInfo.cDate)
            sessionStorage.setItem("brMile", (snapshot.val()).users[uid].bikeInfo.brMile)
            sessionStorage.setItem("brDate", (snapshot.val()).users[uid].bikeInfo.brDate)
            sessionStorage.setItem("eoChangeMile", (snapshot.val()).schedule.eo.eoChangeMile)
            sessionStorage.setItem("spChangeMile", (snapshot.val()).schedule.sp.spChangeMile)
            sessionStorage.setItem("cChangeMile", (snapshot.val()).schedule.coolant.cChangeMile)
            

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
        

        // Getting the available workshops from firebase
        var shop = "shop";
        var num = 0; 
        var query = firebase.database().ref("shopList").orderByKey();
        query.once("value")
          .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              num ++
              // key will be "ada" the first time and "alan" the second time
              var key = childSnapshot.key;
              // childData will be the actual contents of the child
              var childData = childSnapshot.val();
              // console.log(childData)
              var shopNum = shop + num;
              var name = childData.Name
              var address = childData.Address;
              var coords = childData.Coordinates;
              var shopDetails = [name,"+", address,"+", coords];
              sessionStorage.setItem(shopNum, shopDetails);
          });
        });
