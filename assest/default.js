const htmlD = `             <div id='courseElem' class="course-item">
<div class="single-course mb20">
    <img src="assest/img/course/Html_Css2.jpg" alt="" class="item-picture">
    <div class="course-details padding30">
        <h3 class="font30 item-title">HTML для JavaScript разработчиков</h3>
        <button class="item-more font20" value='0'>Подробнее</button>
        <p class="mt30" id="HTML"><a class="enroll-button" href="#contact">Записаться на курс</a> <span class="course-price">$215</span></p>
    </div>
</div>
</div>
<div id='courseElem' class="course-item">
<div class="single-course mb20">
    <img src="assest/img/course/front_end.jpg" alt="" class="item-picture">
    <div class="course-details padding30">
        <h3 class="font30 item-title">Front-end с нуля <span class="soon">Скоро</span></h3>
        <button class="item-more font20" value='1'>Подробнее</button>
        <p class="mt30" id="Frontend"><a class="enroll-button" href="#contact">Записаться на курс</a> <span class="course-price"> <span class=" course-price course-price-sale">$625</span>$425</span>
        </p>
    </div>
</div>
</div>
<div id='courseElem' class="course-item">
<div class="single-course mb20">
    <img src="assest/img/course/js3.jpg" alt="" class="item-picture">
    <div class="course-details padding30">
        <h3 class="font30 item-title">JavaScript для Front-end</h3>
        <p class="font20"></p>
        <button class="item-more font20" value='2'> Подробнее</button>
        <p class="mt30" id="JavaScript"><a class="enroll-button" href="#contact">Записаться на курс</a> <span class="course-price">$285</span></p>
    </div>
</div>
</div>
<div id='courseElem' class="course-item">
<div class="single-course mb20">
    <img src="assest/img/course/RR.jpg" alt="" class="item-picture">
    <div class="course-details padding30">
        <h3 class="font30 item-title">React + Redux</h3>
        <button class="item-more font20" value='3'>Подробнее</button>
        <p class="mt30" id="React">
            <a class="enroll-button" href="#contact">Записаться на курс</a> <span class="course-price">$355</span></p>
    </div>
</div>
</div>
<div id='courseElem' class="course-item">
<div class="single-course mb20">
    <img src="assest/img/course/Python 1.png" alt="" class="item-picture">
    <div class="course-details padding30">
        <h3 class="font30 item-title">Python</h3>
        <button class="item-more font20" value='4'>Подробнее</button>
        <p class="mt30" id="Python"><a class="enroll-button" href="#contact">Записаться на курс</a> <span class="course-price">$500</span></p>
    </div>
</div>
</div>
<div id='courseElem' class="course-item">
<div class="single-course mb20">
    <img src="assest/img/course/java-logo.jpg" alt="" class="item-picture">
    <div class="course-details padding30">
        <h3 class="font30 item-title">Java</h3>
        <button class="item-more font20" value='5'>Подробнее</button>
        <p class="mt30" id="Java"><a class="enroll-button" href="#contact">Записаться на курс</a> <span class="course-price">$500</span></p>
    </div>
</div>
</div>
<div id='courseElem' class="course-item">
<div class="single-course mb20">
    <img src="assest/img/course/C-logo.png" alt="" class="item-picture">
    <div class="course-details padding30">
        <h3 class="font30 item-title">C#</h3>
        <button class="item-more font20" value='6'>Подробнее</button>
        <p class="mt30" id="C"><a class="enroll-button" href="#contact">Записаться на курс</a> <span class="course-price">$500</span></p>
    </div>
</div>
</div>
<div id='courseElem' class="course-item">
<div class="single-course mb20">
    <img src="assest/img/course/backEnd.png" alt="" class="item-picture">
    <div class="course-details padding30">
        <h3 class="font30 item-title">Backend</h3>
        <button class="item-more font20" value='7'>Подробнее</button>
        <p class="mt30" id="Backend"><a class="enroll-button" href="#contact">Записаться на курс</a> <span class="course-price">$500</span></p>
    </div>
</div>
</div>`


document.querySelector('.course-list').innerHTML =  list_Our_Courses
.map(elem=>`
<div id='courseElem' class="course-item">
  <div class="single-course mb20">
    <div class="contImgCours">
        <img src="${elem.img}" alt="" class="item-picture">
    </div>
    <div class="course-details">
        <h3 class="font30 item-title">${elem.title}</h3>
    </div>
    <p class="mt30" id="Backend"><a href="./curs/${elem.page}" class="enroll-button">Подробнее</a> <span class="course-price">${elem.price.uan_max} грн</span></p>
  </div>
</div>`).join('')
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

        document.querySelector('.submenu').innerHTML = list_Our_Courses
        .map((elem,ind)=>`
        <li><a class="${ind+1}" href="./curs/${elem.page}">${elem.title}</a></li>
        `).join('')