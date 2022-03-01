const contImg1 = document.querySelector('.contImg1')
const contImg2 = document.querySelector('.contImg2')
const url = './assest/img/study/img1/'
const img1 = [
    "angular.png",
    "php.jpg",
    "vue.png"
]

let count1 = 0

contImg1.innerHTML = img1.map((img,ind) => `
<img src="./assest/img/study/img1/${img}" style="${count1=== ind? "":'opac'}" />
`).join('')
const all1 = document.querySelectorAll(".contImg1 img")


setInterval(()=>{
 
        all1[count1].classList.remove('opac');
    

    if(count1+1 == img1.length){
        count1 = 0
    } else {
        count1++     
    }

    all1[count1].classList.add('opac')
  
},2500)