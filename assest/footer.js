
const footer = document.querySelector('footer')

footer.innerHTML = `  
<div class="footer-top-area padding-80-80 bg-dark">
<div class="container">
<div class="row">
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
<div class="single-footer footer-about sm-mb50 xs-mb50 sm-center xs-center">
<div class="footer-logo mb30">
<a href="#">GOOD <span class="web">WEB</span> ACADEMY</a>
</div>
<p>Онлайн-курсы от GOOD WEB Academy — это путь от основ программирования на JavaScript до работы с популярными и востребованными инструментами, включая React и Redux</p>
<p>+38 (093) 810 82 39 <span>(Основной)</span></p>
<p>+38 (093) 810 82 39 <span>(Запасной)</span></p>
<p>goodwebacademy@gmail.com</p>
</div>
            </div>
            <div class="col-md-5 col-lg-5 col-sm-8 col-xs-12">
            <div class="single-footer footer-subscribe white xs-center">
                    <h3 class="mb30 xs-font18">Оставить заявку</h3>
                    <p>Оставьте заявку на курс и мы с вами свяжемся</p>
                    <div class="subscriber-form-area mt50 wow fadeIn">
                        <!--<form action="#" class="subscriber-form mb100">
                            <input type="email" name="email" id="email" placeholder="Email Address">
                            <button type="submit">Subscribe</button>
                            </form>-->
                            <form id="mc-form" class="subscriber-form">
                            <label class="mt10" for="mc-email"></label>
                            <input type="email" id="mc-email" placeholder="email@example.com">
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

plus_btn.addEventListener('click',e=>{
    setTimeout(()=>{
        mc_email.value = ""
    },1500)
})


const header = document.querySelector('header')

header.innerHTML =`
<div class="header-top-area" id="scroolup">
<!--MAINMENU AREA-->
<div class="mainmenu-area" id="mainmenu-area">
    <div class="mainmenu-area-bg"></div>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-header">
                <a href="./index.html" class="navbar-brand">GOOD <span class="web">WEB</span>  ACADEMY</a>
            </div>
            <div id="main-nav" class="stellarnav">
                <ul id="nav" class="nav navbar-nav pull-right">
                    <li class=""><a href="./index.html">Главная</a></li>
                    <!-- <li><a href="./AboutUs.html">О нас</a></li> -->
                    <li><a href="./AllCurs.html">Курсы</a>
                        <ul class="submenu">

                        </ul>
                    </li>
                    <li><a href="./study.html">Обучение</a></li>
                    <li><a href="./Question.html">Вопросы</a></li>
                    <li><a href="./Contact.html">Контакты</a></li>
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
                    <div class="welcome-text">
                        <h1>Онлайн курс программирования с нуля</h1>
                        <p>Мы поможем вам получить полноценные знания и навыки программирования с нуля до Junior разработчика
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
                    <div class="welcome-text">
                        <h1>Онлайн курс программирования с нуля</h1>
                        <p>Мы поможем устроиться на первую работу и покажем, как взять первый заказ на фриланс бирже и пополнить ваше портфолио</p>
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
                    <div class="welcome-text">
                        <h1>Онлайн курс программирования с нуля</h1>
                        <p>Мы даем только те знания, которые нужны для работы, а также предоставляем полную поддержку до первой работы</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`




