
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

        var username = "u1";
        var ref = firebase.database().ref();
        ref.on("value", function(snapshot) {
            Vue.createApp({
              data(){
                  return {
                      name: (snapshot.val()).users[username].name,
                      bikeInfo:  
                          { 
                              mileage : (snapshot.val()).users[username].bikeInfo.mileage,
                              year : (snapshot.val()).users[username].bikeInfo.Year,
                              make : (snapshot.val()).users[username].bikeInfo.Make,
                              model : (snapshot.val()).users[username].bikeInfo.Model,
                              crMile : (snapshot.val()).users[username].bikeInfo.crMile,
                              crDate : (snapshot.val()).users[username].bikeInfo.crDate,
                              eoMile : (snapshot.val()).users[username].bikeInfo.eoMile,
                              eoDate : (snapshot.val()).users[username].bikeInfo.eoDate,
                              spMile : (snapshot.val()).users[username].bikeInfo.spMile,
                              spDate : (snapshot.val()).users[username].bikeInfo.spDate
                          }
                  }
              },
          }).mount('#main')
            
        }
        , function (error) {
            console.log("Error: " + error.code);
        });

console.log(firebase.auth().currentUser)