Vue.createApp({
    data(){
        return {
            name: (snapshot.val()).users.username.name,
            bikeInfo:  
                { 
                    mileage : (snapshot.val()).users.username.bikeInfo.mileage,
                    year : (snapshot.val()).users.username.bikeInfo.year,
                    make : (snapshot.val()).users.username.bikeInfo.make,
                    model : (snapshot.val()).users.username.bikeInfo.model,
                    lastMaintenanceDate : (snapshot.val()).users.username.bikeInfo.lastMaintenanceDate,
                    upcomingMaintenanceDate :"function",
                    recentMaintenanceType: (snapshot.val()).users.username.bikeInfo.recentMaintenanceType,
                    upcomingMaintenanceType: "function",
                    image: (snapshot.val()).users.username.bikeInfo.image,
                    specs : {
                        engineCC: (snapshot.val()).users.username.bikeInfo.specs.engineCC,
                        cylinder: (snapshot.val()).users.username.bikeInfo.specs.cylinder,
                        horsePower: (snapshot.val()).users.username.bikeInfo.specs.horsePower,
                        torque: (snapshot.val()).users.username.bikeInfo.specs.torque,
                        weight: (snapshot.val()).users.username.bikeInfo.specs.weight,
                    }     
                },
        }
    },
}).mount('#app')