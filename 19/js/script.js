var app = {

    cities: [],

    initApp: function() {
        app.mapNameSpace.initMap();
        app.request.getJSON('../data.json').then(function(response) {
            app.cities = response;
            app.mapNameSpace.createMarkers(app.cities);
        });
    },

    request: {

        get: function(url) {
            return new Promise(function(resolve, reject) {

                var req = new XMLHttpRequest();
                req.open('GET', url);

                req.onload = function() {

                    if (req.status == 200) {
                        resolve(req.response);
                    } else {
                        reject(Error(req.statusText));
                    }
                };

                req.onerror = function() {
                    reject(Error("Network Error"));
                };

                req.send();
            });
        },

        getJSON: function(url) {
            return app.request.get(url).then(JSON.parse);
        }
    },

    mapNameSpace: {

        map: null,

        markers: [],

        infoWindow: null,

        flightPlanCoordinates: [],

        initMap: function() {
            app.mapNameSpace.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 6,
                center: {
                    lat: 54,
                    lng: 25
                }
            });

            app.mapNameSpace.infoWindow = new google.maps.InfoWindow({
                content: "holding..."
            });
        },

        createMarkers: function(array) {

            array.forEach(function(elem) {

                var pos = {
                    lat: elem.latitude,
                    lng: elem.longitude
                };

                var marker = new google.maps.Marker({
                    position: pos,
                });

                marker.setMap(app.mapNameSpace.map);

                google.maps.event.addListener(marker, 'click', function() {
                    marker.html = elem.description;
                    app.mapNameSpace.infoWindow.setContent(this.html);
                    app.mapNameSpace.infoWindow.open(map, this);
                });

                app.mapNameSpace.flightPlanCoordinates.push(pos);

                app.mapNameSpace.markers.push(marker);
            });

            var flightPath = new google.maps.Polyline({
                path: app.mapNameSpace.flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            flightPath.setMap(app.mapNameSpace.map);

            app.counting.countDistance();

        }
    },

    counting: {
        rad: function(x) {
            return x * Math.PI / 180;
        },

        getDistance: function(p1, p2) {
            var R = 6378137;
            var dLat = app.counting.rad(p2.lat - p1.lat);
            var dLong = app.counting.rad(p2.lng - p1.lng);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(app.counting.rad(p1.lat) * Math.cos(app.counting.rad(p2.lat))) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d;
        },

        countDistance: function() {
            var length = app.mapNameSpace.flightPlanCoordinates.length;
            var dist = 0;
            for (var i = 0; i < length - 1; i++) {
                dist += app.counting.getDistance(app.mapNameSpace.flightPlanCoordinates[i], app.mapNameSpace.flightPlanCoordinates[i + 1]);
            }
            var div = document.getElementById('distance');
            var str = "Length of the red line is over " + Math.round(dist) + " metres!";
            div.innerText = str;
        }
    }
}
