
<%@ page language="java" pageEncoding="UTF-8" %><%! String basePath = "../../"; String htmlTitle = "首页"; %><%! String pluginCss = "../../common/theme/v1/css/index.css"; %><%! String pluginJs = ""; %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
<meta name="keywords" content="东方购物,网上购物,网络购物,安全购物,视频购物" />
<meta name="description" content="东方CJ(ocj.com.cn)中国第一家真正意义上的家庭购物公司，最为诚信的电视购物。这里有分期付款，轻松理财，感受惊喜，0首付，0利率，0手续费，让您提前拥有心仪商品。" />
<title><%=htmlTitle%> - 东方购物网上商城</title>
<link type="text/css" href="<%=basePath%>common/theme/v1/css/global.css" rel="stylesheet" /><% if (!pluginCss.equals("")) { String pluginCssArray[] = pluginCss.split(";"); for(String pluginCssItem:pluginCssArray) { %>
<link type="text/css" href="<%=pluginCssItem%>" rel="stylesheet" /><% } }%>
<script type="text/javascript" src="<%=basePath%>common/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<%=basePath%>common/js/jquery.plugin.park.js"></script>
<script type="text/javascript" src="<%=basePath%>common/js/ocj.park.js"></script>
<script type="text/javascript" src="<%=basePath%>common/js/ocj.globalInit.park.js"></script><% if (!pluginJs.equals("")) { String pluginJsArray[] = pluginJs.split(";"); for(String pluginJsItem:pluginJsArray) { %>
<script type="text/javascript" src="<%=pluginJsItem%>"></script><% } }%>

    <!DOCTYPE html>
    <html>
    <head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
    <meta name="keywords" content="东方购物,网上购物,网络购物,安全购物,视频购物" />
    <meta name="description" content="东方CJ(ocj.com.cn)中国第一家真正意义上的家庭购物公司，最为诚信的电视购物。这里有分期付款，轻松理财，感受惊喜，0首付，0利率，0手续费，让您提前拥有心仪商品。" />
    <title>首页 - 东方购物网上商城</title>
    <link type="text/css" href="../../common/theme/v1/css/global.css" rel="stylesheet" />
    <link type="text/css" href="../../common/theme/v1/css/index.css" rel="stylesheet" />
    <script type="text/javascript" src="../../common/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="../../common/js/jquery.plugin.park.js"></script>
    <script type="text/javascript" src="../../common/js/ocj.park.js"></script>
    <script type="text/javascript" src="../../common/js/ocj.globalInit.park.js"></script>
    </head>


