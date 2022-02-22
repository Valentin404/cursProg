// const langURL = window.location.search








// if(langURL.includes('ru')){
//     localStorage.setItem('country', 'ru')
// }


// const langPrice = langURL.includes('ru') ? 'rub_max' : 'uan_one'

// window.location
// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log(position.coords.latitude, position.coords.longitude);
//   });
// console.log(langURL);
// if(localStorage.getItem('country')){
// langPrice = 'rub_max'
// }

let langPrice = 'rub_max'
let val = 'руб'
let advanced = 9800
let margin = 730

const changeLang = countr => {
    switch (countr) {
        case 'Ukraine':
            val = 'грн'
            advanced = 3500
            margin = 250
            langPrice = 'uan_max'
    }
}



// switch(langPrice){
// case 'rub_max' : 
// val = 'руб'
// advanced = 9600
// margin = 700
// }

// let isCheckMisstacke

const checkCountry = () => {

    fetch('https://api.ipregistry.co/?key=tryout')
        .then(function (response) {
            return response.json();
        })
        .then(function (payload) {

            // console.log(payload.location.country.name);
            changeLang(payload.location.country.name)
            localStorage.setItem('country',payload.location.country.name)
         
        })
        .then(() => {
            try {
                painAllInfo()
            } catch {}
        })
        .catch(() => {

            try {
                painAllInfo()
            } catch {}
        })
        .finally(() => {
            try{

                changePrice('course-price')
            } catch{}
        })
}

 

setTimeout(()=>{
    try {
        painAllInfo()
       
    } catch {}
    try{

        changePrice('course-price')
    } catch{}
},600)

const countryC = localStorage.getItem('country')

if(countryC){
    

    changeLang(countryC)
} else {
    checkCountry()
}
