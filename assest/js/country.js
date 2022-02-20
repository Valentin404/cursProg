const langURL = window.location.search

if(langURL.includes('ru')){
    localStorage.setItem('country', 'ru')
}


// const langPrice = langURL.includes('ru') ? 'rub_max' : 'uan_one'


// console.log(langURL);

let langPrice = 'uan_one'


if(localStorage.getItem('country')){
langPrice = 'rub_max'
}
