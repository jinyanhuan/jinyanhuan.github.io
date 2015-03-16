
$(function(){
    $( 'img:visible' ).imglazyload({
        event : 'scroll',
        fadeIn: true,
        attr : 'data-original'
    });

    $( 'img[data-original]' ).not('img:visible').one( 'lazyload', function(){
        $(this).imglazyload({attr : 'data-original'});
    });

    $('.g-header-tv-table').find('img.adaptive').imgAdaptive({parentWidth:60,parentHeight:60});

    $(".g-logo-slider").autoSliderH({time:2000,direct:false,ifArr:false});

    var gLogosBox = $('.g-header-logos-box');
    var gLogos = $('.g-header-logos');

    $( '.g-family' ).bind('click',function(){
        if($(this).find('b').hasClass('icon-arrow-down9')) {
            $(this).find('b').removeClass('icon-arrow-down9').addClass('icon-arrow-up8');
            gLogos.triggerLazyImg();
            gLogosBox.stop().animate({'height':'81px'});
            gLogos.stop().animate({'top':'0px'});
        }
        else {
            $(this).find('b').removeClass('icon-arrow-up8').addClass('icon-arrow-down9');
            gLogosBox.stop().animate({'height':'0'});
            gLogos.stop().animate({'top':'-81px'});
        }
    });

    var gHeaderMenu = $('.g-header-menu');
    var allCatalog = gHeaderMenu.find('.g-all-catalog');
    var allCatalogTab = gHeaderMenu.find('.g-all');
    gHeaderMenu.delegate('.g-all','click',function(e){
        if(allCatalogTab.hasClass('cur')){
            allCatalogTab.find('b').addClass('icon-arrow-down9').removeClass('icon-arrow-up8')
        }
        else {
            allCatalogTab.find('b').removeClass('icon-arrow-down9').addClass('icon-arrow-up8')
        }
        allCatalog.toggle();
        $(this).toggleClass('cur');
        return false
    });
    gHeaderMenu.delegate('.close-menu','click',function(e){
        allCatalog.toggle();
        allCatalogTab.toggleClass('cur');
        if(allCatalogTab.hasClass('cur')){
            allCatalogTab.find('b').removeClass('icon-arrow-down9').addClass('icon-arrow-up8')
        }
        else {
            allCatalogTab.find('b').addClass('icon-arrow-down9').removeClass('icon-arrow-up8')
        }
        return false
    });
    gHeaderMenu.delegate('.g-all-catalog','click',function(e){
        return false
    });
    $('body').bind('click',function(){
        allCatalog.hide();
        if(allCatalogTab.hasClass('cur')){
            allCatalogTab.removeClass('cur');
            allCatalogTab.find('b').removeClass('icon-arrow-up8').addClass('icon-arrow-down9')
        }
        else {
            return
        }
    });

    var gHotList = $('.g-hotlist');
    var gHotListUl = gHotList.find('ul');
    var gHotListIndex = 0;

    gHotList.bind('mouseenter',function(){
        clearInterval(gHotListAutoSlide);
        gHotListAutoSlide = null;
        $(this).find('.g-hotlist-content').css({'border':'1px solid #495164','height':'206px','boxShadow':'2px 2px 0 rgba(0,0,0,0.1)'});
        gHotListUl.stop().css({'top':'-1px',left:'-1px'})
    });

    gHotList.bind('mouseleave',function(){
        $(this).find('.g-hotlist-content').css({'border':'none','height':'22px','boxShadow':'none'});
        gHotListUl.css({'top':-gHotListIndex*20+'px',left:'0'});
        gHotListAutoSlide = setInterval(function(){
            gHotListIndex = gHotListIndex==9 ? 0 : ++gHotListIndex;
            gHotListAuto(gHotListIndex);
        },3000)
    });

    var gHotListAuto = function(i){
        if(i==0){
            gHotListUl.stop().css({'top':'20px'}).animate({'top':'0'},150);
        }
        gHotListUl.animate({'top':-i*20+'px'},150);
    };

    var gHotListAutoSlide = setInterval(function(){
        gHotListIndex = gHotListIndex==9 ? 0 : ++gHotListIndex;
        gHotListAuto(gHotListIndex);
    },3000);

    var settleupProducts = $('.g-settleup-content').find('.product-content').sliderFade({MainGiftArrs: '.arr', MainGifts: '.list', MainGiftIndex: 0, arrNext:'.g-arr-next-small', arrPrev:'.g-arr-prev-small', ifPage:true});

    var settleupProductsImgs = settleupProducts.find('img.adaptive').imgAdaptive({parentWidth:60,parentHeight:60});

    var gHeaderCart = $('.g-header-mycart').pullDown({ifDelay:true,ifArr:true});

    var gHeaderOcj = $('.g-myocj').pullDown({ifArr:true});

    var gLocationChange = $('.g-area');
    gLocationChange.find('.change').bind('click',function(){
        $(this).parents('dl').toggleClass('hover');
        return false
    });
    gLocationChange.find('li').find('span').bind('click',function(){
        gLocationChange.find('li').find('span').removeClass('cur');
        gLocationChange.find('.g-cur-area').html($(this).text());
        $(this).addClass('cur');
        $(this).parents('dl').toggleClass('hover');
        return false
    });

    $('body').bind('click',function(){
        gLocationChange.find('dl').removeClass('hover');
    });

    var gTimeNow = new Date();
    var gTimeNowDate = gTimeNow.getDate();
    var gTimeNowMouth = gTimeNow.getMonth()+1;
    var gTimeNowDay = gTimeNow.getDay();
    switch(gTimeNowDay){
        case 0:
            gTimeNowDay = '日';
            break;
        case 1:
            gTimeNowDay = '一';
            break;
        case 2:
            gTimeNowDay = '二';
            break;
        case 3:
            gTimeNowDay = '三';
            break;
        case 4:
            gTimeNowDay = '四';
            break;
        case 5:
            gTimeNowDay = '五';
            break;
        case 6:
            gTimeNowDay = '六';
            break;
        default:
            break;
    }
    var gOcjHeaderTime = $('.g-header-time');
    gOcjHeaderTime.find('.mouth').html(gTimeNowMouth);
    gOcjHeaderTime.find('.day').html(gTimeNowDate);
    gOcjHeaderTime.find('b').html('周'+gTimeNowDay);

    var gLiveBox = $('.g-live-box').sliderFade({MainGiftArrs: '.arr', MainGifts: '.list', MainGiftIndex: 0, arrNext:'.icon-arrow-right9', arrPrev:'.icon-arrow-left9', ifPage:false});

    var gGoTop = $('.g-go-top').bind('click',function(){
        $('body').scrollTop(0)
    });

    var footerSlide = $('.g-footer-fr-board').find('.notice_box').autoSliderV();

    var headerBanner = $('.g-header-banner').closeNode({closeWay:'up'});

    var sideBar = $('.g-side-bar').scrollFix({extra:10});

    var inputTexts = $(':text').defValue();
});
