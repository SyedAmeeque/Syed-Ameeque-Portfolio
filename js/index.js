$(document).ready(function(){
    $('#loader').hide()


    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('nav').css({
                'backgroundColor':'#fff',
                'position':'fixed'
            })
            $('.navbar .nav-item .nav-link').css({
                'color':'#000'
            })
            $('.navbar-brand h3').css({
                'color':'#000'
            })
            $('.bars').css({
                'color':'#000'
            })
            $('.scroller').fadeIn(1000)
            $('.scroller').css({
                'display':'flex'
            })
        }else{
            $('nav').css({
                'backgroundColor':'#000',
            })
            $('.navbar .nav-item .nav-link').css({
                'color':'#fff'
            })
            $('.navbar-brand h3').css({
                'color':'#fff'
            })
            $('.bars').css({
                'color':'#fff'
            })

            $('.scroller').fadeOut(1000)
            
        }
    });

        $('.bars').click(function(){

            $('.navbar2').css({
                'left':'0%',
            })
        })
        $('.close').click(function(){
            $('.navbar2').css({
                'left':'-60%',
            })
        });

        $('.scroller').click(function () {
            $('html, body').animate({
              scrollTop: 0
            }, 1500);
          });


    });