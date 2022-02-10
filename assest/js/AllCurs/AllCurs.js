// 
document.querySelector('.containerAllCurs').innerHTML = list_Our_Courses.map(elem => `
 <a class="currntCursA" href="./curs/${elem.page}">
 <div class="currntCurs">
 <div class="contImg">
 <img src="${elem.img}">
     <div class="textDescriptionforHover">
         ${elem.text}</div>
         </div>
         <div class="textForCurs">
         <h3>${elem.title}</h3>
         </div>
         </div>
         </a>
         `)