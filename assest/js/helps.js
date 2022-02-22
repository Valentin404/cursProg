function changePrice (name){
    const allPrice = document.querySelectorAll("#courseElem ."+name)
    // console.log(allPrice);
    allPrice.forEach(div=>{
      const  curs = list_Our_Courses.find(d=>d.id == div.title)
      
        div.innerHTML =curs.price[langPrice] +' ' + val
    })

}


// setTimeout(()=>{

//     changePrice('course-price')
// },4000)
// course-price