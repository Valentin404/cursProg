

function AddCurs ()  {
  // console.log('f');
  const d = document.querySelector('.course-list')
  if (!d) return
  d.innerHTML = list_Our_Courses
    .map(elem => `
    <div id='courseElem' class="course-item">
    <div class="single-course mb20">
    <div class="contImgCours">
    <img src="${elem.img}" alt="лого" class="item-picture">
    </div>
    <div class="course-details">
    <h3 class="font30 item-title">${elem.title[C]}</h3>
    </div>
    <p class="mt30" id="Backend"><a href="./${elem.page}" class="enroll-button">${buttonLang[C]}</a> <span class="course-price" title="${elem.id}">${elem.price[langPrice]} ${val}</span></p>
    </div>
    </div>`).join('')
}




AddCurs()



// <a class="item-more font20" value='7' src="./curs/${elem.page}">Подробнее</a>
// <a class="enroll-button" href="#contact">Записаться на курс</a>



// <li><a class="1" href="#Frontend">Front-end с нуля</a></li>
// <li><a class="0" href="#HTML">HTML для JavaScript разработчиков</a></li>
// <li><a class="2" href="#JavaScript">JavaScript для Front-end</a></li>
// <li><a class="3" href="#React">React + Redux</a></li>
// <li><a class="4" href="#Python">Python</a></li>
// <li><a class="5" href="#Java">Java</a></li>
// <li><a class="6" href="#C">C#</a></li>
// <li><a class="7" href="#Backend">Backend</a></li>
// console.log(list_Our_Courses[0].title[C]);
//!Correct
document.querySelector('.submenu').innerHTML = list_Our_Courses
  .map((elem, ind) => `
        <li><a class="${ind+1}" href="./${elem.page}">${elem.title[C]}</a></li>
        `).join('')
