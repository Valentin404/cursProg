const langURL = window.location.search

if(langURL.includes('ru')){
    localStorage.setItem('country', 'ru')
}


// const langPrice = langURL.includes('ru') ? 'rub_max' : 'uan_one'


// console.log(langURL);

let langPrice = 'uan_max'


if(localStorage.getItem('country')){
langPrice = 'rub_max'
}
let val = 'грн'
let advanced = 3500
let margin = 250
switch(langPrice){
    case 'rub_max' : 
    val = 'руб'
    advanced = 9600
    margin = 700
}
