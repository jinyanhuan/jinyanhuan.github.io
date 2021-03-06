/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* 在不能使用css expressions的情况下使用这个js(用了这个js,就不需要再用那个ie7.css) */
/* The script tag referring to this file must be placed before the ending body tag. */
/* 必须放在尾部,dom元素加载完以后 */

/* Use conditional comments in order to target IE 7 and older:
   这个写的不对,另外,这种判断方式只有在真正的ie下才能够检测到,使用ie高版本切换文档模式和浏览器模式是没有效果的
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
   为了能够看到效果,不使用这种方式链入,而是使用js来判断是否是ie7
*/

if(window.ActiveXObject)
{
    var browser=navigator.appName;
    var b_version=navigator.appVersion;
    var version=b_version.split(";");
    var trim_Version=version[1].replace(/[ ]/g,"");
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
    {
        (function() {
            function addIcon(el, entity) {
                el.style.fontFamily = '\'icomoon\'';
                el.innerHTML = entity;
            }
            var icons = {
                'icon-home': '&#xe60d;',
                'icon-home2': '&#xe600;',
                'icon-home3': '&#xe60e;',
                'icon-office': '&#xe60f;',
                'icon-newspaper': '&#xe610;',
                'icon-pencil': '&#xe611;',
                'icon-pencil2': '&#xe612;',
                'icon-quill': '&#xe613;',
                'icon-pen': '&#xe614;',
                'icon-blog': '&#xe615;',
                'icon-droplet': '&#xe616;',
                'icon-paint-format': '&#xe617;',
                'icon-image': '&#xe618;',
                'icon-image2': '&#xe619;',
                'icon-images': '&#xe61a;',
                'icon-camera': '&#xe603;',
                'icon-music': '&#xe61b;',
                'icon-headphones': '&#xe602;',
                'icon-play': '&#xe61c;',
                'icon-film': '&#xe601;',
                'icon-camera2': '&#xe61d;',
                'icon-dice': '&#xe61e;',
                'icon-pacman': '&#xe61f;',
                'icon-spades': '&#xe620;',
                'icon-clubs': '&#xe621;',
                'icon-diamonds': '&#xe622;',
                'icon-pawn': '&#xe623;',
                'icon-bullhorn': '&#xe624;',
                'icon-connection': '&#xe625;',
                'icon-podcast': '&#xe626;',
                'icon-feed': '&#xe627;',
                'icon-book': '&#xe628;',
                'icon-books': '&#xe629;',
                'icon-library': '&#xe62a;',
                'icon-file': '&#xe62b;',
                'icon-profile': '&#xe62c;',
                'icon-file2': '&#xe62d;',
                'icon-file3': '&#xe62e;',
                'icon-file4': '&#xe62f;',
                'icon-copy': '&#xe630;',
                'icon-copy2': '&#xe631;',
                'icon-copy3': '&#xe632;',
                'icon-paste': '&#xe633;',
                'icon-paste2': '&#xe634;',
                'icon-paste3': '&#xe635;',
                'icon-stack': '&#xe636;',
                'icon-folder': '&#xe637;',
                'icon-folder-open': '&#xe638;',
                'icon-tag': '&#xe639;',
                'icon-tags': '&#xe604;',
                'icon-barcode': '&#xe63a;',
                'icon-qrcode': '&#xe63b;',
                'icon-ticket': '&#xe63c;',
                'icon-cart': '&#xe63d;',
                'icon-cart2': '&#xe63e;',
                'icon-cart3': '&#xe63f;',
                'icon-coin': '&#xe640;',
                'icon-credit': '&#xe641;',
                'icon-calculate': '&#xe642;',
                'icon-support': '&#xe643;',
                'icon-phone': '&#xe644;',
                'icon-phone-hang-up': '&#xe645;',
                'icon-address-book': '&#xe646;',
                'icon-notebook': '&#xe607;',
                'icon-envelop': '&#xe647;',
                'icon-pushpin': '&#xe648;',
                'icon-location': '&#xe649;',
                'icon-location2': '&#xe64a;',
                'icon-compass': '&#xe64b;',
                'icon-map': '&#xe64c;',
                'icon-map2': '&#xe64d;',
                'icon-history': '&#xe64e;',
                'icon-clock': '&#xe64f;',
                'icon-clock2': '&#xe650;',
                'icon-alarm': '&#xe651;',
                'icon-alarm2': '&#xe652;',
                'icon-bell': '&#xe653;',
                'icon-stopwatch': '&#xe654;',
                'icon-calendar': '&#xe655;',
                'icon-calendar2': '&#xe656;',
                'icon-print': '&#xe657;',
                'icon-keyboard': '&#xe658;',
                'icon-screen': '&#xe608;',
                'icon-laptop': '&#xe659;',
                'icon-mobile': '&#xe65a;',
                'icon-mobile2': '&#xe65b;',
                'icon-tablet': '&#xe65c;',
                'icon-tv': '&#xe65d;',
                'icon-cabinet': '&#xe65e;',
                'icon-drawer': '&#xe65f;',
                'icon-drawer2': '&#xe660;',
                'icon-drawer3': '&#xe661;',
                'icon-box-add': '&#xe662;',
                'icon-box-remove': '&#xe663;',
                'icon-download': '&#xe664;',
                'icon-upload': '&#xe665;',
                'icon-disk': '&#xe666;',
                'icon-storage': '&#xe667;',
                'icon-undo': '&#xe668;',
                'icon-redo': '&#xe669;',
                'icon-flip': '&#xe66a;',
                'icon-flip2': '&#xe66b;',
                'icon-undo2': '&#xe66c;',
                'icon-redo2': '&#xe66d;',
                'icon-forward': '&#xe66e;',
                'icon-reply': '&#xe66f;',
                'icon-bubble': '&#xe670;',
                'icon-bubbles': '&#xe671;',
                'icon-bubbles2': '&#xe672;',
                'icon-bubble2': '&#xe673;',
                'icon-bubbles3': '&#xe674;',
                'icon-bubbles4': '&#xe605;',
                'icon-user': '&#xe675;',
                'icon-users': '&#xe676;',
                'icon-user2': '&#xe677;',
                'icon-users2': '&#xe606;',
                'icon-user3': '&#xe678;',
                'icon-user4': '&#xe679;',
                'icon-quotes-left': '&#xe67a;',
                'icon-busy': '&#xe67b;',
                'icon-spinner': '&#xe67c;',
                'icon-spinner2': '&#xe67d;',
                'icon-spinner3': '&#xe67e;',
                'icon-spinner4': '&#xe67f;',
                'icon-spinner5': '&#xe680;',
                'icon-spinner6': '&#xe681;',
                'icon-binoculars': '&#xe682;',
                'icon-search': '&#xe683;',
                'icon-zoomin': '&#xe684;',
                'icon-zoomout': '&#xe685;',
                'icon-expand': '&#xe686;',
                'icon-contract': '&#xe687;',
                'icon-expand2': '&#xe688;',
                'icon-contract2': '&#xe689;',
                'icon-key': '&#xe68a;',
                'icon-key2': '&#xe68b;',
                'icon-lock': '&#xe68c;',
                'icon-lock2': '&#xe68d;',
                'icon-unlocked': '&#xe68e;',
                'icon-wrench': '&#xe68f;',
                'icon-settings': '&#xe690;',
                'icon-equalizer': '&#xe691;',
                'icon-cog': '&#xe692;',
                'icon-cogs': '&#xe693;',
                'icon-cog2': '&#xe609;',
                'icon-hammer': '&#xe694;',
                'icon-wand': '&#xe695;',
                'icon-aid': '&#xe696;',
                'icon-bug': '&#xe697;',
                'icon-pie': '&#xe698;',
                'icon-stats': '&#xe699;',
                'icon-bars': '&#xe69a;',
                'icon-bars2': '&#xe69b;',
                'icon-gift': '&#xe69c;',
                'icon-trophy': '&#xe69d;',
                'icon-glass': '&#xe69e;',
                'icon-mug': '&#xe69f;',
                'icon-food': '&#xe6a0;',
                'icon-leaf': '&#xe6a1;',
                'icon-rocket': '&#xe6a2;',
                'icon-meter': '&#xe6a3;',
                'icon-meter2': '&#xe6a4;',
                'icon-dashboard': '&#xe6a5;',
                'icon-hammer2': '&#xe6a6;',
                'icon-fire': '&#xe6a7;',
                'icon-lab': '&#xe6a8;',
                'icon-magnet': '&#xe6a9;',
                'icon-remove': '&#xe6aa;',
                'icon-remove2': '&#xe6ab;',
                'icon-briefcase': '&#xe6ac;',
                'icon-airplane': '&#xe6ad;',
                'icon-truck': '&#xe6ae;',
                'icon-road': '&#xe6af;',
                'icon-accessibility': '&#xe6b0;',
                'icon-target': '&#xe6b1;',
                'icon-shield': '&#xe6b2;',
                'icon-lightning': '&#xe6b3;',
                'icon-switch': '&#xe6b4;',
                'icon-powercord': '&#xe6b5;',
                'icon-signup': '&#xe6b6;',
                'icon-list': '&#xe6b7;',
                'icon-list2': '&#xe6b8;',
                'icon-numbered-list': '&#xe6b9;',
                'icon-menu': '&#xe6ba;',
                'icon-menu2': '&#xe6bb;',
                'icon-tree': '&#xe6bc;',
                'icon-cloud': '&#xe6bd;',
                'icon-cloud-download': '&#xe6be;',
                'icon-cloud-upload': '&#xe6bf;',
                'icon-download2': '&#xe6c0;',
                'icon-upload2': '&#xe6c1;',
                'icon-download3': '&#xe6c2;',
                'icon-upload3': '&#xe6c3;',
                'icon-globe': '&#xe6c4;',
                'icon-earth': '&#xe6c5;',
                'icon-link': '&#xe6c6;',
                'icon-flag': '&#xe6c7;',
                'icon-attachment': '&#xe6c8;',
                'icon-eye': '&#xe6c9;',
                'icon-eye-blocked': '&#xe6ca;',
                'icon-eye2': '&#xe6cb;',
                'icon-bookmark': '&#xe6cc;',
                'icon-bookmarks': '&#xe6cd;',
                'icon-brightness-medium': '&#xe60a;',
                'icon-brightness-contrast': '&#xe6ce;',
                'icon-contrast': '&#xe6cf;',
                'icon-star': '&#xe6d0;',
                'icon-star2': '&#xe6d1;',
                'icon-star3': '&#xe6d2;',
                'icon-heart': '&#xe60c;',
                'icon-heart2': '&#xe6d3;',
                'icon-heart-broken': '&#xe6d4;',
                'icon-thumbs-up': '&#xe6d5;',
                'icon-thumbs-up2': '&#xe6d6;',
                'icon-happy': '&#xe6d7;',
                'icon-happy2': '&#xe6d8;',
                'icon-smiley': '&#xe6d9;',
                'icon-smiley2': '&#xe6da;',
                'icon-tongue': '&#xe6db;',
                'icon-tongue2': '&#xe6dc;',
                'icon-sad': '&#xe6dd;',
                'icon-sad2': '&#xe6de;',
                'icon-wink': '&#xe6df;',
                'icon-wink2': '&#xe6e0;',
                'icon-grin': '&#xe6e1;',
                'icon-grin2': '&#xe6e2;',
                'icon-cool': '&#xe6e3;',
                'icon-cool2': '&#xe6e4;',
                'icon-angry': '&#xe6e5;',
                'icon-angry2': '&#xe6e6;',
                'icon-evil': '&#xe6e7;',
                'icon-evil2': '&#xe6e8;',
                'icon-shocked': '&#xe6e9;',
                'icon-shocked2': '&#xe6ea;',
                'icon-confused': '&#xe6eb;',
                'icon-confused2': '&#xe6ec;',
                'icon-neutral': '&#xe6ed;',
                'icon-neutral2': '&#xe6ee;',
                'icon-wondering': '&#xe6ef;',
                'icon-wondering2': '&#xe6f0;',
                'icon-point-up': '&#xe6f1;',
                'icon-point-right': '&#xe6f2;',
                'icon-point-down': '&#xe6f3;',
                'icon-point-left': '&#xe6f4;',
                'icon-warning': '&#xe6f5;',
                'icon-notification': '&#xe6f6;',
                'icon-question': '&#xe6f7;',
                'icon-info': '&#xe6f8;',
                'icon-info2': '&#xe6f9;',
                'icon-blocked': '&#xe6fa;',
                'icon-cancel-circle': '&#xe6fb;',
                'icon-checkmark-circle': '&#xe6fc;',
                'icon-spam': '&#xe6fd;',
                'icon-close': '&#xe6fe;',
                'icon-checkmark': '&#xe6ff;',
                'icon-checkmark2': '&#xe700;',
                'icon-spell-check': '&#xe701;',
                'icon-minus': '&#xe702;',
                'icon-plus': '&#xe703;',
                'icon-enter': '&#xe704;',
                'icon-exit': '&#xe705;',
                'icon-play2': '&#xe706;',
                'icon-pause': '&#xe707;',
                'icon-stop': '&#xe708;',
                'icon-backward': '&#xe709;',
                'icon-forward2': '&#xe70a;',
                'icon-play3': '&#xe70b;',
                'icon-pause2': '&#xe70c;',
                'icon-stop2': '&#xe70d;',
                'icon-backward2': '&#xe70e;',
                'icon-forward3': '&#xe70f;',
                'icon-first': '&#xe710;',
                'icon-last': '&#xe711;',
                'icon-previous': '&#xe712;',
                'icon-next': '&#xe713;',
                'icon-eject': '&#xe714;',
                'icon-volume-high': '&#xe715;',
                'icon-volume-medium': '&#xe716;',
                'icon-volume-low': '&#xe717;',
                'icon-volume-mute': '&#xe718;',
                'icon-volume-mute2': '&#xe719;',
                'icon-volume-increase': '&#xe71a;',
                'icon-volume-decrease': '&#xe71b;',
                'icon-loop': '&#xe71c;',
                'icon-loop2': '&#xe71d;',
                'icon-loop3': '&#xe71e;',
                'icon-shuffle': '&#xe71f;',
                'icon-arrow-up-left': '&#xe720;',
                'icon-arrow-up': '&#xe721;',
                'icon-arrow-up-right': '&#xe722;',
                'icon-arrow-right': '&#xe723;',
                'icon-arrow-down-right': '&#xe724;',
                'icon-arrow-down': '&#xe725;',
                'icon-arrow-down-left': '&#xe726;',
                'icon-arrow-left': '&#xe727;',
                'icon-arrow-up-left2': '&#xe728;',
                'icon-arrow-up2': '&#xe729;',
                'icon-arrow-up-right2': '&#xe72a;',
                'icon-arrow-right2': '&#xe72b;',
                'icon-arrow-down-right2': '&#xe72c;',
                'icon-arrow-down2': '&#xe72d;',
                'icon-arrow-down-left2': '&#xe72e;',
                'icon-arrow-left2': '&#xe72f;',
                'icon-arrow-up-left3': '&#xe730;',
                'icon-arrow-up3': '&#xe731;',
                'icon-arrow-up-right3': '&#xe732;',
                'icon-arrow-right3': '&#xe733;',
                'icon-arrow-down-right3': '&#xe734;',
                'icon-arrow-down3': '&#xe735;',
                'icon-arrow-down-left3': '&#xe736;',
                'icon-arrow-left3': '&#xe737;',
                'icon-tab': '&#xe738;',
                'icon-checkbox-checked': '&#xe739;',
                'icon-checkbox-unchecked': '&#xe73a;',
                'icon-checkbox-partial': '&#xe73b;',
                'icon-radio-checked': '&#xe73c;',
                'icon-radio-unchecked': '&#xe73d;',
                'icon-crop': '&#xe73e;',
                'icon-scissors': '&#xe73f;',
                'icon-filter': '&#xe740;',
                'icon-filter2': '&#xe741;',
                'icon-font': '&#xe742;',
                'icon-text-height': '&#xe743;',
                'icon-text-width': '&#xe744;',
                'icon-bold': '&#xe745;',
                'icon-underline': '&#xe746;',
                'icon-italic': '&#xe747;',
                'icon-strikethrough': '&#xe748;',
                'icon-omega': '&#xe749;',
                'icon-sigma': '&#xe74a;',
                'icon-table': '&#xe74b;',
                'icon-table2': '&#xe74c;',
                'icon-insert-template': '&#xe74d;',
                'icon-pilcrow': '&#xe74e;',
                'icon-lefttoright': '&#xe74f;',
                'icon-righttoleft': '&#xe750;',
                'icon-paragraph-left': '&#xe751;',
                'icon-paragraph-center': '&#xe752;',
                'icon-paragraph-right': '&#xe753;',
                'icon-paragraph-justify': '&#xe754;',
                'icon-paragraph-left2': '&#xe755;',
                'icon-paragraph-center2': '&#xe756;',
                'icon-paragraph-right2': '&#xe757;',
                'icon-paragraph-justify2': '&#xe758;',
                'icon-indent-increase': '&#xe759;',
                'icon-indent-decrease': '&#xe75a;',
                'icon-newtab': '&#xe75b;',
                'icon-embed': '&#xe75c;',
                'icon-code': '&#xe75d;',
                'icon-console': '&#xe75e;',
                'icon-share': '&#xe75f;',
                'icon-mail': '&#xe760;',
                'icon-mail2': '&#xe761;',
                'icon-mail3': '&#xe762;',
                'icon-mail4': '&#xe763;',
                'icon-google': '&#xe764;',
                'icon-googleplus': '&#xe765;',
                'icon-googleplus2': '&#xe766;',
                'icon-googleplus3': '&#xe767;',
                'icon-googleplus4': '&#xe768;',
                'icon-google-drive': '&#xe769;',
                'icon-facebook': '&#xe76a;',
                'icon-facebook2': '&#xe76b;',
                'icon-facebook3': '&#xe76c;',
                'icon-instagram': '&#xe76d;',
                'icon-twitter': '&#xe76e;',
                'icon-twitter2': '&#xe76f;',
                'icon-twitter3': '&#xe770;',
                'icon-feed2': '&#xe771;',
                'icon-feed3': '&#xe772;',
                'icon-feed4': '&#xe773;',
                'icon-youtube': '&#xe774;',
                'icon-youtube2': '&#xe775;',
                'icon-vimeo': '&#xe776;',
                'icon-vimeo2': '&#xe777;',
                'icon-vimeo3': '&#xe778;',
                'icon-lanyrd': '&#xe779;',
                'icon-flickr': '&#xe77a;',
                'icon-flickr2': '&#xe77b;',
                'icon-flickr3': '&#xe77c;',
                'icon-flickr4': '&#xe77d;',
                'icon-picassa': '&#xe77e;',
                'icon-picassa2': '&#xe77f;',
                'icon-dribbble': '&#xe780;',
                'icon-dribbble2': '&#xe781;',
                'icon-dribbble3': '&#xe782;',
                'icon-forrst': '&#xe783;',
                'icon-forrst2': '&#xe784;',
                'icon-deviantart': '&#xe785;',
                'icon-deviantart2': '&#xe786;',
                'icon-steam': '&#xe787;',
                'icon-steam2': '&#xe788;',
                'icon-github': '&#xe789;',
                'icon-github2': '&#xe78a;',
                'icon-github3': '&#xe78b;',
                'icon-github4': '&#xe78c;',
                'icon-github5': '&#xe78d;',
                'icon-wordpress': '&#xe78e;',
                'icon-wordpress2': '&#xe78f;',
                'icon-joomla': '&#xe790;',
                'icon-blogger': '&#xe791;',
                'icon-blogger2': '&#xe792;',
                'icon-tumblr': '&#xe793;',
                'icon-tumblr2': '&#xe794;',
                'icon-yahoo': '&#xe795;',
                'icon-tux': '&#xe796;',
                'icon-apple': '&#xe797;',
                'icon-finder': '&#xe798;',
                'icon-android': '&#xe799;',
                'icon-windows': '&#xe79a;',
                'icon-windows8': '&#xe79b;',
                'icon-soundcloud': '&#xe79c;',
                'icon-soundcloud2': '&#xe79d;',
                'icon-skype': '&#xe79e;',
                'icon-reddit': '&#xe79f;',
                'icon-linkedin': '&#xe7a0;',
                'icon-lastfm': '&#xe7a1;',
                'icon-lastfm2': '&#xe7a2;',
                'icon-delicious': '&#xe7a3;',
                'icon-stumbleupon': '&#xe7a4;',
                'icon-stumbleupon2': '&#xe7a5;',
                'icon-stackoverflow': '&#xe7a6;',
                'icon-pinterest': '&#xe7a7;',
                'icon-pinterest2': '&#xe7a8;',
                'icon-xing': '&#xe7a9;',
                'icon-xing2': '&#xe7aa;',
                'icon-flattr': '&#xe7ab;',
                'icon-foursquare': '&#xe7ac;',
                'icon-foursquare2': '&#xe7ad;',
                'icon-paypal': '&#xe7ae;',
                'icon-paypal2': '&#xe7af;',
                'icon-paypal3': '&#xe7b0;',
                'icon-yelp': '&#xe7b1;',
                'icon-libreoffice': '&#xe7b2;',
                'icon-file-pdf': '&#xe7b3;',
                'icon-file-openoffice': '&#xe7b4;',
                'icon-file-word': '&#xe7b5;',
                'icon-file-excel': '&#xe7b6;',
                'icon-file-zip': '&#xe7b7;',
                'icon-file-powerpoint': '&#xe7b8;',
                'icon-file-xml': '&#xe7b9;',
                'icon-file-css': '&#xe7ba;',
                'icon-html5': '&#xe60b;',
                'icon-html52': '&#xe7bb;',
                'icon-css3': '&#xe7bc;',
                'icon-chrome': '&#xe7bd;',
                'icon-firefox': '&#xe7be;',
                'icon-IE': '&#xe7bf;',
                'icon-opera': '&#xe7c0;',
                'icon-safari': '&#xe7c1;',
                'icon-IcoMoon': '&#xe7c2;',
                'icon-store': '&#xe7c3;',
                'icon-out': '&#xe7c4;',
                'icon-in': '&#xe7c5;',
                'icon-in-alt': '&#xe7c6;',
                'icon-home4': '&#xe7c7;',
                'icon-lightbulb': '&#xe7c8;',
                'icon-anchor': '&#xe7c9;',
                'icon-feather': '&#xe7ca;',
                'icon-expand3': '&#xe7cb;',
                'icon-maximize': '&#xe7cc;',
                'icon-search2': '&#xe7cd;',
                'icon-zoomin2': '&#xe7ce;',
                'icon-zoomout2': '&#xe7cf;',
                'icon-add': '&#xe7d0;',
                'icon-subtract': '&#xe7d1;',
                'icon-exclamation': '&#xe7d2;',
                'icon-question2': '&#xe7d3;',
                'icon-close2': '&#xe7d4;',
                'icon-cmd': '&#xe7d5;',
                'icon-forbid': '&#xe7d6;',
                'icon-book2': '&#xe7d7;',
                'icon-spinner7': '&#xe7d8;',
                'icon-play4': '&#xe7d9;',
                'icon-stop3': '&#xe7da;',
                'icon-pause3': '&#xe7db;',
                'icon-forward4': '&#xe7dc;',
                'icon-rewind': '&#xe7dd;',
                'icon-sound': '&#xe7de;',
                'icon-sound-alt': '&#xe7df;',
                'icon-soundoff': '&#xe7e0;',
                'icon-task': '&#xe7e1;',
                'icon-inbox': '&#xe7e2;',
                'icon-inbox-alt': '&#xe7e3;',
                'icon-envelope': '&#xe7e4;',
                'icon-compose': '&#xe7e5;',
                'icon-newspaper2': '&#xe7e6;',
                'icon-newspaper-alt': '&#xe7e7;',
                'icon-clipboard': '&#xe7e8;',
                'icon-calendar3': '&#xe7e9;',
                'icon-hyperlink': '&#xe7ea;',
                'icon-trash': '&#xe7eb;',
                'icon-trash-alt': '&#xe7ec;',
                'icon-grid': '&#xe7ed;',
                'icon-grid-alt': '&#xe7ee;',
                'icon-menu3': '&#xe7ef;',
                'icon-list3': '&#xe7f0;',
                'icon-gallery': '&#xe7f1;',
                'icon-calculator': '&#xe7f2;',
                'icon-windows2': '&#xe7f3;',
                'icon-browser': '&#xe7f4;',
                'icon-alarm3': '&#xe7f5;',
                'icon-clock3': '&#xe7f6;',
                'icon-attachment2': '&#xe7f7;',
                'icon-settings2': '&#xe7f8;',
                'icon-portfolio': '&#xe7f9;',
                'icon-user5': '&#xe7fa;',
                'icon-users3': '&#xe7fb;',
                'icon-heart3': '&#xe7fc;',
                'icon-chat': '&#xe7fd;',
                'icon-comments': '&#xe7fe;',
                'icon-screen2': '&#xe7ff;',
                'icon-iphone': '&#xe800;',
                'icon-ipad': '&#xe801;',
                'icon-forkandspoon': '&#xe802;',
                'icon-forkandknife': '&#xe803;',
                'icon-instagram2': '&#xe804;',
                'icon-facebook4': '&#xe805;',
                'icon-delicious2': '&#xe806;',
                'icon-googleplus5': '&#xe807;',
                'icon-dribbble4': '&#xe808;',
                'icon-pin': '&#xe809;',
                'icon-pin-alt': '&#xe80a;',
                'icon-camera3': '&#xe80b;',
                'icon-brightness': '&#xe80c;',
                'icon-brightness-half': '&#xe80d;',
                'icon-moon': '&#xe80e;',
                'icon-cloud2': '&#xe80f;',
                'icon-circle-full': '&#xe810;',
                'icon-circle-half': '&#xe811;',
                'icon-globe2': '&#xe812;',
                'icon-heart4': '&#xe813;',
                'icon-cloud3': '&#xe814;',
                'icon-star4': '&#xe815;',
                'icon-tv2': '&#xe816;',
                'icon-sound2': '&#xe817;',
                'icon-video': '&#xe818;',
                'icon-trash2': '&#xe819;',
                'icon-user6': '&#xe81a;',
                'icon-key3': '&#xe81b;',
                'icon-search3': '&#xe81c;',
                'icon-settings3': '&#xe81d;',
                'icon-camera4': '&#xe81e;',
                'icon-tag2': '&#xe81f;',
                'icon-lock3': '&#xe820;',
                'icon-bulb': '&#xe821;',
                'icon-pen2': '&#xe822;',
                'icon-diamond': '&#xe823;',
                'icon-display': '&#xe824;',
                'icon-location3': '&#xe825;',
                'icon-eye3': '&#xe826;',
                'icon-bubble3': '&#xe827;',
                'icon-stack2': '&#xe828;',
                'icon-cup': '&#xe829;',
                'icon-phone2': '&#xe82a;',
                'icon-news': '&#xe82b;',
                'icon-mail5': '&#xe82c;',
                'icon-like': '&#xe82d;',
                'icon-photo': '&#xe82e;',
                'icon-note': '&#xe82f;',
                'icon-clock4': '&#xe830;',
                'icon-paperplane': '&#xe831;',
                'icon-params': '&#xe832;',
                'icon-banknote': '&#xe833;',
                'icon-data': '&#xe834;',
                'icon-music2': '&#xe835;',
                'icon-megaphone': '&#xe836;',
                'icon-study': '&#xe837;',
                'icon-lab2': '&#xe838;',
                'icon-food2': '&#xe839;',
                'icon-t-shirt': '&#xe83a;',
                'icon-fire2': '&#xe83b;',
                'icon-clip': '&#xe83c;',
                'icon-shop': '&#xe83d;',
                'icon-calendar4': '&#xe83e;',
                'icon-wallet': '&#xe83f;',
                'icon-vynil': '&#xe840;',
                'icon-truck2': '&#xe841;',
                'icon-world': '&#xe842;',
                'icon-phone3': '&#xe843;',
                'icon-mobile3': '&#xe844;',
                'icon-mouse': '&#xe845;',
                'icon-directions': '&#xe846;',
                'icon-mail6': '&#xe847;',
                'icon-paperplane2': '&#xe848;',
                'icon-pencil3': '&#xe849;',
                'icon-feather2': '&#xe84a;',
                'icon-paperclip': '&#xe84b;',
                'icon-drawer4': '&#xe84c;',
                'icon-reply2': '&#xe84d;',
                'icon-reply-all': '&#xe84e;',
                'icon-forward5': '&#xe84f;',
                'icon-user7': '&#xe850;',
                'icon-users4': '&#xe851;',
                'icon-user-add': '&#xe852;',
                'icon-vcard': '&#xe853;',
                'icon-export': '&#xe854;',
                'icon-location4': '&#xe855;',
                'icon-map3': '&#xe856;',
                'icon-compass2': '&#xe857;',
                'icon-location5': '&#xe858;',
                'icon-target2': '&#xe859;',
                'icon-share2': '&#xe85a;',
                'icon-sharable': '&#xe85b;',
                'icon-heart5': '&#xe85c;',
                'icon-heart6': '&#xe85d;',
                'icon-star5': '&#xe85e;',
                'icon-star6': '&#xe85f;',
                'icon-thumbsup': '&#xe860;',
                'icon-thumbsdown': '&#xe861;',
                'icon-chat2': '&#xe862;',
                'icon-comment': '&#xe863;',
                'icon-quote': '&#xe864;',
                'icon-house': '&#xe865;',
                'icon-popup': '&#xe866;',
                'icon-search4': '&#xe867;',
                'icon-flashlight': '&#xe868;',
                'icon-printer': '&#xe869;',
                'icon-bell2': '&#xe86a;',
                'icon-link2': '&#xe86b;',
                'icon-flag2': '&#xe86c;',
                'icon-cog3': '&#xe86d;',
                'icon-tools': '&#xe86e;',
                'icon-trophy2': '&#xe86f;',
                'icon-tag3': '&#xe870;',
                'icon-camera5': '&#xe871;',
                'icon-megaphone2': '&#xe872;',
                'icon-moon2': '&#xe873;',
                'icon-palette': '&#xe874;',
                'icon-leaf2': '&#xe875;',
                'icon-music3': '&#xe876;',
                'icon-music4': '&#xe877;',
                'icon-new': '&#xe878;',
                'icon-graduation': '&#xe879;',
                'icon-book3': '&#xe87a;',
                'icon-newspaper3': '&#xe87b;',
                'icon-bag': '&#xe87c;',
                'icon-airplane2': '&#xe87d;',
                'icon-lifebuoy': '&#xe87e;',
                'icon-eye4': '&#xe87f;',
                'icon-clock5': '&#xe880;',
                'icon-microphone': '&#xe881;',
                'icon-calendar5': '&#xe882;',
                'icon-bolt': '&#xe883;',
                'icon-thunder': '&#xe884;',
                'icon-droplet2': '&#xe885;',
                'icon-cd': '&#xe886;',
                'icon-briefcase2': '&#xe887;',
                'icon-air': '&#xe888;',
                'icon-hourglass': '&#xe889;',
                'icon-gauge': '&#xe88a;',
                'icon-language': '&#xe88b;',
                'icon-network': '&#xe88c;',
                'icon-key4': '&#xe88d;',
                'icon-battery': '&#xe88e;',
                'icon-bucket': '&#xe88f;',
                'icon-magnet2': '&#xe890;',
                'icon-drive': '&#xe891;',
                'icon-cup2': '&#xe892;',
                'icon-rocket2': '&#xe893;',
                'icon-brush': '&#xe894;',
                'icon-suitcase': '&#xe895;',
                'icon-cone': '&#xe896;',
                'icon-earth2': '&#xe897;',
                'icon-keyboard2': '&#xe898;',
                'icon-browser2': '&#xe899;',
                'icon-publish': '&#xe89a;',
                'icon-progress-3': '&#xe89b;',
                'icon-progress-2': '&#xe89c;',
                'icon-brogress-1': '&#xe89d;',
                'icon-progress-0': '&#xe89e;',
                'icon-sun': '&#xe89f;',
                'icon-sun2': '&#xe8a0;',
                'icon-adjust': '&#xe8a1;',
                'icon-code2': '&#xe8a2;',
                'icon-screen3': '&#xe8a3;',
                'icon-infinity': '&#xe8a4;',
                'icon-light-bulb': '&#xe8a5;',
                'icon-creditcard': '&#xe8a6;',
                'icon-database': '&#xe8a7;',
                'icon-voicemail': '&#xe8a8;',
                'icon-clipboard2': '&#xe8a9;',
                'icon-cart4': '&#xe8aa;',
                'icon-box': '&#xe8ab;',
                'icon-ticket2': '&#xe8ac;',
                'icon-rss': '&#xe8ad;',
                'icon-signal': '&#xe8ae;',
                'icon-thermometer': '&#xe8af;',
                'icon-droplets': '&#xe8b0;',
                'icon-uniE8B1': '&#xe8b1;',
                'icon-statistics': '&#xe8b2;',
                'icon-pie2': '&#xe8b3;',
                'icon-bars3': '&#xe8b4;',
                'icon-graph': '&#xe8b5;',
                'icon-lock4': '&#xe8b6;',
                'icon-lock-open': '&#xe8b7;',
                'icon-logout': '&#xe8b8;',
                'icon-login': '&#xe8b9;',
                'icon-checkmark3': '&#xe8ba;',
                'icon-cross': '&#xe8bb;',
                'icon-minus2': '&#xe8bc;',
                'icon-plus2': '&#xe8bd;',
                'icon-cross2': '&#xe8be;',
                'icon-minus3': '&#xe8bf;',
                'icon-plus3': '&#xe8c0;',
                'icon-cross3': '&#xe8c1;',
                'icon-minus4': '&#xe8c2;',
                'icon-plus4': '&#xe8c3;',
                'icon-erase': '&#xe8c4;',
                'icon-blocked2': '&#xe8c5;',
                'icon-info3': '&#xe8c6;',
                'icon-info4': '&#xe8c7;',
                'icon-question3': '&#xe8c8;',
                'icon-help': '&#xe8c9;',
                'icon-warning2': '&#xe8ca;',
                'icon-cycle': '&#xe8cb;',
                'icon-cw': '&#xe8cc;',
                'icon-ccw': '&#xe8cd;',
                'icon-shuffle2': '&#xe8ce;',
                'icon-arrow': '&#xe8cf;',
                'icon-arrow2': '&#xe8d0;',
                'icon-retweet': '&#xe8d1;',
                'icon-loop4': '&#xe8d2;',
                'icon-history2': '&#xe8d3;',
                'icon-back': '&#xe8d4;',
                'icon-switch2': '&#xe8d5;',
                'icon-list4': '&#xe8d6;',
                'icon-add-to-list': '&#xe8d7;',
                'icon-layout': '&#xe8d8;',
                'icon-list5': '&#xe8d9;',
                'icon-text': '&#xe8da;',
                'icon-text2': '&#xe8db;',
                'icon-document': '&#xe8dc;',
                'icon-docs': '&#xe8dd;',
                'icon-landscape': '&#xe8de;',
                'icon-pictures': '&#xe8df;',
                'icon-video2': '&#xe8e0;',
                'icon-music5': '&#xe8e1;',
                'icon-folder2': '&#xe8e2;',
                'icon-archive': '&#xe8e3;',
                'icon-trash3': '&#xe8e4;',
                'icon-upload4': '&#xe8e5;',
                'icon-download4': '&#xe8e6;',
                'icon-disk2': '&#xe8e7;',
                'icon-install': '&#xe8e8;',
                'icon-cloud4': '&#xe8e9;',
                'icon-upload5': '&#xe8ea;',
                'icon-bookmark2': '&#xe8eb;',
                'icon-bookmarks2': '&#xe8ec;',
                'icon-book4': '&#xe8ed;',
                'icon-play5': '&#xe8ee;',
                'icon-pause4': '&#xe8ef;',
                'icon-record': '&#xe8f0;',
                'icon-stop4': '&#xe8f1;',
                'icon-next2': '&#xe8f2;',
                'icon-previous2': '&#xe8f3;',
                'icon-first2': '&#xe8f4;',
                'icon-last2': '&#xe8f5;',
                'icon-resize-enlarge': '&#xe8f6;',
                'icon-resize-shrink': '&#xe8f7;',
                'icon-volume': '&#xe8f8;',
                'icon-sound3': '&#xe8f9;',
                'icon-mute': '&#xe8fa;',
                'icon-flow-cascade': '&#xe8fb;',
                'icon-flow-branch': '&#xe8fc;',
                'icon-flow-tree': '&#xe8fd;',
                'icon-flow-line': '&#xe8fe;',
                'icon-flow-parallel': '&#xe8ff;',
                'icon-arrow-left4': '&#xe900;',
                'icon-arrow-down4': '&#xe901;',
                'icon-arrow-up-upload': '&#xe902;',
                'icon-arrow-right4': '&#xe903;',
                'icon-arrow-left5': '&#xe904;',
                'icon-arrow-down5': '&#xe905;',
                'icon-arrow-up4': '&#xe906;',
                'icon-arrow-right5': '&#xe907;',
                'icon-arrow-left6': '&#xe908;',
                'icon-arrow-down6': '&#xe909;',
                'icon-arrow-up5': '&#xe90a;',
                'icon-arrow-right6': '&#xe90b;',
                'icon-arrow-left7': '&#xe90c;',
                'icon-arrow-down7': '&#xe90d;',
                'icon-arrow-up6': '&#xe90e;',
                'icon-arrow-right7': '&#xe90f;',
                'icon-arrow-left8': '&#xe910;',
                'icon-arrow-down8': '&#xe911;',
                'icon-arrow-up7': '&#xe912;',
                'icon-arrow-right8': '&#xe913;',
                'icon-arrow-left9': '&#xe914;',
                'icon-arrow-down9': '&#xe915;',
                'icon-arrow-up8': '&#xe916;',
                'icon-arrow-right9': '&#xe917;',
                'icon-arrow-left10': '&#xe918;',
                'icon-arrow-down10': '&#xe919;',
                'icon-arrow-up9': '&#xe91a;',
                'icon-uniE91B': '&#xe91b;',
                'icon-arrow-left11': '&#xe91c;',
                'icon-arrow-down11': '&#xe91d;',
                'icon-arrow-up10': '&#xe91e;',
                'icon-arrow-right10': '&#xe91f;',
                'icon-menu4': '&#xe920;',
                'icon-ellipsis': '&#xe921;',
                'icon-dots': '&#xe922;',
                'icon-dot': '&#xe923;',
                'icon-cc': '&#xe924;',
                'icon-cc-by': '&#xe925;',
                'icon-cc-nc': '&#xe926;',
                'icon-cc-nc-eu': '&#xe927;',
                'icon-cc-nc-jp': '&#xe928;',
                'icon-cc-sa': '&#xe929;',
                'icon-cc-nd': '&#xe92a;',
                'icon-cc-pd': '&#xe92b;',
                'icon-cc-zero': '&#xe92c;',
                'icon-cc-share': '&#xe92d;',
                'icon-cc-share2': '&#xe92e;',
                'icon-danielbruce': '&#xe92f;',
                'icon-danielbruce2': '&#xe930;',
                'icon-github6': '&#xe931;',
                'icon-github7': '&#xe932;',
                'icon-flickr5': '&#xe933;',
                'icon-flickr6': '&#xe934;',
                'icon-vimeo4': '&#xe935;',
                'icon-vimeo5': '&#xe936;',
                'icon-twitter4': '&#xe937;',
                'icon-twitter5': '&#xe938;',
                'icon-facebook5': '&#xe939;',
                'icon-facebook6': '&#xe93a;',
                'icon-facebook7': '&#xe93b;',
                'icon-googleplus6': '&#xe93c;',
                'icon-googleplus7': '&#xe93d;',
                'icon-pinterest3': '&#xe93e;',
                'icon-pinterest4': '&#xe93f;',
                'icon-tumblr3': '&#xe940;',
                'icon-tumblr4': '&#xe941;',
                'icon-linkedin2': '&#xe942;',
                'icon-linkedin3': '&#xe943;',
                'icon-dribbble5': '&#xe944;',
                'icon-dribbble6': '&#xe945;',
                'icon-stumbleupon3': '&#xe946;',
                'icon-stumbleupon4': '&#xe947;',
                'icon-lastfm3': '&#xe948;',
                'icon-lastfm4': '&#xe949;',
                'icon-rdio': '&#xe94a;',
                'icon-rdio2': '&#xe94b;',
                'icon-spotify': '&#xe94c;',
                'icon-spotify2': '&#xe94d;',
                'icon-qq': '&#xe94e;',
                'icon-instagram3': '&#xe94f;',
                'icon-dropbox': '&#xe950;',
                'icon-evernote': '&#xe951;',
                'icon-flattr2': '&#xe952;',
                'icon-skype2': '&#xe953;',
                'icon-skype3': '&#xe954;',
                'icon-renren': '&#xe955;',
                'icon-sina-weibo': '&#xe956;',
                'icon-paypal4': '&#xe957;',
                'icon-picasa': '&#xe958;',
                'icon-soundcloud3': '&#xe959;',
                'icon-mixi': '&#xe95a;',
                'icon-behance': '&#xe95b;',
                'icon-circles': '&#xe95c;',
                'icon-vk': '&#xe95d;',
                'icon-smashing': '&#xe95e;',
                '0': 0
            },
            els = document.getElementsByTagName('*'),
            i, c, el;
            for (i = 0; ; i += 1) {
                el = els[i];
                if(!el) {
                    break;
                }
                c = el.className;
                c = c.match(/icon-[^\s'"]+/);
                if (c && icons[c[0]]) {
                    addIcon(el, icons[c[0]]);
                }
            }
        }());
    }
}


