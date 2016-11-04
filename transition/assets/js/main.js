$(function(){
    //nav toggle
    function navToggle(btn){
        $(".nav-profile").css('display','none');
        $(".list-haeder").css('display','none');
        $(".nav-shortcut>ul").removeClass('open').addClass('close');
        $(".nav-menu i").stop().animate({'margin-right':'30px'},500);
        $("#nav").stop().animate({'width':52},600);
        $("#content").stop().animate({'padding-left':52},600);
        $(".haeder-logo").stop().animate({'width':52},600);
        $(".header-content").stop().animate({'margin-left':52},600);
    }
    $(".menu-tg-btn a").on("click", function(e){
        e.preventDefault();
        navToggle(this);
    });


    //side-nav dropdown
    $(".nav-menu .dropdown > a").on("click", function(e){
        e.preventDefault();
        $(this).next('.dropdown-menu').slideToggle();

        if($('.drop-arrow i').hasClass('fa-caret-down')==true){
             $(this).find('.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');
        }else{
             $(this).find('.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
        }
    });

    //header-nav dropdown
    $(".mene-links .dropdown > a").on("click", function(e){
        e.preventDefault();
        $(this).next('.dropdown-menu').slideToggle();
    });
    $(document).mouseup(function (e) {
        var container = $(".mene-links .dropdown-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.css("display","none");
        }
    });


    //make popover
    $('.nav-shortcut li').on('mouseover',function(){
        var poptit = $(this).attr('data-content');
        var popover=''; //define as string
        popover += '<div class="popover">';
        popover += '<span class="arrow"></span>';
        popover += '<div class="content">'+poptit+'</div>';
        popover += '</div>';
        $('.put-popover').empty();
        $(this).find('.put-popover').append(popover);
        var liwid = $(this).width();
        var popwid = $(this).find('.put-popover').width();
        var minusVal = (liwid-popwid)/2;
        $(this).find('.put-popover').css('margin-left',minusVal);
    });
    $('.nav-shortcut li a').on('mouseleave',function(){
        $('.put-popover').empty();
    });



});