</head>
<body>
<div id="headerBanner"><a href="#"><img src="<%=basePath%>pic/img.banner.1.jpg" alt="" /></a></div>
<div id="header">
  <div id="headerContent">
    <div class="logo"><a href="#"><img src="<%=basePath%>common/images/img.logo.jpg" alt="东方CJ" /></a></div>
    <div class="logo_etv"><a href="#"><img src="<%=basePath%>common/images/img.logo.etv.gif" alt="东方购物" /></a></div>
    <div class="logo_slider">
      <div class="logo_slider_box">
        <div class="logo_slider_box_content"><nobr><a href="#"><img src="<%=basePath%>pic/img.logo_slider.1.jpg" alt="" /></a><a href="#"><img src="<%=basePath%>pic/img.logo_slider.2.jpg" alt="" /></a></nobr></div>
      </div>
    </div>
    <div class="topmenu">
      <ul>
        <li><a href="#" title="首页">首页</a></li>
        <li><a href="#" title="TV购物">TV购物</a></li>
        <li><a href="#" title="嗨鸥团">嗨鸥团</a></li>
        <li><a href="#" title="特惠活动">特惠活动</a></li>
        <li><a href="#" title="品牌特卖">品牌特卖</a></li>
        <li><a href="#" title="销售排行">销售排行</a></li>
      </ul>
    </div>
    <div class="topmenu_right">
      <em class="tips"></em>
      <ul>
        <li class="one"><a href="#" title="精品馆">精品馆</a></li>
        <li class="two"><a href="#" title="玩具城">玩具城</a></li>
        <li class="three"><a href="#" title="看电影">看电影</a></li>
        <li class="four"><a href="#" title="俱乐部">俱乐部</a></li>
        <li class="five"><a href="#" title="移动版">移动版</a></li>
      </ul>
    </div>
    <div class="topsearch">
      <div class="topsearch_box"><form method="get"><input type="text" class="keyword" name="keyword" value="请输入品牌或商品名称搜索" mark="default-text" /><input type="image" class="submit" src="<%=basePath%>common/images/space.gif" /></form></div>
      <div class="topsearch_tips" style="display: none">
        <ul class="event">
          <li><a href="#">【活动】名品最高省300再返200</a></li>
          <li><a href="#">【活动】名品最高省300再返200</a></li>
        </ul>
        <ul class="keyword">
          <li><a href="#">电饭煲</a><span class="count">1502次</span></li>
          <li><a href="#">电吹风</a><span class="count">502次</span></li>
          <li><a href="#">电熨斗</a><span class="count">400次</span></li>
          <li><a href="#">电冰箱</a><span class="count">302次</span></li>
          <li><a href="#">电动车</a><span class="count">202次</span></li>
          <li><a href="#">电脑</a><span class="count">52次</span></li>
        </ul>
        <div class="close" mark="close" close_node="#headerContent .topsearch_tips">关闭</div>
      </div>
      <div class="topsearch_link">
        <ul>
          <li><a href="#">0利食品</a></li>
          <li><a href="#">空调冰洗节</a></li>
          <li><a href="#">最in搭配</a></li>
          <li><a href="#">名品新跳价</a></li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
    <div class="topbar">
      <span class="welcome">欢迎光临<em>OCJ.COM.CN</em></span>
      <span class="area" mark="hover" hover_class="area_on" onclick="ocj.maskShow($(this).next().html());"><b>上海</b></span>
      <div class="area_more hidden">
        <div class="area_select">
          <h3>选择您的地区</h3>
          <span class="close mask_close"></span>
          <div class="area_select_list">
            <dl class="clear_float">
              <dt>华东地区</dt>
              <dd><a class="on" href="#">上海</a></dd>
              <dd><a href="#">江苏|南京</a></dd>
              <dd><a href="#">浙江</a></dd>
              <dd><a href="#">安徽</a></dd>
              <dd><a href="#">山东</a></dd>
            </dl>
            <dl class="clear_float">
              <dt>华北东北</dt>
              <dd><a href="#">山西</a></dd>
              <dd><a href="#">黑龙江</a></dd>
            </dl>
            <dl class="clear_float">
              <dt>华中地区</dt>
              <dd><a href="#">湖北</a></dd>
            </dl>
            <dl class="clear_float">
              <dt>西南西北</dt>
              <dd><a href="#">四川</a></dd>
              <dd><a href="#">甘肃</a></dd>
              <dd><a href="#">云南</a></dd>
            </dl>
          </div>
          <div class="area_select_others">如果未列出您所在的地区，建议您进入<a href="#">点此进入</a></div>
        </div>
      </div>
      <div class="area_more hidden">
        <div class="area_select">
          <h3>已登录</h3>
          <span class="close mask_close"></span>
          <div class="area_select_done">您的账户地址为<b>上海</b>，系统自动帮您跳转至<em>上海站</em></div>
          <div class="area_select_done_tips"><span>登录后不能更改分站，如需更改分站请退出后再选择。</span></div>
          <div class="area_select_done_button"><button class="ok" onclick="$(this).parent().parent().find('.mask_close').click();">我知道了</button></div>
        </div>
      </div>
      <ul class="quicklink" mark="submenu" submenu_node="li.myocj" submenu_subnode="dl">
        <li><a href="#">登录</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">购物车</a></li>
        <li class="myocj"><a href="#">我的OCJ</a><dl><dt><a href="#">我的OCJ</a></dt><dd><a href="#">订单查询</a></dd><dd><a href="#">团购查询</a></dd><dd><a href="#">积分查询</a></dd><dd><a href="#">欧券查询</a></dd><dd><a href="#">我的收藏</a></dd><dd><a href="#">修改信息</a></dd></dl></li>
        <li><a href="#">顾客中心</a></li>
        <li class="last"><a href="#">礼品卡</a></li>
      </ul>
    </div>
  </div>
</div>


<%--变成jsp后去掉--%>
    <script type="text/javascript">
    $(document).ready(function() {
    ocj.globalInit.ready();
    });
    </script>
  </body>
</html>
<%--变成jsp后去掉--%>