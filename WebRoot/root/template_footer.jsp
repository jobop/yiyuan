<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.eypg.util.ApplicationListenerImpl"%>
<%@ taglib prefix="d" uri="http://www.opensymphony.com/sitemesh/decorator"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page session="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
  	<title><d:title default="<%=ApplicationListenerImpl.sysConfigureJson.getSaitTitle() %>"/></title>
  	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<meta name="description" content="<%=ApplicationListenerImpl.sysConfigureJson.getDescription() %>" />
	<meta name="keywords" content="<%=ApplicationListenerImpl.sysConfigureJson.getKeyword() %>" />
    <link rel="stylesheet" type="text/css" href="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/css/comm.css" />
    <link rel="stylesheet" type="text/css" href="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/css/header.css" />
    <script language="javascript" type="text/javascript" src="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/js/jquery181.js"></script>
    <d:head/>
  </head>
  <body<d:getProperty property="body.id" writeEntireProperty="true" /><d:getProperty property="body.class" writeEntireProperty="true" />>
         <!--顶部-->
 <div class="g-toolbar">
     <div class="w1190">
         <ul class="fl">
             <li class="f-collect">
                 <div class="u-menu-hd">
                     <a id="btnTFavorite" href="javascript:;" title="收藏">收藏</a>
                 </div>
             </li>
             <li class="f-gap"><s></s></li>
             <li id="liMobile" class="u-arr">
                 <div class="u-menu-hd">
                     <a href="/app/mobile.html" target="_blank" title="手机<%=ApplicationListenerImpl.sysConfigureJson.getShortName()%>">手机<%=ApplicationListenerImpl.sysConfigureJson.getShortName()%></a>
                     <div class="f-top-arrow"><cite>◆</cite><b>◆</b></div>
                 </div>
                 <div class="u-select">
                     <p>
                         <a href="/app/mobile.html" target="_blank">
                             <img src="/Images/1yyg-wx.png" />
                             下载客户端
                         </a>
                     </p>
                 </div>
             </li>
             <li class="f-gap"><s></s></li>
<!--             <li>-->
<!--                 <div class="u-menu-hd">-->
<!--                     <a href="/htm-qqgroup.html" target="_blank" title="官方QQ群">官方QQ群</a>-->
<!--                 </div>-->
<!--             </li>-->
         </ul>
         <ul id="ulTopRight" class="fr">
             <li id="liMember" class="u-arr-1yyg">
                 <div class="u-menu-hd">
                     <a href="/user/index.html?forward=myUser" title="我的<%=ApplicationListenerImpl.sysConfigureJson.getSaitName()%>">我的<%=ApplicationListenerImpl.sysConfigureJson.getSaitName()%></a>
                     <div class="f-top-arrow"><cite>◆</cite><b>◆</b></div>
                 </div>
                 <div class="u-select">
                     <span><a href="/user/UserBuyList.html" title="<%=ApplicationListenerImpl.sysConfigureJson.getShortName()%>记录"><%=ApplicationListenerImpl.sysConfigureJson.getShortName()%>记录</a></span>
                     <span><a href="/user/OrderList.html" title="获得的商品">获得的商品</a></span>
                     <span><a href="/user/MemberModify.html" title="个人设置">个人设置</a></span>
                 </div>
             </li>
             <li class="f-gap"><s></s></li>
             <li id="liTopUMsg" class="u-arr-news" style="display: none;">
                 <div class="u-menu-hd">
                     <a href="/user/userMessage.do" title="消息">消息</a>
                     <h3 style="display: none;"></h3>
                     <div class="f-top-arrow"><cite>◆</cite><b>◆</b></div>
                 </div>
                 <div class="u-select">
                     <span><a href="/user/FriendsApply.do" title="好友请求">好友请求</a></span>
                     <span><a href="/user/UserMessage.do" title="系统消息">系统消息</a></span>
                     <span><a href="/user/UserPrivMsg.do" title="私信" class="f-msg">私信</a></span>
                 </div>
             </li>
             <li class="f-gap" style="display: none;"><s></s></li>
             <li>
                 <div class="u-menu-hd">
                     <a href="/user/UserRecharge.html?forward=userRecharge" title="快速充值">快速充值</a>
                 </div>
             </li>
             <li class="f-gap"><s></s></li>
             <li>
                 <div class="u-menu-hd">
                     <a href="/help/whatPaigou.html" title="帮助">帮助</a>
                 </div>
             </li>
             <li class="f-gap"><s></s></li>
             <li class="f-zxkf">
                 <div class="u-menu-hd">
                     <a id="btnTopQQ" href="http://wpa.qq.com/msgrd?v=3&uin=<%=ApplicationListenerImpl.sysConfigureJson.getServiceQq()%>&site=qq&menu=yes" target="_blank" title="在线客服" class="u-service-off u-service"><i></i>在线客服</a>
                 </div>
             </li>
         </ul>
     </div>
 </div><!--头部-->
    <d:body/>
    <!-- 尾部开始 -->
<div class="footer">
	<div class="footer_links">
		<a rel="nofollow" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>">首页</a>
		<b></b>
  		<a rel="nofollow" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>/about/index.html">关于<%=ApplicationListenerImpl.sysConfigureJson.getShortName() %></a>
		<b></b>
  		<a rel="nofollow" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>/help/privacy.html">隐私声明</a>
		<b></b>
  		<a rel="nofollow" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>/about/jobs.html">加入<%=ApplicationListenerImpl.sysConfigureJson.getShortName() %></a>
		<b></b>
		<a rel="nofollow" href="<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>/about/Links.html">友情链接</a>
  	</div>
	<div class="copyright"> <%=ApplicationListenerImpl.sysConfigureJson.getIcp()%></div>
</div>
<!-- 尾部结束 -->
<div style="display: none;">
<script type="text/javascript">
var $img = "<%=ApplicationListenerImpl.sysConfigureJson.getImgUrl()%>";
var $skin = "<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>";
var $www = "<%=ApplicationListenerImpl.sysConfigureJson.getWwwUrl()%>";
var $domain = "<%=ApplicationListenerImpl.sysConfigureJson.getDomain()%>";
var $saitName = "<%=ApplicationListenerImpl.sysConfigureJson.getSaitName()%>";
var $shortName = "<%=ApplicationListenerImpl.sysConfigureJson.getShortName()%>";
</script>
<script language="javascript" type="text/javascript" src="<%=ApplicationListenerImpl.sysConfigureJson.getSkinUrl()%>/js/bottom2.js?data=20131121"></script>
</div>
  </body>
</html>
