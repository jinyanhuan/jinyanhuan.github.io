ocj.globalInit = {
  para: [],
  initAttrMarkBigeyes: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'bigeyes\']');
    var tbigeyesIndex = tthis.para['bigeyes_index'];
    if (isNaN(tbigeyesIndex)) tbigeyesIndex = 0;
    else tbigeyesIndex = parseInt(tbigeyesIndex);
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        this.onselectstart = function() { return false; };
        var tCurrentObjI = 0;
        var tCurrentObjData = tCurrentObj.attr('bigeyes_data');
        var tCurrentObjTimeout = tCurrentObj.attr('bigeyes_timeout');
        if (isNaN(tCurrentObjTimeout)) tCurrentObjTimeout = 10000;
        tCurrentObj.attr('bigeyes_i', tCurrentObjI);
        tCurrentObj.attr('bigeyes_index', tbigeyesIndex);
        var tCurrentSelect = function(_obj, _index)
        {
          var tSelectObj = _obj;
          var tSelectIndex = _index;
          var tBgDataArray = tCurrentObjData.split('$|||$');
          var tBgDataArrayLength = tBgDataArray.length;
          if (tSelectIndex >= tBgDataArrayLength) tSelectIndex = 0;
          if (tSelectIndex < 0) tSelectIndex = (tBgDataArrayLength - 1);
          tSelectObj.attr('bigeyes_i', tSelectIndex);
          var tBgDataString = tBgDataArray[tSelectIndex];
          var tBgDataStringArray = tBgDataString.split('$:::$');
          if (tBgDataStringArray.length == 4)
          {
            var tSelectTopic = tBgDataStringArray[0];
            var tSelectImageURL = tBgDataStringArray[1];
            var tSelectLinkURL = tBgDataStringArray[2];
            var tSelectTarGet = tBgDataStringArray[3];
            tSelectObj.find('.image').html('<a href="' + ocj.htmlEncode(tSelectLinkURL) + '" title="' + ocj.htmlEncode(tSelectTopic) + '" target="' + ocj.htmlEncode(tSelectTarGet) + '"><img src="' + ocj.htmlEncode(tSelectImageURL) + '" alt="' + ocj.htmlEncode(tSelectTopic) + '" /></a>');
          };
          tCurrentObj.parent().find('.bigeyes_tab').hide();
          tCurrentObj.parent().find('.bigeyes_tab:eq(' + tSelectIndex + ')').show();
          tCurrentObj.find('.menu').find('li').removeClass('on');
          tCurrentObj.find('.menu').find('li[i=\'' + tSelectIndex + '\']').addClass('on');
        };
        var tCurrentSelectPrev = function(_obj)
        {
          var tSelectObj = _obj;
          var tSelectObjI = tSelectObj.attr('bigeyes_i');
          if (isNaN(tSelectObjI)) tSelectObjI = 0;
          tSelectObjI = parseInt(tSelectObjI) - 1;
          tCurrentSelect(tSelectObj, tSelectObjI);
        };
        var tCurrentSelectNext = function(_obj)
        {
          var tSelectObj = _obj;
          var tSelectObjI = tSelectObj.attr('bigeyes_i');
          if (isNaN(tSelectObjI)) tSelectObjI = 0;
          tSelectObjI = parseInt(tSelectObjI) + 1;
          tCurrentSelect(tSelectObj, tSelectObjI);
        };
        tCurrentObj.mouseover(function(e){
          if (ocj.checkHover(e, this))
          {
            var tThisObj = $(this);
            tThisObj.find('.prev').show();
            tThisObj.find('.next').show();
            tthis.para['bigeyes_' + tCurrentObj.attr('bigeyes_index') + '_over'] = 'true';
          };
        });
        tCurrentObj.mouseout(function(e){
          if (ocj.checkHover(e, this))
          {
            var tThisObj = $(this);
            tThisObj.find('.prev').hide();
            tThisObj.find('.next').hide();
            tthis.para['bigeyes_' + tCurrentObj.attr('bigeyes_index') + '_over'] = 'false';
          };
        });
        tCurrentObj.find('.prev').click(function(){ tCurrentSelectPrev(tCurrentObj); });
        tCurrentObj.find('.next').click(function(){ tCurrentSelectNext(tCurrentObj); });
        tthis.para['bigeyes_' + tCurrentObj.attr('bigeyes_index') + '_setinterval'] = setInterval(function(){
          if (tthis.para['bigeyes_' + tCurrentObj.attr('bigeyes_index') + '_over'] != 'true') tCurrentSelectNext(tCurrentObj);
        }, tCurrentObjTimeout);
        var tInitMenu = function()
        {
          var tBgDataArray = tCurrentObjData.split('$|||$');
          var tBgDataArrayLength = tBgDataArray.length;
          tCurrentObj.append($('<div class="mask"></div>'));
          tCurrentObj.append($('<div class="menu"><ul></ul></div>'));
          for (var tk = 0; tk < tBgDataArrayLength; tk ++)
          {
            var tBgDataString = tBgDataArray[tk];
            var tBgDataStringArray = tBgDataString.split('$:::$');
            if (tBgDataStringArray.length == 4) tCurrentObj.find('ul').append($('<li i="' + tk + '" style="width:' + (tCurrentObj.width() / tBgDataArrayLength) + 'px">' +  ocj.htmlEncode(tBgDataStringArray[0]) + '</li>'));
          };
          tCurrentObj.find('ul').find('li').mouseover(function(){ tCurrentSelect(tCurrentObj, $(this).attr('i')); });
        };
        if (tCurrentObj.attr('bigeyes_menu') == 'true') tInitMenu();
        tCurrentSelect(tCurrentObj, 0);
        tbigeyesIndex = tbigeyesIndex + 1;
        tthis.para['bigeyes_index'] = tbigeyesIndex;
      };
    });
  },
  initAttrMarkClose: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'close\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.click(function(){
          $(tCurrentObj.attr('close_node')).hide();
        });
      };
    });
  },
  initAttrMarkCarousel: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'carousel\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        var tCurrentObjCarouselScroll = 1;
        var tCurrentObjCarouselVisible = 5;
        var tCurrentObjCarouselBtnPrev = tCurrentObj.attr('carousel_btnprev');
        var tCurrentObjCarouselBtnNext = tCurrentObj.attr('carousel_btnnext');
        if (!isNaN(tCurrentObj.attr('carousel_visible'))) tCurrentObjCarouselVisible = parseInt(tCurrentObj.attr('carousel_visible'));
        if (!isNaN(tCurrentObj.attr('carousel_scroll'))) tCurrentObjCarouselScroll = parseInt(tCurrentObj.attr('carousel_scroll'));
        if (tCurrentObj.find('.carousel').find('li').length >= tCurrentObjCarouselVisible) tCurrentObj.find('.carousel').jCarouselLite({visible: tCurrentObjCarouselVisible, scroll: tCurrentObjCarouselScroll, btnNext: tCurrentObjCarouselBtnPrev, btnPrev: tCurrentObjCarouselBtnNext});
        else
        {
          $(tCurrentObjCarouselBtnPrev).hide();
          $(tCurrentObjCarouselBtnNext).hide();
        };
      };
    });
  },
  initAttrMarkCountdown: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'countdown\']');
    var tCountdownIndex = tthis.para['countdown_index'];
    if (isNaN(tCountdownIndex)) tCountdownIndex = 0;
    else tCountdownIndex = parseInt(tCountdownIndex);
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.attr('countdown_index', tCountdownIndex);
        tCurrentObj.attr('countdown_inittime', new Date());
        tthis.para['countdown_' + tCurrentObj.attr('countdown_index') + '_setinterval'] = setInterval(function(){
          var tCurrentTotalSeconds = tCurrentObj.attr('countdown_total_seconds');
          if (!isNaN(tCurrentTotalSeconds))
          {
            tCurrentTotalSeconds = parseInt(tCurrentTotalSeconds);
            var tCurrentDate = new Date();
            var tCurrentInitDate = new Date(tCurrentObj.attr('countdown_inittime'));
            var tCurrentPassSeconds = ((tCurrentDate.getTime() - tCurrentInitDate.getTime()) / 1000);
            var tCurrentSurplusSeconds = tCurrentTotalSeconds - tCurrentPassSeconds;
            var tCurrentSPDays = Math.floor(tCurrentSurplusSeconds / (60 * 60 * 24));
            tCurrentSurplusSeconds = tCurrentSurplusSeconds % (60 * 60 * 24);
            var tCurrentSPHours = Math.floor(tCurrentSurplusSeconds / (60 * 60));
            if (tCurrentSPHours <= 9) tCurrentSPHours = '0' + tCurrentSPHours;
            tCurrentSurplusSeconds = tCurrentSurplusSeconds % (60 * 60);
            var tCurrentSPMinutes = Math.floor(tCurrentSurplusSeconds / (60));
            if (tCurrentSPMinutes <= 9) tCurrentSPMinutes = '0' + tCurrentSPMinutes;
            tCurrentSurplusSeconds = Math.floor(tCurrentSurplusSeconds % (60));
            if (tCurrentSurplusSeconds <= 9) tCurrentSurplusSeconds = '0' + tCurrentSurplusSeconds;
            var tCurrentUpdateObj = $('[countdown_index=\'' + tCurrentObj.attr('countdown_index') + '\']');
            tCurrentUpdateObj.find('.day').html(tCurrentSPDays);
            tCurrentUpdateObj.find('.hour').html(tCurrentSPHours);
            tCurrentUpdateObj.find('.minute').html(tCurrentSPMinutes);
            tCurrentUpdateObj.find('.second').html(tCurrentSurplusSeconds);
          };
        }, 1000);
        tCountdownIndex = tCountdownIndex + 1;
        tthis.para['countdown_index'] = tCountdownIndex;
      };
    });
  },
  initAttrMarkFly: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'fly\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.click(function(){
          var tFlyRelatedObj = $(tCurrentObj.attr('fly_related'));
          $('html,body').animate({scrollTop: tFlyRelatedObj.offset().top}, 'normal');
        });
      };
    });
  },
  initAttrMarkGradeStar: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'grade-star\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.find(tCurrentObj.attr('star_node')).mouseover(function(){
          var tCurrentNodeObj = $(this);
          tCurrentObj.find(tCurrentObj.attr('star_node')).removeClass('on').removeClass('hover');
          for (var ti = 0; ti <= tCurrentNodeObj.index(); ti ++) tCurrentObj.find(tCurrentObj.attr('star_node') + ':eq(' + ti + ')').addClass('hover');
          tCurrentNodeObj.parent().find('.score').find('label').html(tCurrentNodeObj.index() + 1);
          tCurrentNodeObj.parent().find('.title').find('label').html(tCurrentNodeObj.attr('title'));
        });
        tCurrentObj.find(tCurrentObj.attr('star_node')).mouseout(function(){
          var tCurrentNodeObj = $(this);
          var tCurrentStarValue = $(tCurrentObj.attr('related')).val();
          if (isNaN(tCurrentStarValue)) tCurrentStarValue = 0;
          else tCurrentStarValue = parseInt(tCurrentStarValue);
          tCurrentObj.find(tCurrentObj.attr('star_node')).removeClass('on').removeClass('hover');
          for (var ti = 0; ti < tCurrentStarValue; ti ++) tCurrentObj.find(tCurrentObj.attr('star_node') + ':eq(' + ti + ')').addClass('on');
          tCurrentNodeObj.parent().find('.score').find('label').html(tCurrentStarValue);
          if (tCurrentStarValue == 0) tCurrentNodeObj.parent().find('.title').find('label').html(tCurrentNodeObj.parent().find('.title').find('label').attr('defvalue'));
          else tCurrentNodeObj.parent().find('.title').find('label').html(tCurrentNodeObj.parent().find(tCurrentObj.attr('star_node') + ':eq(' + (tCurrentStarValue - 1) + ')').attr('title'));
        });
        tCurrentObj.find(tCurrentObj.attr('star_node')).click(function(){
          var tCurrentNodeObj = $(this);
          $(tCurrentObj.attr('related')).val(tCurrentNodeObj.index() + 1);
        });
      };
    });
  },

  initAttrMarkImgzoom: function()
  {
    var tthis = this;
    var tObj = $('a[mark=\'imgzoom\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.jqzoom({zoomType: 'reverse', zoomWidth: tCurrentObj.attr('imgzoom_width'), zoomHeight: tCurrentObj.attr('imgzoom_height'), lens: true, preloadImages: true, alwaysOn: false });
      }
    });
  },

  initAttrMarkImitateCheckbox: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'imitate-checkbox\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        var tCurrentObjRelated = tCurrentObj.attr('related');
        var tCurrentObjOnClass = tCurrentObj.attr('checkbox_on_class');
        if (!tCurrentObjOnClass) tCurrentObjOnClass = 'on';
        tCurrentObj.find(tCurrentObjRelated).click(function(){
          var tThisObj = $(this);
          if (!tThisObj.hasClass(tCurrentObjOnClass)) tThisObj.addClass(tCurrentObjOnClass);
          else tThisObj.removeClass(tCurrentObjOnClass);
        });
      };
    });
  },
  initAttrMarkImitateRadio: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'imitate-radio\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        var tCurrentObjRelated = tCurrentObj.attr('related');
        var tCurrentObjOnClass = tCurrentObj.attr('radio_on_class');
        if (!tCurrentObjOnClass) tCurrentObjOnClass = 'on';
        tCurrentObj.find(tCurrentObjRelated).click(function(){
          var tThisObj = $(this);
          tThisObj.parent().find(tCurrentObjRelated).removeClass(tCurrentObjOnClass);
          tThisObj.addClass(tCurrentObjOnClass);
        });
      };
    });
  },
  initAttrMarkImitateSelect: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'imitate-select\']');
    var tImitateSelectIndex = tthis.para['imitate-select_index'];
    if (isNaN(tImitateSelectIndex)) tImitateSelectIndex = 0;
    else tImitateSelectIndex = parseInt(tImitateSelectIndex);
    tthis.para['imitate-select-z-index'] = 100000;
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        var tCurrentObjRelated = tCurrentObj.attr('related');
        var tCurrentObjSelectMode = tCurrentObj.attr('select_mode');
        $(tCurrentObj).attr('imitate-select_index', tImitateSelectIndex);
        var tNodeObj = tCurrentObj.find('dl');
        var tSubNodeObjLi = tNodeObj.find('ul').find('li');
        var tNodeObjShowEvent = 'mouseover';
        if (tCurrentObjSelectMode == 'click') tNodeObjShowEvent = 'click';
        tNodeObj.bind(tNodeObjShowEvent, function(e){
          if (tNodeObjShowEvent == 'click' || ocj.checkHover(e, this))
          {
            ocj.lazyResponseCancel('imitate-select-subnode-' + $(tCurrentObj).attr('imitate-select_index'));
            ocj.lazyResponse('imitate-select-node-' + $(tCurrentObj).attr('imitate-select_index'), 100, function(_obj){
              var tThisObj = _obj;
              tthis.para['imitate-select-z-index'] = tthis.para['imitate-select-z-index'] + 1;
              tCurrentObj.css({'z-index': tthis.para['imitate-select-z-index']});
              $(tThisObj).parent().find('dl').removeClass('on');
              $(tThisObj).parent().find('dl').find('ul').hide();
              $(tThisObj).addClass('on');
              if ($(tThisObj).parent().attr('select_option_autowidth') != 'off') $(tThisObj).find('ul').css({'width': $(tThisObj).width()});
              $(tThisObj).find('ul').show();
            }, this);
          };
        });
        tNodeObj.mouseout(function(e){
          if (ocj.checkHover(e, this))
          {
            ocj.lazyResponseCancel('imitate-select-node-' + $(tCurrentObj).attr('imitate-select_index'));
            ocj.lazyResponse('imitate-select-subnode-' + $(tCurrentObj).attr('imitate-select_index'), 600, function(_obj){
              var tThisObj = _obj;
              $(tThisObj).removeClass('on');
              $(tThisObj).find('ul').hide();
            }, this);
          };
        });
        tSubNodeObjLi.click(function(){
          var tThisObj = this;
          tNodeObj.removeClass('on');
          tNodeObj.find('ul').hide();
          tNodeObj.find('dt').find('em').html($(tThisObj).attr('related_text'));
          if (tCurrentObjRelated) $(tCurrentObjRelated).val($(tThisObj).attr('related_value'));
        });
        tImitateSelectIndex = tImitateSelectIndex + 1;
        tthis.para['imitate-select_index'] = tImitateSelectIndex;
      };
    });
  },
  initAttrMarkInputDate: function()
  {
    var tthis = this;
    var tObj = $('input[mark=\'input-date\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.date_input();
      };
    });
  },
  initAttrMarkPull: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'pull\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.mouseover(function(e){
          if (ocj.checkHover(e, this))
          {
            var tThisObj = $(this);
            if (tCurrentObj.attr('pull_direction') == 'top') tThisObj.find(tCurrentObj.attr('pull_node')).animate({'top': tCurrentObj.attr('pull_new_position')}, 'fast');
            else if (tCurrentObj.attr('pull_direction') == 'right') tThisObj.find(tCurrentObj.attr('pull_node')).animate({'right': tCurrentObj.attr('pull_new_position')}, 'fast');
            else if (tCurrentObj.attr('pull_direction') == 'bottom') tThisObj.find(tCurrentObj.attr('pull_node')).animate({'bottom': tCurrentObj.attr('pull_new_position')}, 'fast');
            else if (tCurrentObj.attr('pull_direction') == 'left') tThisObj.find(tCurrentObj.attr('pull_node')).animate({'left': tCurrentObj.attr('pull_new_position')}, 'fast');
          };
        });
        tCurrentObj.mouseout(function(e){
          if (ocj.checkHover(e, this))
          {
            var tThisObj = $(this);
            if (tCurrentObj.attr('pull_direction') == 'top') tThisObj.find(tCurrentObj.attr('pull_node')).animate({'top': tCurrentObj.attr('pull_ori_position')}, 'fast');
            else if (tCurrentObj.attr('pull_direction') == 'right') tThisObj.find(tCurrentObj.attr('pull_node')).animate({'right': tCurrentObj.attr('pull_ori_position')}, 'fast');
            else if (tCurrentObj.attr('pull_direction') == 'bottom') tThisObj.find(tCurrentObj.attr('pull_node')).animate({'bottom': tCurrentObj.attr('pull_ori_position')}, 'fast');
            else if (tCurrentObj.attr('pull_direction') == 'left') tThisObj.find(tCurrentObj.attr('pull_node')).animate({'left': tCurrentObj.attr('pull_ori_position')}, 'fast');
          };
        });
      };
    });
  },
  initAttrMarkPositionFixed: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'position-fixed\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.attr('init_offset_top', tCurrentObj.offset().top);
        $(window).bind('scroll resize', function() {
          var tIsIE6 = !-[1,] && !window.XMLHttpRequest;
          if (!tIsIE6)
          {
            var tCurrentObjTop = parseInt(tCurrentObj.attr('init_offset_top'));
            if (!tCurrentObj.hasClass('fixed')) tCurrentObj.attr('init_offset_top', tCurrentObj.offset().top);
            if ($(window).scrollTop() > tCurrentObjTop) tCurrentObj.addClass('fixed');
            else tCurrentObj.removeClass('fixed');
          };
        });
      };
    });
  },
  initAttrMarkShift: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'shift\']');
    var tshiftIndex = tthis.para['shift_index'];
    if (isNaN(tshiftIndex)) tshiftIndex = 0;
    else tshiftIndex = parseInt(tshiftIndex);
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        var tCurrentWindowObj = tCurrentObj.find('.window');
        tCurrentObj.attr('shift_index', tshiftIndex);
        var tCurrentObjItemLength = tCurrentObj.find('.item_list').find('.item').length;
        if (tCurrentObjItemLength >= 1)
        {
          var tCurrentSelect = function(_obj, _index)
          {
            var tSelectObj = _obj;
            var tSelectIndex = _index;
            var tSelectObjI = tSelectObj.attr('shift_i');
            if (isNaN(tSelectObjI)) tSelectObjI = 0;
            else tSelectObjI = parseInt(tSelectObjI);
            if (tSelectIndex >= tCurrentObjItemLength) tSelectIndex = 0;
            if (tSelectIndex < 0) tSelectIndex = (tCurrentObjItemLength - 1);
            tSelectObj.find('.window').empty().append(tSelectObj.find('.item_list').find('.item').eq(tSelectIndex).clone(true));
            tSelectObj.attr('shift_i', tSelectIndex);
            tSelectObj.find('.count').find('em').html(tSelectIndex + 1);
            $(window).scroll();
            tthis.initAttrMarkPull();
          };
          var tCurrentSelectPrev = function(_obj)
          {
            var tSelectObj = _obj;
            var tSelectObjI = tSelectObj.attr('shift_i');
            if (isNaN(tSelectObjI)) tSelectObjI = 0;
            tSelectObjI = parseInt(tSelectObjI) - 1;
            tCurrentSelect(tSelectObj, tSelectObjI);
          };
          var tCurrentSelectNext = function(_obj)
          {
            var tSelectObj = _obj;
            var tSelectObjI = tSelectObj.attr('shift_i');
            if (isNaN(tSelectObjI)) tSelectObjI = 0;
            tSelectObjI = parseInt(tSelectObjI) + 1;
            tCurrentSelect(tSelectObj, tSelectObjI);
          };
          tCurrentObj.find('.count').find('em').html(1);
          tCurrentObj.find('.count').find('b').html(tCurrentObjItemLength);
          tCurrentObj.find('.window').append(tCurrentObj.find('.item_list').find('.item:first').clone(true));
          tCurrentObj.find('.prev').click(function(){ tCurrentSelectPrev(tCurrentObj); });
          tCurrentObj.find('.next').click(function(){ tCurrentSelectNext(tCurrentObj); });
          tCurrentObj.mouseover(function(e){
            if (ocj.checkHover(e, this))
            {
              var tThisObj = $(this);
              tThisObj.find('div.prev').show();
              tThisObj.find('div.next').show();
              tthis.para['shift_' + tCurrentObj.attr('shift_index') + '_over'] = 'true';
            };
          });
          tCurrentObj.mouseout(function(e){
            if (ocj.checkHover(e, this))
            {
              var tThisObj = $(this);
              tThisObj.find('div.prev').hide();
              tThisObj.find('div.next').hide();
              tthis.para['shift_' + tCurrentObj.attr('shift_index') + '_over'] = 'false';
            };
          });
          var tCurrentObjInitSelectedIndex = tCurrentObj.find('.item[shift_selected=\'true\']').index();
          if (tCurrentObjInitSelectedIndex != -1) tCurrentSelect(tCurrentObj, tCurrentObjInitSelectedIndex);
        };
        var tCurrentShiftTimeout = tCurrentObj.attr('shift_timeout');
        if (!isNaN(tCurrentShiftTimeout))
        {
          tthis.para['shift_' + tCurrentObj.attr('shift_index') + '_interval'] = setInterval(function(){
            if (tthis.para['shift_' + tCurrentObj.attr('shift_index') + '_over'] != 'true') tCurrentSelectNext(tCurrentObj);
          }, tCurrentShiftTimeout);
        };
        tshiftIndex = tshiftIndex + 1;
        tthis.para['shift_index'] = tshiftIndex;
      };
    });
  },
  initAttrMarkSwitch: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'switch\']');
    var tswitchIndex = tthis.para['switch_index'];
    if (isNaN(tswitchIndex)) tswitchIndex = 0;
    else tswitchIndex = parseInt(tswitchIndex);
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        var tCurrentWindowObj = tCurrentObj.find('.window');
        var tCurrentWindow1Obj = tCurrentObj.find('.window_1');
        var tCurrentWindow2Obj = tCurrentObj.find('.window_2');
        tCurrentObj.attr('switch_index', tswitchIndex);
        tCurrentWindow1Obj.css({'width': tCurrentWindowObj.parent().width() + 'px'});
        tCurrentWindow2Obj.css({'width': tCurrentWindowObj.parent().width() + 'px'});
        tCurrentWindowObj.css({'width': (tCurrentWindowObj.parent().width() * 2) + 'px'});
        var tCurrentObjItemLength = tCurrentObj.find('.item_list').find('.item').length;
        if (tCurrentObjItemLength >= 1)
        {
          var tCurrentSelect = function(_obj, _index)
          {
            var tSelectObj = _obj;
            var tSelectIndex = _index;
            var tSelectObjI = tSelectObj.attr('switch_i');
            var tSelectObjDirection = 'left';
            if (isNaN(tSelectObjI)) tSelectObjI = 0;
            else tSelectObjI = parseInt(tSelectObjI);
            if (tSelectObjI < tSelectIndex) tSelectObjDirection = 'right';
            if (tSelectIndex >= tCurrentObjItemLength) tSelectIndex = 0;
            if (tSelectIndex < 0) tSelectIndex = (tCurrentObjItemLength - 1);
            if (tSelectObjDirection == 'left')
            {
              if (tSelectObj.attr('switch_ing') != 'true')
              {
                tSelectObj.attr('switch_ing', 'true');
                tSelectObj.find('.window').css({'left': (0 - tSelectObj.find('.window').width() / 2) + 'px'});
                tSelectObj.find('.window_1').empty().append(tSelectObj.find('.item_list').find('.item').eq(tSelectIndex).clone(true));
                tSelectObj.find('.window_1').find('img.lazy').each(function(){ this.src = this.getAttribute('data-original'); });
                tSelectObj.find('.window').animate({'left': '0px'}, 'normal', function(){
                  tSelectObj.attr('switch_ing', 'false');
                  tSelectObj.attr('switch_i', tSelectIndex);
                  tSelectObj.find('.window_2').empty().append(tSelectObj.find('.window_1').find('.item:first').clone(true));
                  tSelectObj.find('.count').find('em').html(tSelectIndex + 1);
                });
                $(window).scroll();
                tthis.initAttrMarkPull();
              };
            }
            else if (tSelectObjDirection == 'right')
            {
              if (tSelectObj.attr('switch_ing') != 'true')
              {
                tSelectObj.attr('switch_ing', 'true');
                tSelectObj.find('.window').css({'left': '0px'});
                tSelectObj.find('.window_2').empty().append(tSelectObj.find('.item_list').find('.item').eq(tSelectIndex).clone(true));
                tSelectObj.find('.window_2').find('img.lazy').each(function(){ this.src = this.getAttribute('data-original'); });
                tSelectObj.find('.window').animate({'left': (0 - tSelectObj.find('.window').width() / 2) + 'px'}, 'normal', function(){
                  tSelectObj.attr('switch_ing', 'false');
                  tSelectObj.attr('switch_i', tSelectIndex);
                  tSelectObj.find('.window_1').empty().append(tSelectObj.find('.window_2').find('.item:first').clone(true));
                  tSelectObj.find('.count').find('em').html(tSelectIndex + 1);
                });
                $(window).scroll();
                tthis.initAttrMarkPull();
              };
            };
          };
          var tCurrentSelectPrev = function(_obj)
          {
            var tSelectObj = _obj;
            var tSelectObjI = tSelectObj.attr('switch_i');
            if (isNaN(tSelectObjI)) tSelectObjI = 0;
            tSelectObjI = parseInt(tSelectObjI) - 1;
            tCurrentSelect(tSelectObj, tSelectObjI);
          };
          var tCurrentSelectNext = function(_obj)
          {
            var tSelectObj = _obj;
            var tSelectObjI = tSelectObj.attr('switch_i');
            if (isNaN(tSelectObjI)) tSelectObjI = 0;
            tSelectObjI = parseInt(tSelectObjI) + 1;
            tCurrentSelect(tSelectObj, tSelectObjI);
          };
          tCurrentObj.find('.count').find('em').html(1);
          tCurrentObj.find('.count').find('b').html(tCurrentObjItemLength);
          tCurrentObj.find('.window_1').append(tCurrentObj.find('.item_list').find('.item:first').clone(true));
          tCurrentObj.find('.window_2').append(tCurrentObj.find('.item_list').find('.item:first').clone(true));
          tCurrentObj.find('.prev').click(function(){ tCurrentSelectPrev(tCurrentObj); });
          tCurrentObj.find('.next').click(function(){ tCurrentSelectNext(tCurrentObj); });
          tCurrentObj.mouseover(function(e){
            if (ocj.checkHover(e, this))
            {
              var tThisObj = $(this);
              tThisObj.find('div.prev').show();
              tThisObj.find('div.next').show();
              tthis.para['switch_' + tCurrentObj.attr('switch_index') + '_over'] = 'true';
            };
          });
          tCurrentObj.mouseout(function(e){
            if (ocj.checkHover(e, this))
            {
              var tThisObj = $(this);
              tThisObj.find('div.prev').hide();
              tThisObj.find('div.next').hide();
              tthis.para['switch_' + tCurrentObj.attr('switch_index') + '_over'] = 'false';
            };
          });
          var tCurrentObjInitSelectedIndex = tCurrentObj.find('.item[switch_selected=\'true\']').index();
          if (tCurrentObjInitSelectedIndex != -1) tCurrentSelect(tCurrentObj, tCurrentObjInitSelectedIndex);
        };
        var tCurrentSwitchTimeout = tCurrentObj.attr('switch_timeout');
        if (!isNaN(tCurrentSwitchTimeout))
        {
          tthis.para['switch_' + tCurrentObj.attr('switch_index') + '_interval'] = setInterval(function(){
            if (tthis.para['switch_' + tCurrentObj.attr('switch_index') + '_over'] != 'true') tCurrentSelectNext(tCurrentObj);
          }, tCurrentSwitchTimeout);
        };
        tswitchIndex = tswitchIndex + 1;
        tthis.para['switch_index'] = tswitchIndex;
      };
    });
  },
  initAttrMarkSubmenu: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'submenu\']');
    var tsubmenuIndex = tthis.para['submenu_index'];
    if (isNaN(tsubmenuIndex)) tsubmenuIndex = 0;
    else tsubmenuIndex = parseInt(tsubmenuIndex);
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        var tCurrentObjNode = $(tCurrentObj).attr('submenu_node');
        var tCurrentObjSubNode = $(tCurrentObj).attr('submenu_subnode');
        $(tCurrentObj).attr('submenu_index', tsubmenuIndex);
        var tNodeObj = tCurrentObj.find(tCurrentObjNode);
        var tNodeObjIndex = 0;
        tNodeObj.each(function(){
          var tCurrentNodeObj = $(this);
          tCurrentNodeObj.attr('submenu_subnode_index', tNodeObjIndex);
          tNodeObjIndex += 1;
        });
        tNodeObj.mouseover(function(e){
          if (ocj.checkHover(e, this))
          {
            var tCurrentNodeObj = $(this);
            ocj.lazyResponseCancel('submenu-subnode-' + $(tCurrentObj).attr('submenu_index') + '-' + tCurrentNodeObj.attr('submenu_subnode_index'));
            ocj.lazyResponse('submenu-node-' + $(tCurrentObj).attr('submenu_index') + '-' + tCurrentNodeObj.attr('submenu_subnode_index'), 100, function(_obj){
              var tThisObj = _obj;
              tCurrentObj.find(tCurrentObjNode).removeClass('on');
              tCurrentObj.find(tCurrentObjNode).find(tCurrentObjSubNode).hide();
              $(tThisObj).addClass('on');
              $(tThisObj).find(tCurrentObjSubNode).show();
              $(window).scroll();
            }, this);
          };
        });
        tNodeObj.mouseout(function(e){
          if (ocj.checkHover(e, this))
          {
            var tCurrentNodeObj = $(this);
            ocj.lazyResponseCancel('submenu-node-' + $(tCurrentObj).attr('submenu_index') + '-' + tCurrentNodeObj.attr('submenu_subnode_index'));
            ocj.lazyResponse('submenu-subnode-' + $(tCurrentObj).attr('submenu_index') + '-' + tCurrentNodeObj.attr('submenu_subnode_index'), 600, function(_obj){
              var tThisObj = _obj;
              $(tThisObj).removeClass('on');
              $(tThisObj).find(tCurrentObjSubNode).hide();
            }, this);
          };
        });
        tsubmenuIndex = tsubmenuIndex + 1;
        tthis.para['submenu_index'] = tsubmenuIndex;
      };
    });
  },
  initAttrMarkTab: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'tab\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        var tCurrentLiObjI = 0;
        var tCurrentULObj = tCurrentObj.find('ul:first');
        var tCurrentLiObjTimeout = tCurrentObj.attr('tab_timeout');
        if (isNaN(tCurrentLiObjTimeout)) tCurrentLiObjTimeout = 10000;
        else tCurrentLiObjTimeout = parseInt(tCurrentLiObjTimeout);
        var tCurrentSelectTab = function(_obj)
        {
          var tobjs = _obj;
          var tParentObj = $(tobjs).parent();
          tCurrentULObj.find('li').find('span:first').removeClass('on');
          $(tobjs).addClass('on');
          tthis.para[tCurrentULObj.attr('related') + '_i'] = tParentObj.attr('tab_i');
          $('.' + tCurrentULObj.attr('related')).hide();
          var tCurrentRelatedIdObj = $('#' + tCurrentULObj.attr('related') + '_' + tParentObj.attr('tab_i'));
          if (tCurrentRelatedIdObj.length != 1) tCurrentRelatedIdObj = $('.' + tCurrentULObj.attr('related') + ':eq(' + tParentObj.attr('tab_i') + ')');
          tCurrentRelatedIdObj.show();
          tCurrentRelatedIdObj.find('[mark=\'tinyscrollbar-hidden\']').each(function(){
            var tCurrentTinyscrollBarObj = $(this);
            if (tCurrentTinyscrollBarObj.attr('init') != 'done') tCurrentTinyscrollBarObj.tinyscrollbar();
          });
          if (tCurrentULObj.attr('callback')) eval(tCurrentULObj.attr('callback'));
          $(window).scroll();
        };
        tCurrentObj.find('li').each(function(){
          var tCurrentLiObj = this;
          $(tCurrentLiObj).attr('tab_i', tCurrentLiObjI);
          tCurrentLiObjI = tCurrentLiObjI + 1;
        });
        tthis.para[tCurrentULObj.attr('related') + '_imax'] = tCurrentLiObjI;
        tCurrentObj.find('li').find('span:first').mouseover(function(e){
          if (ocj.checkHover(e, this))
          {
            tthis.para[tCurrentULObj.attr('related') + '_over'] = 'true';
            ocj.lazyResponse(tCurrentULObj.attr('related') + '_lazy', 300, tCurrentSelectTab, this);
          };
        });
        tCurrentObj.find('li').find('span:first').mouseout(function(e){
          if (ocj.checkHover(e, this))
          {
            tthis.para[tCurrentULObj.attr('related') + '_over'] = 'false';
            ocj.lazyResponseCancel(tCurrentULObj.attr('related') + '_lazy');
          };
        });
        $('.' + tCurrentULObj.attr('related')).mouseover(function(e){
          if (ocj.checkHover(e, this)) tthis.para[tCurrentULObj.attr('related') + '_over'] = 'true';
        });
        $('.' + tCurrentULObj.attr('related')).mouseout(function(e){
          if (ocj.checkHover(e, this)) tthis.para[tCurrentULObj.attr('related') + '_over'] = 'false';
        });
        tCurrentSelectTab(tCurrentULObj.find('li:first').find('span:first'));
        if (tCurrentLiObjTimeout > 1000)
        {
          tthis.para[tCurrentULObj.attr('related') + '_interval'] = setInterval(function(){
            if (tthis.para[tCurrentULObj.attr('related') + '_over'] != 'true')
            {
              var tCurrentI = parseInt(tthis.para[tCurrentULObj.attr('related') + '_i']);
              var tCurrentIMax = parseInt(tthis.para[tCurrentULObj.attr('related') + '_imax']);
              tCurrentI = tCurrentI + 1;
              if (tCurrentI >= tCurrentIMax) tCurrentI = 0;
              tCurrentSelectTab(tCurrentObj.find('li[tab_i=\'' + tCurrentI + '\']').find('span'));
            };
          }, tCurrentLiObjTimeout);
        };
      };
    });
  },
  initAttrMarkTab2: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'tab2\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        var tCurrentLiObjI = 0;
        var tCurrentULObj = tCurrentObj.find('ul:first');
        var tCurrentSelectTab = function(_obj)
        {
          var tobjs = _obj;
          var tParentObj = $(tobjs).parent();
          tCurrentULObj.find('li').find('span:first').removeClass('on');
          $(tobjs).addClass('on');
          $('.' + tCurrentULObj.attr('related')).hide();
          var tCurrentRelatedIdObj = $('#' + tCurrentULObj.attr('related') + '_' + tParentObj.attr('tab_i'));
          if (tCurrentRelatedIdObj.length != 1) tCurrentRelatedIdObj = $('.' + tCurrentULObj.attr('related') + ':eq(' + tParentObj.attr('tab_i') + ')');
          tCurrentRelatedIdObj.show();
          tCurrentRelatedIdObj.find('[mark=\'tinyscrollbar-hidden\']').each(function(){
            var tCurrentTinyscrollBarObj = $(this);
            if (tCurrentTinyscrollBarObj.attr('init') != 'done') tCurrentTinyscrollBarObj.tinyscrollbar();
          });
          if (tCurrentULObj.attr('callback')) eval(tCurrentULObj.attr('callback'));
          $(window).scroll();
        };
        tCurrentObj.find('li').each(function(){
          var tCurrentLiObj = this;
          $(tCurrentLiObj).attr('tab_i', tCurrentLiObjI);
          $(tCurrentLiObj).css('cursor', 'pointer');
          $(tCurrentLiObj).find('span:first').css('cursor', 'pointer');
          tCurrentLiObjI = tCurrentLiObjI + 1;
        });
        tCurrentObj.find('li').find('span:first').click(function(){ tCurrentSelectTab(this); });
        tCurrentSelectTab(tCurrentULObj.find('li:first').find('span:first'));
      };
    });
  },
  initAttrMarkTinyScrollbar: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'tinyscrollbar\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done') tCurrentObj.tinyscrollbar();
    });
  },
  initAttrMarkToogle: function()
  {
    var tthis = this;
    var tObj = $('[mark=\'toogle\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.find('.toogle').click(function(){
          if ($(this).hasClass('toogle_on'))
          {
            $(this).removeClass('toogle_on');
            var tCurrentObjMode = tCurrentObj.attr('toogle_mode');
            if (!tCurrentObjMode) $(tCurrentObj.attr('toogle_related')).hide();
            else if (tCurrentObjMode == 'overflow') $(tCurrentObj.attr('toogle_related')).css({'height': tCurrentObj.attr('toogle_related_ori_height') + 'px', 'overflow': 'hidden'});
          }
          else
          {
            $(this).addClass('toogle_on');
            var tCurrentObjMode = tCurrentObj.attr('toogle_mode');
            if (!tCurrentObjMode) $(tCurrentObj.attr('toogle_related')).show();
            else if (tCurrentObjMode == 'overflow') $(tCurrentObj.attr('toogle_related')).css({'height': 'auto', 'overflow': 'visible'});
          };
        });
      };
    });
  },
  initAttrMarkHover: function()
  {
    $(document).on('mouseover', '[mark=\'hover\']', function(e) { if (ocj.checkHover(e, this)) $(this).addClass($(this).attr('hover_class')); });
    $(document).on('mouseout', '[mark=\'hover\']', function(e) { if (ocj.checkHover(e, this)) $(this).removeClass($(this).attr('hover_class')); });
  },
  initAttrMarkDefaultText: function()
  {
    var tObj = $('input[mark=\'default-text\'],textarea[mark=\'default-text\']');
    tObj.each(function(){
      var tCurrentObj = $(this);
      if (tCurrentObj.attr('init') != 'done')
      {
        tCurrentObj.attr('init', 'done');
        tCurrentObj.attr('defvalue', tCurrentObj.val());
        tCurrentObj.focus(function(){
          if (tCurrentObj.val() == tCurrentObj.attr('defvalue'))
          {
            tCurrentObj.val('');
            tCurrentObj.addClass('focus');
          };
        });
        tCurrentObj.blur(function(){
          if (!tCurrentObj.val())
          {
            tCurrentObj.removeClass('focus');
            tCurrentObj.val(tCurrentObj.attr('defvalue'));
          };
        });
      };
    });
  },
  initFooterAnnListScroll: function()
  {
    var tthis = this;
    var tObj1 = $('#footerMenuBar').find('.ann_list');
    var tObj2 = $('#footerMenuBar').find('.ann_list_content_box');
    var tObjHeight = tObj1.height();
    var tObjChildCount = tObj2.find('li').length;
    var tObjChildLineCount = Math.ceil(tObjChildCount / 3);
    tObj1.mouseover(function(e){ if (ocj.checkHover(e, this)) tthis.para['ann_list_mouseover'] = true; });
    tObj1.mouseout(function(e){ if (ocj.checkHover(e, this)) tthis.para['ann_list_mouseover'] = false; });
    tthis.para['ann_list_i'] = 1;
    tthis.para['ann_list_height'] = tObjHeight;
    tthis.para['ann_list_child_count'] = tObjChildCount;
    tthis.para['ann_list_timeout'] = setInterval(function(){
      if (tthis.para['ann_list_mouseover'] != true)
      {
        var tI = tthis.para['ann_list_i'];
        tObj2.animate({'top': (0 - tI * tObjHeight) + 'px'}, 'normal', function(){
          tthis.para['ann_list_i'] = tI + 1;
          if (tI == (tObjChildLineCount - 1)) tthis.para['ann_list_i'] = 0;
        });
      };
    }, 5000);
  },
  initFooterMenuBarControl: function()
  {
    var tObj1 = $('#footerMenuBar').find('.control');
    var tObj2 = $('#footerMenuList');
    tObj1.click(function(){
      if (tObj1.attr('closed') == 'true')
      {
        tObj1.attr('closed', 'false');
        tObj1.addClass('control_opened');
        tObj2.slideDown('fast');
      }
      else
      {
        tObj1.attr('closed', 'true');
        tObj1.removeClass('control_opened');
        tObj2.slideUp('fast');
      };
    });
  },
  initLogoSliderScroll: function()
  {
    var tthis = this;
    var tObj1 = $('#headerContent').find('.logo_slider_box');
    var tObj2 = $('#headerContent').find('.logo_slider_box_content');
    var tObjWidth = tObj1.width();
    var tObjChildCount = tObj2.find('img').length;
    tObj1.mouseover(function(e){ if (ocj.checkHover(e, this)) tthis.para['logo_slider_mouseover'] = true; });
    tObj1.mouseout(function(e){ if (ocj.checkHover(e, this)) tthis.para['logo_slider_mouseover'] = false; });
    tObj2.find('nobr').prepend(tObj2.find('a:last').clone());
    tObj2.css('left', (0 - tObjWidth) + 'px');
    tthis.para['logo_slider_i'] = 2;
    tthis.para['logo_slider_width'] = tObjWidth;
    tthis.para['logo_slider_child_count'] = tObjChildCount;
    tthis.para['logo_slider_timeout'] = setInterval(function(){
      if (tthis.para['logo_slider_mouseover'] != true)
      {
        var tI = tthis.para['logo_slider_i'];
        tObj2.animate({'left': (0 - tI) * tObjWidth + 'px'}, 'normal', function(){
          tthis.para['logo_slider_i'] = tI + 1;
          if (tI == tObjChildCount)
          {
            tthis.para['logo_slider_i'] = 1;
            tObj2.css('left', '0px');
          };
        });
      };
    }, 4000);
  },
  maskS: function (obj) {
    var doc = document,
        innerWidth = window.innerWidth ? window.innerWidth : document.body.clientWidth,
        innerHeight = window.innerHeight ? window.innerHeight : document.body.clientHeight,
        show = obj,
        mask = doc.createElement("div");
    mask.style.cssText = 'width:' + innerWidth + 'px;height:' + innerHeight + 'px;' + 'background:black; z-index:123456789; opacity:0.4;filter:alpha(opacity=40); position:absolute; left:0; top:0;';

    show.style.display = 'block';
    show.style.zIndex = 1234567890;
    show.style.height = "auto";
    show.style.top = "50%";
    show.style.position = "absolute";
    show.style.marginTop = (-show.offsetHeight / 2) + 'px';
    show.style.marginLeft = "-275px";
    show.style.left = "50%";
    doc.body.appendChild(mask);
    window.onresize = function () {
      innerWidth = window.innerWidth ? window.innerWidth : document.body.clientWidth;
      innerHeight = window.innerHeight ? window.innerHeight : document.body.clientHeight;
      mask.style.width = innerWidth + 'px';
      mask.style.height = innerHeight + 'px';
    }
  },
  ready: function()
  {
    var tthis = this;
    tthis.initAttrMarkBigeyes();
    tthis.initAttrMarkClose();
    tthis.initAttrMarkCarousel();
    tthis.initAttrMarkCountdown();
    tthis.initAttrMarkFly();
    tthis.initAttrMarkGradeStar();
    tthis.initAttrMarkImgzoom();
    tthis.initAttrMarkImitateRadio();
    tthis.initAttrMarkImitateCheckbox();
    tthis.initAttrMarkImitateSelect();
    tthis.initAttrMarkInputDate();
    tthis.initAttrMarkPull();
    tthis.initAttrMarkPositionFixed();
    tthis.initAttrMarkShift();
    tthis.initAttrMarkSwitch();
    tthis.initAttrMarkSubmenu();
    tthis.initAttrMarkTab();
    tthis.initAttrMarkTab2();
    tthis.initAttrMarkTinyScrollbar();
    tthis.initAttrMarkToogle();
    tthis.initAttrMarkHover();
    tthis.initAttrMarkDefaultText();
    tthis.initFooterAnnListScroll();
    tthis.initFooterMenuBarControl();
    tthis.initLogoSliderScroll();
    $('img.lazy').lazyload({failure_limit: 100});
    for (o in ocj)
    {
      if(o != 'globalInit' && typeof(ocj[o].ready) == 'function') ocj[o].ready();
    };
  }
};