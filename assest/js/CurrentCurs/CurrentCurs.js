const curreentCurs = document.querySelector('.curreentCurs')
const phatname = window.location.pathname
const name = phatname.slice(10)

const CursObj = list_Our_Courses.find(d=>d.page===name)

// curreentCurs.innerHTML = 

// console.log(CursObj);