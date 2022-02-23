// maps

let map;

DG.then(function () {
    map = DG.map('map', {
        center: [50.429785, 30.414668],
        zoom: 13
    });

    DG.marker([50.429785, 30.414668]).addTo(map).bindPopup(' <a class="navbar-brand mapsText">GOOD <span class="web">WEB</span>  ACADEMY</a>');
});