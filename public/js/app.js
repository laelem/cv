
$(function(){

    $('#btn_top').affix({
        offset: {
            top: function () {
                return (this.top = $('#header').outerHeight(true))
            },
            bottom: 0
        }
    });
    $('#btn_top').click(function(){
        $('html,body').animate({scrollTop:($('body').offset().top)-20},500,'swing');
    });

    $('.slideshow').each(function(){
        $(this).bjqs({
            'width':            407,
            'height':           298,
            'automatic':        false,
            'nexttext':         '<i class="fa fa-arrow-right"></i>',
            'prevtext':         '<i class="fa fa-arrow-left"></i>',
            'centercontrols':   false,
            'randomstart':      false
        });
    });
    $('.slideshow ol a').html('');

    $('#nav').affix({
        offset: {
            top: function () {
                return (this.top = $('#header').outerHeight(true))
            }
        }
    });
    $('#nav a').bind('click',function(){
        var speed = 500;
        var ancre = $(this).attr('href');
        $('html,body').animate({scrollTop:($(ancre).offset().top)-40},speed,'swing');
        return false;
    });

    $('.rubric > nav > ul > li:first-child').removeClass('link').addClass('active');
    $('.rubric > .contain > section:first-child').addClass('active');
    $('.rubric > nav').on('click', 'li.link', function(){
        var newItem = this;
        var rubric = '#'+$(this).parents('.rubric').attr('id');
        $(rubric+' > nav li.active').removeClass('active').addClass('link');
        $(newItem).removeClass('link').addClass('active');
        $(rubric+' section.active').fadeOut('fast', function(){
            $(this).removeClass('active');
            $('#'+$(newItem).attr('data-rub')).fadeIn('fast', function(){
                $(this).addClass('active');
                return false;
            });
        });
    });

    $('#rub-assignments > nav li:first-child').removeClass('link').addClass('active');
    $('#rub-assignments .mission:first-child').addClass('active');
    $('#rub-assignments > nav').on('click', '.link', function(){
        var newItem = this;
        var rubric = $('#rub-assignments');
        $(rubric).find('li.active').removeClass('active').addClass('link');
        $(newItem).addClass('active').removeClass('link');
        $(rubric).find('div.active').fadeOut('fast', function(){
            $(this).removeClass('active');
            $('#'+$(newItem).attr('data-rub')).fadeIn('fast', function(){
                $(this).addClass('active');
                return false;
            });
        });
    });

    $('#browsers > img').tooltip({
        placement: 'bottom'
    });

});