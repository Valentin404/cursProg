

$(document).ready(function() {
   $(window).scroll(function(event) {
      // if(window.scrollY < 500) return
       let s=$(this).scrollTop();
       let w=$(this).outerWidth();
       let h=$('.content').outerHeight();
       let h_b=$('.parallax').outerHeight();
       let p = s/h*100;
       let p_b = s/h_b*100;
       let o = 1-1/100*p_b;

    //    text
       let z_1=1+(w/10000*p_b);
       $('.parallax_fog').css('transform','scale('+z_1+')');
// tyman
       $('.parallax_fog').css('opacity',o);
    //    gora fon big
    // 5000000 это скорость уыеличение горы
    let z_2=1+(w/5000000*p);
    $('.parallax_mon_1').css('transform','scale('+z_2+')');
    // гора 2 right
    let hr=w/2000*p_b;
    let z_3=1+(w*0.000005*p_b);
    $('.parallax_mon_2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');
    //gora left
    let hr1=w/1500*p_b;
    let z_31=1+(w*0.00001*p_b);
    $('.parallax_mon_3').css('transform','translate3d('+hr1+'px,0,0) scale('+z_31+')');
   })
});