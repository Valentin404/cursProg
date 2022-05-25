const curreentCurs = document.querySelector('.curreentCurs')
const phatname = window.location.pathname.split('/')
const name = phatname[phatname.length - 1]
const btnZap = document.getElementById('btnZap')



const currentCursLang = {
    uk: {
        start: 'Початок курсу',
        recordin: 'Запис на курс',
        discount:'знимка до 6.06',
        discountText :"знижка до 6.06",
        standart: 'Стандарт',
        PlanSinfo1: 'Заняття у группі',
        PlanSinfo2: 'Видео-записи лекцій',
        PlanSinfo3: 'Чат з тренером та группою',
        PlanSinfo4: 'Перевірка домашніх завдань',
        PlanSinfo5: 'Проект для портфоліо',
        PlanSinfo6: 'Повна підтримка до першого працевлаштування',
        PlanAinfo1: 'Все з пакету Стандарт',
        PlanAinfo2: 'Можливість заморозити навчання до 12-ти місяців',
        PlanAinfo3: 'Можливість проходити заняття повторно',
        PlanAinfo4: '600 хвилин індивідуальних консультацій з викладачем на будь-яку тему',
        PlanAinfo5: 'Допомога в працевлаштуванні',
        payPart: 'Оплата курсу частинами',
        zayavaForInd: 'Залиште заявку на індивідуальний підрахунок',
        'paymeant': 'Платіж',
        'morePaymeants': 'Платежі',
        criptoPrice: 'Так само, будь-який курс можна оплатити криптовалютою',
        writeCursDown: 'Записатися на курс',
        payCursDown: 'Оплатити курс онлайн',
        privel: 'Привілеї',
        teor: 'Теорія',
        pogruz: 'Занурення в цей курс пройде у форматі видеолекцій та вебінарів, під час яких ви зможете задати будь-які питання, щоб вам було простіше заіфксувати всю нову інформацію.',
        practicka: 'Практика',
        getKnowladge: 'Отримані знання ми застосовуємо в практичних задачах після проходження кожної нової теми.',
        support: 'Пітримка',
        supportText: `Надаємо повну підтримку до Вашого працевлаштування та можемо допомогти
    адаптуватися на новій роботі.`,
        githube: `Ми допоможемо вам створити своє портфоліо, яке ви зможете показати майбутньому роботодавцю.`,
        planStudy: 'План навчання',
        hours: 'години',
        lessons: 'уроків',
        mouths: 'місяців',
        price :'Лекції'
    },
    rus: {
        start: 'Начало курса',
        recordin: 'Запись на курс',
        discount : '',
        discountText :"",
        standart: 'Стандарт',
        PlanSinfo1: 'Занятия в группе',
        PlanSinfo2: 'Видео записи лекций',
        PlanSinfo3: 'Чат с тренером и группой',
        PlanSinfo4: 'Проверка домашних заданий',
        PlanSinfo5: 'Проект для портфолио',
        PlanSinfo6: 'Полная поддержка до первого трудоустройства',
        PlanAinfo1: 'Все из пакета Стандарт',
        PlanAinfo2: 'Возможность заморозить обучение до 12-х месяцев',
        PlanAinfo3: 'Возможность проходить занятия повторно',
        PlanAinfo4: '600 мин индивидуальных консультаций с преподавателем на любую любую тему',
        PlanAinfo5: 'помощь в трудоустройстве',
        payPart: 'Оплата курса частями',
        zayavaForInd: 'Оставьте заявку на индивидуальный просчет',
        'paymeant': 'Платеж',
        'morePaymeants': 'Платежa',
        criptoPrice: 'Так же любой курс можно оплатить криптовалютой',
        writeCursDown: 'Записаться на курс',
        payCursDown: 'Оплатить курс онлайн',
        privel: 'Привелегии',
        teor: 'Теория',
        pogruz: 'Погружение в этот курс пройдёт в формате видеолекций и вебинаров, во время которых вы можете задавать любы вопросы, чтобы вам было проще закрепить всю новую информацию.',
        practicka: 'Практика',
        getKnowladge: 'Полученные знания мы применяем в практических задачах после похожденя каждой новой темы.',
        support: 'Поддержка',
        supportText: `Предоставляем полнную поддержку до Вашего трудоустройства и можем помочь
    адаптироватся на новой работе.`,
        githube: `Мы поможем вам создать свое портфолио которое вы сможете показать будущему
    работодателю.`,
        planStudy: 'План обучения',
        hours: 'часа',
        lessons: 'уроков',
        mouths: 'месяцев',
        price : 'Лекции'
    }
}


