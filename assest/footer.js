const footer = document.querySelector('footer');

const headerText = {
    'home': {
        uk: 'Головна',
        rus: 'Главная',
    },
    'about': {
        uk: 'Про нас',
        rus: 'О нас',
    },
    'cours': {
        uk: 'Курси',
        rus: 'Курсы',
    },
    'study': {
        uk: 'Навчання',
        rus: 'Обучение',
    },
    'questions': {
        uk: 'Питання',
        rus: 'Вопросы',
    },
    'contact': {
        uk: 'Контакти',
        rus: 'Контакты',
    },
    'w1h1': {
        uk: 'Онлайн-курс програмування з нуля',
        rus: 'Онлайн-курс программирования с нуля',
    },
    'w1p': {
        uk: 'Ми допоможемо вам отримати повноцінні знання та навички програмування з нуля до Junior розробника',
        rus: 'Мы поможем вам получить полноценные знания и навыки программирования с нуля до Junior разработчика',
    },
    'w2h1': {
        uk: 'Онлайн-курс програмування з нуля',
        rus: 'Онлайн-курс программирования с нуля',
    },
    'w2p': {
        uk: 'Ми допоможемо влаштуватися на першу роботу та покажемо, як взяти перше замовлення на фріланс біржі та поповнити ваше портфоліо',
        rus: 'Мы поможем устроиться на первую работу и покажем, как взять первый заказ на фриланс бирже и пополнить ваше портфолио',
    },
    'w3h1': {
        uk: 'Онлайн-курс програмування з нуля',
        rus: 'Онлайн-курс программирования с нуля',
    },
    'w3p': {
        uk: 'Ми даємо лише ті знання, які потрібні для роботи, також надаємо повну підтримку до першого працевлаштування',
        rus: 'Мы даем только те знания, которые нужны для работы, а также предоставляем полную поддержку до первой работы',
    },

};

const footerFile = {
    footerT: {
        uk: "Онлайн-курси від GOOD WEB ACADEMY - це шлях від основ прграмування до роботи з популярними та затребуваними інструментами",
        rus: 'Онлайн-курсы от GOOD WEB ACADEMY — это путь от основ программирования до работы с популярными и востребованными инструментами'
    },
    getInTouch: {
        uk: 'Заповніть заявку',
        rus: 'Оставить заявку'
    },
    WeMeetWithYou: {
        uk: "Залиште заявку на курс і ми зв`яжемось із вами",
        rus: 'Оставьте заявку на курс и мы с вами свяжемся'
    }
}

footer.innerHTML = `  
<div class="footer-top-area padding-80-80 bg-dark">
<div class="container">
<div class="row">
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
<div class="single-footer footer-about sm-mb50 xs-mb50 sm-center xs-center">
<div class="footer-logo mb30">
<a href="#">GOOD <span class="web">WEB</span> ACADEMY</a>
</div>
<p class="footer">${footerFile.footerT[C]}</p>
<p>+38 (093) 810 82 39 <span>(Основний)</span></p>
<p>+38 (095) 474 50 36 <span>(Запасний)</span></p>
<p>GOOD.WEB.ACADEMY.USA@gmail.com</p>
</div>
            </div>
            <div class="col-md-5 col-lg-5 col-sm-8 col-xs-12">
            <div class="single-footer footer-subscribe white xs-center">
                    <h3 class="mb30 xs-font18">${footerFile.getInTouch[C]}</h3>
                    <p>${footerFile.WeMeetWithYou[C]}</p>
                    <div class="subscriber-form-area mt50 wow fadeIn">
                        <!--<form action="#" class="subscriber-form mb100">
                            <input type="email" name="email" id="email" placeholder="Email Address">
                            <button type="submit">Subscribe</button>
                            </form>-->
                            <form id="mc-form" class="subscriber-form">
                            <label class="mt10" for="mc-email"></label>
                            <input type="email" id="mc-email" placeholder="your@emailExample.ua">
                            <button type="submit" class="plus-btn"><i class="fa fa-paper-plane-o"></i></button>
                            </form>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
</div>

`

