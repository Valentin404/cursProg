const H = {}
const classContact = ['numberCont', 'GoogleMap', 'contactsCont'];
classContact.forEach(n=>H[n] = document.querySelector('.'+n))

// maps
const countryDATA = {
    uk : {
        map :  [50.429785, 30.414668],
        number : '+38 (093) 810 82 39',
        adres : 'Vaclav Havel Boulevard, 28, Київ, 03126',
        google : 'https://goo.gl/maps/dv3JoUmzMGPLcjvW6'
    },
    rus : {
        map :  [55.679221, 37.4973485],
        number : '+38 (093) 810 82 39',
        adres : 'ул. Удальцова, 77 строение 1, Москва, Россия, 119454',
        google : 'https://goo.gl/maps/nU26YVsM82aho4Xd6'
    },
}

// console.log(C);
// console.log(countryDATA[C].map);
let map;

setTimeout(()=>{
    const d = countryDATA[C]
    DG.then(function () {
        map = DG.map('map', {
            center: d.map,
            zoom: 13
        });
    
        DG.marker( d.map).addTo(map).bindPopup(' <a class="navbar-brand mapsTextOpen">GOOD <span class="web">WEB</span>  ACADEMY</a>');
    }).then(()=>{
H.numberCont.innerHTML = d.number
H.GoogleMap.href = d.google
H.contactsCont.innerHTML = d.adres
    })

    
 
},500)

// https://www.google.com.br/maps/place/GOOD+WEB+ACADEMY/@55.679221,37.4973485,17z/data=!4m5!3m4!1s0x46b54dc8584fc891:0xde7c509c92a64e0!8m2!3d55.6793481!4d37.4983892
// https://www.google.com.br/maps/place/GOOD+WEB+ACADEMY/@50.4297547,30.4120998,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cdf0cf60dc87:0x7704161feb4c639c!8m2!3d50.4298046!4d30.4142566