const CurC = list_Our_Courses.find(d => d.page.includes(name))

// 3500 advanced


const discountBlock = (name, price,val,uan_discount,discountText)=>{
    if(name === 'FrontEnd.html'){
        return `
        <div class="containerPrice">
        <h3 class="black discount">${price} ${val}</h3>
        <div class="discountLine"></div>
        </div>  
        <div class="priceDiscount">${uan_discount}</div>`
         
        //<div class="discountText">${discountText}</div> 
    } else {
        return `
        <h3 class="black">${price} ${val}</h3>`
    }
}
const payParts = (name, price, discount)=>{
    if(name === 'FrontEnd.html'){
        return discount
    } else {
        return price
    }
}



function painAllInfo() {
    const price = CurC.price[langPrice]
    const discount = CurC.price.uan_discount
    const T = currentCursLang[C]

    let lessons = "";
    CurC.plan[C].forEach((l, i) => lessons += ` <div class="contPlan ${i%2 ? 'black':''}">
    <img class="PlaniconType" src="./assest/img/iconForCurs/logo/${l.icon}" alt="">
    <span class="planSpan">${i+1}</span>
    <p>${l.t}</p>
    </div>`)
    curreentCurs.innerHTML = `

<div class="containerTitle">    
 <div class="contImgText">
 
        <div class="contImg">

            <img class="cursImg" src="${CurC.img}" alt="">
           
         
        </div>
        <h2>${CurC.title[C]}
       
        </h2>
        <p>
       ${CurC.text[C]}
    </p>
    </div>
    <h2 class="Start">${T.start} <span>${CurC.start}</span> </h2>
<div class="GlobPriceAll">
    <h2>${T.recordin}</h2>

    <div class="priceAllCont">

        <div class="allPrice">
            <div class="contPrice">
                <h2>${T.standart}</h2>  
                ${discountBlock(CurC.page,price,val,CurC.price.uan_discount,T.discountText)}
            </div>
            <div class="priceInfo">
                <p>${T.PlanSinfo1}</p>
                <p>${T.PlanSinfo2}</p>
                <p>${T.PlanSinfo3}</p>
                <p>${T.PlanSinfo4}</p>
                <p>${T.PlanSinfo5}</p>
                <p>${T.PlanSinfo6}</p>
            </div>
        </div>

        <div class="allPrice">
            <div class="contPrice">
                <h2>Advanced</h2>
                ${discountBlock(CurC.page,price+advanced,val,CurC.price.uan_discount+advanced,T.discountText)} 
            </div>
            <div class="priceInfo">
                <p>${T.PlanAinfo1}</p>
                <p>${T.PlanAinfo2}</p>
                <p>${T.PlanAinfo3}</p>
                <p>${T.PlanAinfo4}</p>
                <p>${T.PlanAinfo5}</p>
            </div>
        </div>
    </div>

    <div class="contPriceParce">
        <h2>${T.payPart}
        </h2>
        <p>${T.zayavaForInd}</p>
        <div class="PricePice">
            <div class="cuurentPricePice">
                <img src="./assest/img/IconPay/tild3262-3533-4262-a334-303935343134__preview2.png" alt="">
                <h3>1 ${T.paymeant}</h3>
                <div class="piceType">
                    <p>${T.standart}</p>
                    <p>1 x ${payParts(CurC.page,price,discount)} ${val}</p>
                </div>
                <div class="piceType">
                    <p>Advanced</p>
                    <p>1 x ${payParts(CurC.page,price+advanced,discount+advanced)} ${val}</p>
                </div>
            </div>
            <div class="lineH"></div>
            <div class="cuurentPricePice">
                <img src="./assest/img/IconPay/tild3262-3533-4262-a334-303935343134__preview2.png" alt="">
                <h3>2 ${T.morePaymeants}</h3>
                <div class="piceType">
                    <p>${T.standart}</p>
                    <p>2 x ${(payParts(CurC.page,price,discount)/2)+margin} ${val}</p>
                </div>
                <div class="piceType">
                    <p>Advanced</p>
                    <p>2 x ${(payParts(CurC.page,price+advanced,discount+advanced)/2)+margin} ${val}</p>
                </div>
            </div>
            <div class="lineH"></div>
            <div class="cuurentPricePice">
                <img src="./assest/img/IconPay/tild3262-3533-4262-a334-303935343134__preview2.png" alt="">
                <h3>4 ${T.morePaymeants}</h3>
                <div class="piceType">
                    <p${T.standart}</p>
                    <p>4 x ${(payParts(CurC.page,price,discount)/4)+margin} ${val}</p>
                </div>
                <div class="piceType">
                    <p>Advanced</p>
                    <p>4 x ${(payParts(CurC.page,price+advanced,discount+advanced)/4)+margin} ${val}</p>
                </div>
            </div>

        </div>
    </div>
</div>
<div class="contPayCript">
    <h2>${T.criptoPrice}</h2>
    <div class="contLogoCript">
        <img src="./assest/img/cripto/usdt.png" logo="usdt"/>
        <img src="./assest/img/cripto/busd.png" logo="busd"/>
        <img src="./assest/img/cripto/bit.png" logo="bitcoin"/>
    </div>
</div>
    <div class="globZAp">

        <div class="contact-form">
<div class="contForWriteCursDown">
<button onclick="openZap()" id="btnZap">${T.writeCursDown}</button>

<button class="btnPay">
<a href="https://prt.mn/Mt9qGamzRp">${T.payCursDown}</a>
</button>

</div>

    </div>

    </div>
</div>

<div class="globPriveleg">
    <h2>${T.privel}</h2>
    <div class="globCurrentPriveleg">
        <div class="currentPriveleg">
            <div class="currentPrivelegContImg ">

                <img src="./assest/img/iconForCurs/Teor/5219780.png" alt="">
                <h3>${T.price}</h3>
            </div>
            <p>${T.pogruz}</p>
        </div>
        <div class="currentPriveleg reverse">
            <div class="currentPrivelegContImg">

                <img src="./assest/img/iconForCurs/Prac/1456579.png" alt="">
                <h3>${T.practicka}</h3>
            </div>
            <p>${T.getKnowladge}</p>
        </div>
        <div class="currentPriveleg">
            <div class="currentPrivelegContImg">

                <img src="./assest/img/iconForCurs/pod/87724.png" alt="">
                <h3>${T.support}</h3>
            </div>
            <p>${T.supportText}</p>
        </div>
        <div class="currentPriveleg reverse">
            <div class="currentPrivelegContImg">

                <img src="./assest/img/iconForCurs/github.png" alt="">
                <h3>GitHub</h3>
            </div>
            <p>${T.githube}
            </p>
        </div>
    </div>
</div>
<div class="globContPlan">
    <div class="planTitel">
        <h2>${T.planStudy}</h2>

        <span class="PlanTime">${CurC.duration.hours} ${T.hours}
            <span>${CurC.duration.number_of_lessons} ${T.lessons}</span>
            <span>${CurC.time} ${T.mouths}</span>
        </span>
    </div>
    <div class="globPlan">
       ${lessons}
      
    </div>
</div>
<div id="whatUs">
<div class="whyCont">
<h2>Почему именно мы?</h2>
    <p>Мы - ИТ курсы, которые в скором времени станут полноценной школой. Наши программы обновляются каждый год - таким не могут похвастаться ни одни курсы. Мы стараемся преподносить самые свежие материлы. Во время каждого курса мы берём во внимание вашу успеваемость и усваиваемость, чтобы подобрать наиболее оптимальный темп и подачу информации, так как наша главная задача - научить вас, а не отработать запланированный материал. Мы даём большой массив практики, так как именно во время работы вы будете запоминать наш материал лучше всего. Все наши курсы имеют уникальный план и последовательность тем, так как все наши задачи и домашние работы устроены по наростанию уровня сложности. Это значит, что если вы будете на 100% слушать все, что говорится при прохождении каждой темы, у вас никогда не возникнет вопросов по поводу домашней работы. 

        Большинство альтернативных курсов не могут таким похвастаться, так как часто бывает, что во время урока вы разбираете все материалы очень быстро и поверхностно, а потом уже дома тратите часы времени на то, чтобы понять, что этого вы на уроке не проходили и вам приходится все учить самостоятельно.
        Каждому студенту предоставляется сертификат об окончании курсов, который он в дальнейшем сможет продемонстрировать при приёме на работу
                </p>
            </div>
</div>
        `


}
// painAllInfo()


const contVideo = document.querySelector('.contVideo')


function openZap() {
    contVideo.classList.add('active')
    window.scrollBy(0, -10000)
    document.getElementById('form-message').value = CurC.title[C]

}

const buttonSumbit = document.getElementById('buttonSumbit')

buttonSumbit.addEventListener('click', e => {
    contVideo.classList.remove('active')

})
document.querySelector('.contClose').addEventListener('click', () => {
    contVideo.classList.remove('active')

})