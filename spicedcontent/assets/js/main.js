window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 210)
    // document.querySelector('.neutral').classList.toggle('hide', window.scrollY > 210)
    // document.querySelector('.logo1').classList.toggle('show', window.scrollY > 210)
    // console.log("wored");
});

$(document).ready(function(){
    $(window).scroll(function(){
        var wscroll = $(window).scrollTop();
        var headheight = $('header').height();
        
        if(wscroll>210)
            $('.neutral').attr('src', './assets/img/logo1.png');
        
        else
            $('.neutral').attr('src', './assets/img/logoneu.png')
        if(wscroll>210)
            $('.menu').css('filter', 'invert(0%)')  
        else
            $('.menu').css('filter', 'invert(100%)')   
        if(wscroll>210)
            $('main').css('margin-top', (headheight)+'px');  
        else
            $('main').css('margin-top', 0+'px'); 
            
        // for Scrolling to the top 
        if(wscroll>810)
            $('.top').css('opacity', 1); 
        else
            $('.top').css('opacity', 0);  
        // standard parallax
        $('.standard-parallax').css('top', 1+(wscroll*0.0101)+"rem");
        
        $('.standard-parallax1').css('top', 20+(wscroll*0.00101)+"rem");
        
        $('.standard-parallax2').css('top', 5+(wscroll*0.0100)+"rem");

        // backgroung parallax
        $('.para-bg').css('background-position', 'center '+(wscroll*0.125)+'px')
        $('.imgsp').css('background-position', 'center '+(wscroll*0.125)+'px')
        
    });
    // SmoothScrolling effect
    $('.top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    })
    // $(window).scroll(function(){
    //     parallax();
    // });
    // function parallax(){
    //     var 
    // }
    $('.menu').click(function(){
        $('.mainnav').toggleClass('reveal');
    })
    $('.close').click(function(){
        $('.mainnav').toggleClass('reveal');
    })


    $(document).ready(function() {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
          stagePadding: 0,
          margin: 0,
          nav: true,
          loop: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
        })
      })
})
