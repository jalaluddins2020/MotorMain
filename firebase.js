
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
    if (sessionStorage.getItem("uid") == "") {
      sessionStorage.clear();
      window.location.href = "index.html";
    }
    else {
      var uid = sessionStorage.getItem("uid");
    }

        var ref = firebase.database().ref();
        ref.on("value", function(snapshot) {
            var uid2 = sessionStorage.getItem("uid");
            Vue.createApp({
              data(){
                  return {
                      name: (snapshot.val()).users[uid].name,
                      bikeInfo:  
                          { 
                              mileage : (snapshot.val()).users[uid].bikeInfo.mileage,
                              year : (snapshot.val()).users[uid].bikeInfo.Year,
                              make : (snapshot.val()).users[uid].bikeInfo.Make,
                              model : (snapshot.val()).users[uid].bikeInfo.Model,
                              crMile : (snapshot.val()).users[uid].bikeInfo.crMile,
                              crDate : (snapshot.val()).users[uid].bikeInfo.crDate,
                              eoMile : (snapshot.val()).users[uid].bikeInfo.eoMile,
                              eoDate : (snapshot.val()).users[uid].bikeInfo.eoDate,
                              spMile : (snapshot.val()).users[uid].bikeInfo.spMile,
                              spDate : (snapshot.val()).users[uid].bikeInfo.spDate
                          }
                  }
              },

              computed: {
                nextEoMile(){
                  return this.bikeInfo.eoMile + Number((snapshot.val()).eochange.model.r1)
                },
                nextEoDate(){
                  var dateArray = this.bikeInfo.eoDate.split("/")
                  var convertedDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
                  var dateObj = new Date(convertedDate)
                  dateObj.setMonth(dateObj.getMonth() + 3)
                  var dd = String(dateObj.getDate()).padStart(2,0)
                  var mm = String(dateObj.getMonth() + 1).padStart(2,0)
                  var yyyy = dateObj.getFullYear()
                  return (dd+"/"+mm+"/"+yyyy)
                },
                nextSpMile(){
                  /*
                  return this.bikeInfo.spMile + Number((snapshot.val()).spchange.model.r1)
                  */
                },
                nextSpDate(){
                  /*
                  var dateArray = this.bikeInfo.spDate.split("/")
                  var convertedDate = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
                  var dateObj = new Date(convertedDate)
                  dateObj.setMonth(dateObj.getMonth() + 3)
                  var dd = dateObj.getDate()
                  var mm = dateObj.getMonth() + 1
                  var yyyy = dateObj.getFullYear()git 
                  return (dd+"/"+mm+"/"+yyyy)
                  */
                },
              }
          }).mount('#main')
            
        }
        , function (error) {
            console.log("Error: " + error.code);
        });


