
function getWorkshops() {
    var shop = "shop";
    var num = 0;
    var infoMain = document.getElementById("info-main")
    var output = `<table class="w3-table">
            <tbody class="w3-bordered">
            <tr>
                <th scope="row" class="w3-text-red"><b>Shop</b></th>
                <th>Address</th>
        </tr>`
    for (let obj in sessionStorage) {
        if (obj.slice(0, 4) == shop) {
            let shop = sessionStorage[obj].split("+")
            var name = shop[0].slice(0, -1)
            var address = shop[1].slice(1, -1)
            var lat = shop[2].slice(1).split(",")[0]
            var long = shop[2].slice(1).split(",")[1].slice(1);
            output += `<tr>
            <td><button type="button" onclick="displayWorkshopOnMap(${lat}, ${long})">Show on map</button></td>
            <th scope="row" class="w3-text-red"><b>`+ name +`</b></th>
            <th>`+ address +`</th>
            </tr>`;
        }
    }

    output += `</tbody>
                </table>`

    infoMain.innerHTML = output
}





/* Weather Information Section */

var key = "d8ad138bef71d007adaa6bc3ffd863eb";
var googleKey = "AIzaSyBZ8LDprSmp3bGC56bQWkOo9-Y6_9WvXeI";
var url = "https://api.openweathermap.org/data/2.5/weather";
var googleUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=carpark%20near%20me&key=${googleKey}`;

var inputEle = document.getElementById("city");
var outputEle = document.getElementById("result");
var coordEle = document.getElementById("coords");

var longitude = 0;
var latitude = 0;

resetWeatherBtn.addEventListener("click", getWeatherWithCoordinates);
resetTrafficMapBtn.addEventListener("click", initMap);


function getLocation() {
    console.log("fired");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      coordEle.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
function showPosition(position) {
    //console.log(position.coords.longitude, position.coords.latitude)

    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
  }

getLocation();

function getWeatherWithCoordinates(){
    // getCarpark();
    axios.get(url, {
        params: {
            lat: latitude, 
            lon: longitude,
            appid: key
        }
    })
    .then(response => {
        console.log(response.data);
        let obj = response.data;
        let desc = obj.weather[0].description;
        let temp = Math.round(obj.main.temp-273.15, 2);
        let humid = obj.main.humidity;
        let wind = obj.wind.speed;

        outputEle.innerHTML = `
        <ol>
            <li>Weather status: ${desc}</li>
            <li>Temperature: ${temp} degree celsius</li>
            <li>Humidity: ${humid}%</li>
            <li>Wind Speed: ${wind} m/s</li>
        </ol>
        `;
    })
    .catch(error => {
        console.log(error.message);
        outputEle.innerHTML = "Invalid City Name";
    })

}


/* Traffic map */
function initMap() {
    //console.log(latitude, longitude)

    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: latitude, lng: longitude},
    mapTypeControl: false,
    });

    const image =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        const beachMarker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        icon: image,
    });

    const trafficLayer = new google.maps.TrafficLayer();
    google.maps.event.addDomListener(document.getElementById('trafficToggle'), 'click', toggleTraffic);

    function toggleTraffic(){
        if(trafficLayer.getMap() == null){
            //traffic layer is disabled.. enable it
            trafficLayer.setMap(map);
        } else {
            //traffic layer is enabled.. disable it
            trafficLayer.setMap(null);             
        }
    }

}

/* Parking lot info section */

/* 
`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${googleKey}&location=-33.8670522%2C151.1957362&radius=1500&type=parking`;
*/



function displayWorkshopOnMap(lat, long){
    console.log(lat, long)
    /* displayCarParkOnMapEle.style.display = "block"; */

    workshopLon = long;
    workshopLat = lat;

    console.log(workshopLon, workshopLat);

    
    initMapCarPark();
    

}

function initMapCarPark() {
    document.getElementById("map").style = "none";
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: workshopLat, lng: workshopLon },
        mapTypeControl: false,
    });

    const image =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        const beachMarker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        icon: image,
    });

    const marker = new google.maps.Marker({
        position: { lat: workshopLat, lng: workshopLon },
        map,
        title: "Workshop Information",
    });

    marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
    });

    //Toggle traffic layers
    const trafficLayer = new google.maps.TrafficLayer();
    google.maps.event.addDomListener(document.getElementById('trafficToggle'), 'click', toggleTraffic);

    function toggleTraffic(){
        if(trafficLayer.getMap() == null){
            //traffic layer is disabled.. enable it
            trafficLayer.setMap(map);
        } else {
            //traffic layer is enabled.. disable it
            trafficLayer.setMap(null);             
        }
    }

    //Calculate route
    document.getElementById("getRoute").addEventListener("click", () => {
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const directionsService = new google.maps.DirectionsService();
        directionsRenderer.setMap(map);
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    })

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      
        directionsService
          .route({
            origin: { lat: latitude, lng: longitude},
            destination: { lat: workshopLat, lng: workshopLon },
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode["DRIVING"],
          })
          .then((response) => {
            directionsRenderer.setDirections(response);
          })
          .catch((e) => window.alert("Directions request failed"));
      }
      

}







