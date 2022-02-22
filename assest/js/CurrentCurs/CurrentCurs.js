const curreentCurs = document.querySelector('.curreentCurs')
const phatname = window.location.pathname.split('/')
const name = phatname[phatname.length-1]
const btnZap = document.getElementById('btnZap')

const C = list_Our_Courses.find(d => d.page.includes(name))

// 3500 advanced

function painAllInfo () {
   
    const price = C.price[langPrice] 
    let lessons = "";
    C.plan.forEach((l,i)=>lessons+=` <div class="contPlan ${i%2 ? 'black':''}">
    <img class="PlaniconType" src="./assest/img/iconForCurs/github.png" alt="">
    <span class="planSpan">${i+1}</span>
    <p>${l}</p>
</div>` )
    curreentCurs.innerHTML = `

<div class="containerTitle">    
 <div class="contImgText">
 
        <div class="contImg">

            <img class="cursImg" src="${C.img}" alt="">
           
         
        </div>
        <h2>${C.title}
       
        </h2>
        <p>
       ${C.text}
    </p>
    <h2 class="Start">Начало курса <span>${C.start}</span> </h2>
</div>
<div class="GlobPriceAll">
    <h2>Запись на курс</h2>

    <div class="priceAllCont">

        <div class="allPrice">
            <div class="contPrice">
                <h2>Стандарт</h2>
                <h3 class="black">${price} ${val}</h3>
            </div>
            <div class="priceInfo">
                <p>Занятия в группе</p>
                <p>Видео записи лекций</p>
                <p>Чат с тренером и группой</p>
                <p>Проверка домашних заданий</p>
                <p>Проект для портфолио</p>
                <p>полная поддержка до первого трудоустройства</p>
            </div>
        </div>

        <div class="allPrice">
            <div class="contPrice">
                <h2>Advanced</h2>
                <h3 class="black">${price+advanced} ${val}</h3>
            </div>
            <div class="priceInfo">
                <p>Все из пакета Стандарт</p>
                <p>Возможность заморозить обучение до 12-х месяцев</p>
                <p>Возможность проходить занятия повторно</p>
                <p>600 мин индивидуальных консультаций с преподавателем по поводу любой темы</p>
                <p>помощь в трудоустройстве</p>
            </div>
        </div>
        <!-- <div class="allPrice">
    <div class="contPrice">
        <h2>Стандарт</h2>
        <h3 class="black">17 540 грн</h3>
    </div>
    
</div> -->
    </div>

    <div class="contPriceParce">
        <h2>Оплата курса частями
        </h2>
        <p>Оставьте заявку на индивидуальный просчет</p>
        <div class="PricePice">
            <div class="cuurentPricePice">
                <img src="./assest/img/IconPay/tild3262-3533-4262-a334-303935343134__preview2.png" alt="">
                <h3>1 Платеж</h3>
                <div class="piceType">
                    <p>Стандарт</p>
                    <p>1 x ${price} ${val}</p>
                </div>
                <div class="piceType">
                    <p>Advanced</p>
                    <p>1 x ${price+advanced} ${val}</p>
                </div>
            </div>
            <div class="lineH"></div>
            <div class="cuurentPricePice">
                <img src="./assest/img/IconPay/tild3262-3533-4262-a334-303935343134__preview2.png" alt="">
                <h3>2 Платежa</h3>
                <div class="piceType">
                    <p>Стандарт</p>
                    <p>2 x ${(price/2)+margin} ${val}</p>
                </div>
                <div class="piceType">
                    <p>Advanced</p>
                    <p>2 x ${((price+advanced)/2)+margin} ${val}</p>
                </div>
            </div>
            <div class="lineH"></div>
            <div class="cuurentPricePice">
                <img src="./assest/img/IconPay/tild3262-3533-4262-a334-303935343134__preview2.png" alt="">
                <h3>4 Платежа</h3>
                <div class="piceType">
                    <p>Стандарт</p>
                    <p>4 x ${(price/4)+margin} ${val}</p>
                </div>
                <div class="piceType">
                    <p>Advanced</p>
                    <p>4 x ${((price+advanced)/4)+margin} ${val}</p>
                </div>
            </div>

        </div>
    </div>
</div>
    <div class="globZAp">

        <div class="contact-form">
    <a href="#buttonSumbityy">
    <button id="btnZap">Записаться на курс</button>
    </a>
        </div>
    </div>
</div>

<div class="globPriveleg">
    <h2>Привелегии</h2>
    <div class="globCurrentPriveleg">
        <div class="currentPriveleg">
            <div class="currentPrivelegContImg ">

                <img src="./assest/img/iconForCurs/Teor/5219780.png" alt="">
                <h3>Теория</h3>
            </div>
            <p>Погружение в этот курс пройдёт в формате видеолекций и вебинаров во время которых вы можете
                принимать полное участие что бы вам было проще закрепить всю новую информацию.</p>
        </div>
        <div class="currentPriveleg reverse">
            <div class="currentPrivelegContImg">

                <img src="./assest/img/iconForCurs/Prac/1456579.png" alt="">
                <h3>Практика</h3>
            </div>
            <p>Полученные знания мы применяем на практических задачах после каждой новой темы.</p>
        </div>
        <div class="currentPriveleg">
            <div class="currentPrivelegContImg">

                <img src="./assest/img/iconForCurs/pod/87724.png" alt="">
                <h3>Поддержка</h3>
            </div>
            <p>Предоставляем полнную поддержку до вашего трудоустройства и можем помочь вам в первое время
                адаптироватся на вашей новой работе.</p>
        </div>
        <div class="currentPriveleg reverse">
            <div class="currentPrivelegContImg">

                <img src="./assest/img/iconForCurs/github.png" alt="">
                <h3>GitHub</h3>
            </div>
            <p>Мы поможем вам создать сове портфолио которое вы сможете показать своему будущему
                работодателю.
            </p>
        </div>
    </div>
</div>
<div class="globContPlan">
    <div class="planTitel">
        <h2>План обучения</h2>

        <span class="PlanTime">${C.duration.hours} часа
            <span>${C.duration.number_of_lessons} уроков</span>
            <span>${C.time} месяцев</span>
        </span>
    </div>
    <div class="globPlan">
       ${lessons}
      
    </div>
</div>

<div class="whyCont">
    <h2>Почему именно мы ?</h2>
    <p>Мы ИТ курсы, которые в скором времени станут полноценной школой. Наши программы обновляются каждый год, таким не могут похвастаться ни одни курсы, мы стараемся преподносить самые свежие материлы. Во время каждого курса мы берём во внимание вашу успеваемость и усваиваемость, чтобы подобрать наиболее оптимальный темп и подачу информации, так как наша главная задача - научить вас, а не отработать запланированный материал. Мы даём большой массив практики, так как именно во время работы вы будете запоминать наш материал лучше всего. Все наши курсы имеют уникальный план и последовательность тем, так как все наши задачи и домашние работы устроены по наростанию уровня сложности. Это значит, что если вы будете на 100% слушать все, что говорится при прохождении каждой темы, у вас никогда не возникнет вопросов по поводу домашней работы. 

        Большинство альтернативных курсов не могут таким похвастаться, так как часто бывает, что во время урока вы разбираете все материалы очень быстро и поверхностно, а потом уже дома тратите часы времени на то, чтобы понять, что этого вы на уроке не проходили и вам приходится все это учить самостоятельно.
        Каждому студенту предоставляется сертификат об окончании курсов, который он в дальнейшем сможет продемонстрировать при приёме на работу
        </p>
</div>
 `


}
// painAllInfo()

