var map;
var latInput = document.getElementById("latInput");
var lonInput = document.getElementById("lonInput");
var changeBtn = document.getElementById("changeBtn");

var lat= 53.5511;
var lng = 9.9937;
var zoom = 12;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: zoom
    });
}

changeBtn.addEventListener("click", changePosition);

function changePosition() {
    if (latInput.value != "" && lonInput != "") {
        lat = latInput.value;
        lng = lonInput.value;

        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: parseFloat(latInput.value), lng: parseFloat(lonInput.value) },
            zoom: 8
        });
    } else {
        initMap();
    }
}

// $(function () {
//     $("#slider").slider({
//         change: function (event, ui) {
//             zoom = ui%20;
//             initMap();
//         }
//     }
//     );
// });