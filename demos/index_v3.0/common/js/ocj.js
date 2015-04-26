var ocj = {
  lazyResponsePara: [],
  $I: function(_id)
  {
    return document.getElementById(_id);
  },
  $F: function(_id)
  {
    var tthis = this;
    var tid = _id;
    var tobj = null;
    try
    {
      tobj = document.frames[tid];
    } catch(e){};
    if (tobj == null)
    {
      try
      {
        tobj = tthis.$I(tid).contentWindow;
      } catch(e){};
    };
    return tobj;
  },
  checkHover: function(_e, _target)
  {
    var te = _e;
    var ttarget = _target;
    var tthis = this;
    if (tthis.getEvent(te).type == 'mouseover')
    {
      return !tthis.checkContains(ttarget, tthis.getEvent(te).relatedTarget || tthis.getEvent(te).fromElement) && !((tthis.getEvent(te).relatedTarget || tthis.getEvent(te).fromElement) === ttarget);
    }
    else
    {
      return !tthis.checkContains(ttarget, tthis.getEvent(te).relatedTarget || tthis.getEvent(te).toElement) && !((tthis.getEvent(te).relatedTarget || tthis.getEvent(te).toElement) === ttarget);
    };
  },
  checkContains: function(_parentNode, _childNode)
  {
    var tchildNode = _childNode;
    var tparentNode = _parentNode;
    if (tparentNode.contains)
    {
      return tparentNode != tchildNode && tparentNode.contains(tchildNode);
    }
    else
    {
      return !!(tparentNode.compareDocumentPosition(tchildNode) & 16);
    };
  },
  cinstr: function(_strers, _str, _spstr)
  {
    var tstrers = _strers;
    var tstr = _str;
    var tspstr = _spstr;
    var tbool = false;
    if (tstrers)
    {
      if (tstrers.indexOf(tspstr + tstr + tspstr) != -1) tbool = true;
      else
      {
        if (tstrers.substr(0, tstrers.indexOf(tspstr)) == tstr) tbool = true;
        else
        {
          if (tstrers.substr(tstrers.lastIndexOf(tspstr) + tspstr.length) == tstr) tbool = true;
        };
      };
    };
    return tbool;
  },
  cookieSet: function(_name, _value, _expire)
  {
    var tname = _name;
    var tvalue = _value;
    var texpire = _expire;
    var tCookieString = tname + '=' + encodeURIComponent(tvalue);
    if( texpire > 0)
    {
      var tCurrentDate = new Date();
      tCurrentDate.setTime(tCurrentDate.getTime + texpire);
      tCookieString = tCookieString + "; expires=" + tCurrentDate.toGMTString();
    };
    document.cookie = tCookieString;
  },
  cookieGet: function(_name)
  {
    var tname = _name;
    var tCookie = document.cookie;
    var tCookieValue = '';
    var tCookieArray = tCookie.split('; ');
    for(var ti = 0; ti < tCookieArray.length; ti ++)
    {
      var tCookieString = tCookieArray[ti].split('=');
      if (tCookieString.length == 2)
      {
        if(tname == tCookieString[0])
        {
          tCookieValue = decodeURIComponent(tCookieString[1]);
          break;
        };
      };
    };
    return tCookieValue;
  },
  getEvent: function(_e)
  {
    return _e || window.event;  
  },
  htmlEncode: function(_strers)
  {
    var tstrers = _strers;
    tstrers = tstrers.replace(/(\&)/g, '&amp;');
    tstrers = tstrers.replace(/(\>)/g, '&gt;');
    tstrers = tstrers.replace(/(\<)/g, '&lt;');
    tstrers = tstrers.replace(/(\")/g, '&quot;');
    return tstrers;
  },
  isIE6: function()
  {
    return !-[1,] && !window.XMLHttpRequest;
  },
  lazyResponse: function(_id, _timeout, _function, _arg)
  {
    var tthis = this;
    var tid = _id;
    var ttimeout = _timeout;
    var tfunction = _function;
    var targ = _arg;
    tthis.lazyResponsePara[tid] = setTimeout(function(){ if (!targ) tfunction(); else tfunction(targ); }, ttimeout);
  },
  lazyResponseCancel: function(_id)
  {
    var tthis = this;
    var tid = _id;
    clearTimeout(tthis.lazyResponsePara[tid]);
  },
  maskShow: function(_html)
  {
    var tthis = this;
    var thtml = _html;
    var tCreateDiv = function()
    {
      var tMask = document.createElement('div');
      tMask.setAttribute('id', 'jMask');
      tMask.style.position = 'absolute';
      tMask.style.top = '0';
      tMask.style.left = '0';
      tMask.style.background = '#000000';
      tMask.style.filter = 'Alpha(Opacity=30)';
      tMask.style.opacity = '0.3';
      tMask.style.width = document.documentElement.scrollWidth + 'px';
      tMask.style.height = document.documentElement.scrollHeight + 'px';
      tMask.style.zIndex = '999999997';
      document.body.appendChild(tMask);
      if (tthis.isIE6())
      {
        var tIFrame = document.createElement('iframe');
        tIFrame.setAttribute('id', 'jMaskIFrame');
        tIFrame.style.position = 'absolute';
        tIFrame.style.top = '0';
        tIFrame.style.left = '0';
        tIFrame.style.background = '#000000';
        tIFrame.style.filter = 'Alpha(Opacity=0)';
        tIFrame.style.opacity = '0';
        tIFrame.style.width = document.documentElement.scrollWidth + 'px';
        tIFrame.style.height = document.documentElement.scrollWidth + 'px';
        tIFrame.style.zIndex = '999999998';
        document.body.appendChild(tIFrame);
      };
      var tMaskDIV = document.createElement('div');
      tMaskDIV.setAttribute('id', 'jMaskDIV');
      tMaskDIV.style.position = 'absolute';
      tMaskDIV.style.top = '50%';
      tMaskDIV.style.left = '50%';
      tMaskDIV.style.zIndex = '999999999';
      document.body.appendChild(tMaskDIV);
      $(window).resize(function(){
        var tclientWidth = document.documentElement.clientWidth;
        var tclientHeight = document.documentElement.clientHeight;
        $('#jMask').css({'width': tclientWidth + 'px', 'height': tclientHeight + 'px'});
        $('#jMask').css({'width': document.documentElement.scrollWidth + 'px', 'height': document.documentElement.scrollHeight + 'px'});
        $('#jMaskIFrame').css({'width': tclientWidth + 'px', 'height': tclientHeight + 'px'});
        $('#jMaskIFrame').css({'width': document.documentElement.scrollWidth + 'px', 'height': document.documentElement.scrollHeight + 'px'});
        var tjMaskDIVObj = $('#jMaskDIV');
        tjMaskDIVObj.css({'top': '50%', 'marginTop': ($(window).scrollTop() - Math.floor(tjMaskDIVObj.height() / 2)) + 'px'});
        if (tjMaskDIVObj.offset().top < 20) tjMaskDIVObj.css({'top': '20px', 'marginTop': '0px'});
      });
      return tMaskDIV;
    };
    var tmaskObj = tthis.$I('jMaskDIV');
    if (!tmaskObj) tmaskObj = tCreateDiv();
    $(tmaskObj).html(thtml);
    $(tmaskObj).css({'marginLeft': (0 - Math.floor($(tmaskObj).width() / 2)) + 'px'});
    $(tmaskObj).css({'marginTop': ($(window).scrollTop() - Math.floor($(tmaskObj).height() / 2)) + 'px'});
    $(tmaskObj).find('.mask_close').click(function(){
      $('#jMask').remove();
      $('#jMaskDIV').remove();
      $('#jMaskIFrame').remove();
    });
  },
  maskShowAlert: function(_title, _message, _button)
  {
    var tthis = this;
    var ttitle = _title;
    var tmessage = _message;
    var tbutton = _button;
    var thtml = '<div class="popup1"><div class="mask"></div><div class="mask_close"></div><div class="main_content"><h3>' + ttitle + '</h3><p class="message">' + tmessage + '</p><p class="button"><span class="ok" onclick="$(this).parent().parent().parent().find(\'.mask_close\').click();">' + tbutton + '</span></p></div></div>';
    tthis.maskShow(thtml);
  },
  maskShowURL: function(_url, _width, _height, _scrolling)
  {
    var tthis = this;
    var turl = _url;
    var twidth = _width;
    var theight = _height;
    var tscrolling = _scrolling;
    if (!tscrolling) tscrolling = 'no';
    var thtml = '<div class="popup1" style="width:' + (twidth + 10) + 'px"><div class="mask"><span class="mask_close hidden"></span></div><div class="main_content"><iframe src="' + turl + '" frameborder="0" scrolling="' + tscrolling + '" width="' + twidth + '" height="' + theight + '"></iframe></div></div>';
    tthis.maskShow(thtml);
  },
  request: function(_para)
  {
    var tmpstr = '';
    var tpara = _para;
    var tstrers = location.href;
    var tiname, tivalue, ticount;
    var tinum = tstrers.indexOf('?');
    tstrers = tstrers.substr(tinum + 1);
    var tarrtmp = tstrers.split('&');
    for(ticount = 0; ticount < tarrtmp.length; ticount ++)
    {
      tinum = tarrtmp[ticount].indexOf('=');
      if(tinum > 0)
      {
        tiname = tarrtmp[ticount].substring(0, tinum);
        tivalue = tarrtmp[ticount].substr(tinum + 1);
        if (tpara == tiname) tmpstr += tivalue + ',';
      };
    };
    if (tmpstr != '') tmpstr = tmpstr.substr(0, tmpstr.length - 1);
    return tmpstr;
  }
};