const plus_btn = document.querySelector('.plus-btn')
const mc_email = document.getElementById('mc-email')

plus_btn.addEventListener('click', e => {
    setTimeout(() => {
        mc_email.value = ""
    }, 1500)
})


const header = document.querySelector('header')

header.innerHTML = `
<div class="header-top-area" id="scroolup">
<!--MAINMENU AREA-->
<div class="mainmenu-area" id="mainmenu-area">
    <div class="mainmenu-area-bg"></div>
    <nav class="navbar">
        <div class="container">
        <div class="navbar-header">
        <img src="./assest/img/L.png" />
        <a href="./index.html" class="navbar-brand">
        GOOD <span class="web">WEB</span>  ACADEMY</a>
            </div>
            <div id="main-nav" class="stellarnav">
                <ul id="nav" class="nav navbar-nav pull-right">
                    <li ><a class="home" href="./index.html">${headerText.home[C]}</a></li>
                    <!-- <li><a class="about" href="./AboutUs.html">${headerText.about[C]}</a></li> -->
                    <li><a class="cours" href="./AllCurs.html">${headerText.cours[C]}</a>
                        <ul class="submenu">

                        </ul>
                    </li>
                    <li><a class="study" href="./study.html">${headerText.study[C]}</a></li>
                    <li><a class="questions" href="./Question.html">${headerText.questions[C]}</a></li>
                    <li><a class="contact" href="./Contact.html">${headerText.contact[C]}</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>
<!--END MAINMENU AREA END-->
</div>

<!--WELCOME SLIDER AREA-->
<div class="welcome-slider-area white font16">
<div class="welcome-single-slide">
    <div class="slide-bg-one slide-bg-overlay"></div>
    <div class="welcome-area">
        <div class="container">
            <div class="row flex-v-center">
                <div class="col-md-8 col-lg-7 col-sm-12 col-xs-12">
                    <div class="welcome-text w1">
                        <h1>${headerText.w1h1[C]}</h1>
                        <p>${headerText.w1p[C]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="welcome-single-slide">
    <div class="slide-bg-two slide-bg-overlay"></div>
    <div class="welcome-area">
        <div class="container">
            <div class="row flex-v-center">
                <div class="col-md-8 col-lg-7 col-sm-12 col-xs-12">
                    <div class="welcome-text w2">
                        <h1>${headerText.w2h1[C]}</h1>
                        <p>${headerText.w2p[C]}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="welcome-single-slide">
    <div class="slide-bg-three slide-bg-overlay"></div>
    <div class="welcome-area">
        <div class="container">
            <div class="row flex-v-center">
                <div class="col-md-8 col-lg-7 col-sm-12 col-xs-12">
                    <div class="welcome-text w3">
                        <h1>${headerText.w3h1[C]}</h1>
                        <p>${headerText.w3p[C]}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`




setTimeout(() => {
    const hasSub = document.querySelector('.has-sub')
    const header = document.querySelector('header')
    hasSub.addEventListener('click', e => {
        header.classList.toggle('active')
    })

    document.querySelector('.menu-toggle').addEventListener('click', () => {
        hasSub.className.includes('open') && header.classList.remove('active')
    })
}, 500)
// 




setTimeout(() => {
    const a = document.querySelectorAll('#nav a')
    console.clear()
    console.log("%cНа нашому курсі ви станете кращим у своїй сфері", "color:#0be27a; background:#000000; font-size: 16pt");


    let L = window.location.pathname.split('/');
    L = L[L.length - 1]

    if(L.trim() === '') {
        return document.querySelector('#nav a.home').classList.add('active')
    }

    a.forEach(a => {
        if (a.href.includes(L)) {
            if (a.className !== 'dd-toggle') {
              
                a.classList.add('active')
            }
        }
    })
}, 799)