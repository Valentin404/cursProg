
const footer = document.querySelector('footer')

footer.innerHTML = `  
<div class="footer-top-area padding-80-80 bg-dark">
<div class="container">
<div class="row">
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
<div class="single-footer footer-about sm-mb50 xs-mb50 sm-center xs-center">
<div class="footer-logo mb30">
<a href="#">GOOD WEB ACADEMY</a>
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
</div>`

const plus_btn = document.querySelector('.plus-btn')
const mc_email = document.getElementById('mc-email')

plus_btn.addEventListener('click',e=>{
    setTimeout(()=>{
        mc_email.value = ""
    },1500)
})
