$(function(){
    var leftMenu = $('.mainslide-nav');
    var leftMenuContent = $('.mainslide-content-box');

    leftMenu.menuAim({
        active:activate,
        deActive:deactivate,
        activeRow:leftMenu.find('li').eq(0),
        leaveMenuHide:false,
        ifAuto:true,
        wholeMenu:'.index-row-1-left'
    });
    function activate(row){
        $(row).addClass('cur');
        var menuId = $(row).attr('data-menu');
        //leftMenuContent.find('.mainslide-content').hide();
        var menu = leftMenuContent.find('#'+menuId).show().findLazyImg();
    }
    function deactivate(row){
        $(row).removeClass('cur');
        var menuId = $(row).attr('data-menu');
        var menu = leftMenuContent.find('#'+menuId).hide();
    }

    var sliderLogo = $('.j_CatBrandSlide').sliderTpl({btnUlClass:'dots', btnCurClass:'cur', moveTime:300, ifCenter:true, ifBtns:true, sliderContentBox:'div'});

    var sliderBanner = $('.mainslide-content').find('.banner_box').add($('.main-six-content').find('.banner_box')).sliderFade({MainGiftArrs: '.arr', MainGifts: '.image', MainGiftIndex: 0});

    var sliderHioProduct = $('.o-choice').find('.banner_box').sliderFade({MainGiftArrs: '.arr', MainGifts: '.list', MainGiftIndex: 0, arrNext: '.icon-arrow-right9', arrPrev: '.icon-arrow-left9'});


    var sliderSpecial = $('.special-banner-box').sliderFade({MainGiftArrs: '.arr', MainGifts: '.list', MainGiftIndex: 0, ifDots:true, dotsBox:'.dots'});

    var sliderSeeSide = $('.slider-see-side').sliderFade({MainGiftArrs: '.arr', MainGifts: '.list', MainGiftIndex: 0, arrNext:'.g-arr-next-small', arrPrev:'.g-arr-prev-small', ifPage:true});

    var sixMainTabs = $('.index-row-3').tabChange({tabs:'.main-six-tabs li', contents:'.main-six-content', ifArr:true, tabArr:'.tab-arr', aTabWidth:199});

    var sideSeeTabs = $('.index-row-2-right').tabChange({tabs:'.tab ul li', contents:'.tab-content'});

    var sliderBanner2 = $('.ocj-slide').sliderTpl({btnUlClass:'market-slide-nav',btnCurClass:'market-nav-selected',ifArr:true, ifBtns:false, arrClassCommon:'', silderContent:'.market-slide-pannel'});

    $( 'img:visible' ).imglazyload({
        event : 'scroll',
        fadeIn: true,
        attr : 'data-original'
    });

    $( 'img[data-original]' ).not('img:visible').one( 'lazyload', function(){
        $(this).imglazyload({attr : 'data-original'});
    });

    $('.hio-6').find('img.adaptive').imgAdaptive({parentWidth:200,parentHeight:200});

    $('.tv-content').find('img.adaptive').imgAdaptive();

    $('.index-row-3').find('img.adaptive').imgAdaptive();

    $('.index-row-5').find('img.adaptive').imgAdaptive({parentWidth:148,parentHeight:148});



});
