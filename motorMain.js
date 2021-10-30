Vue.createApp({
    data(){
        return {
            name: (snapshot.val()).users.username.name,
            bikeInfo:  
                { 
                    mileage : (snapshot.val()).users.username.bikeInfo.mileage,
                    model : (snapshot.val()).users.username.bikeInfo.model,
                    lastMaintenanceDate : (snapshot.val()).users.username.bikeInfo.lastMaintenanceDate,
                    upcomingMaintenanceDate :(snapshot.val()).users.username.bikeInfo.upcomingMaintenanceDate,
                    recentMaintenanceService: (snapshot.val()).users.username.bikeInfo.recentMaintenanceService,
                    upcomingMaintenanceService: (snapshot.val()).users.username.bikeInfo.upcomingMaintenanceService,
                    image: (snapshot.val()).users.username.bikeInfo.image,
                    specs : {
                        engineCC: (snapshot.val()).users.username.bikeInfo.specs.engineCC,
                        cylinder: (snapshot.val()).users.username.bikeInfo.specs.cylinder,
                        horsePower: (snapshot.val()).users.username.bikeInfo.specs.horsePower,
                        torque: (snapshot.val()).users.username.bikeInfo.specs.torque,
                        weight: (snapshot.val()).users.username.bikeInfo.specs.weight,
                    }              
                },
            shortDescription: (snapshot.val()).users.username.shortDescription,
            joinDate: (snapshot.val()).users.username.joinDate
        }
    },
}).mount('#app')