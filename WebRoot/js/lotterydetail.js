var BuyFun=null;var PostFun=null;var PagePOPLoginOK=null;var CBLPageFun=null;var jiathis_config={url:location.href+"?s=shared",title:document.title};$(document).ready(function(){var n=$www;var o=$("#hidCodeID").val();var e=$("#hidGoodsID").val();var g=parseInt($("#hidLogined").val())==1;var c=parseInt($("#hidIsEnd").val())==1;var i=parseInt($("#hidIsStart").val())==1;var a=false;var sf=false;var f=$("#btnMyCart");var k=function(q,s){var u,w,p="";var v=String(q*100/s);if(v.indexOf(".")==-1){u=v;w="00"}else{u=v.substring(0,v.indexOf("."));w=v.substring(v.indexOf(".")+1)+"0"}for(var r=0;r<w.length;r++){var t=w.substring(r,r+1);p+=t;if(t!="0"&&r>0){break}}return u+"."+p+"%"};var m=$("#divNumber");var h=$("#divBuy");var d=function(F,x){var r=parseInt($("#CodeQuantity").html());var B=parseInt($("#CodeLift").html());var D=F.find("input.num_dig");var q=$("#chance");var A=1;var y=/^\d+$/;var v=function(H,G){q.html('<font color="ff6600">'+H+"</font>");A=G;D.val(G)};var p=function(G){A=G;D.val(G);var H=k(G,r);q.html("<font color='red'>\u83b7\u5f97\u673a\u7387 <b>"+H+"</b></font>")};D.bind("keyup",function(){var G=D.val();if(!y.test(G)){p(A)}else{if(G==0){v("\u6700\u5c11\u9700\u62cd\u8d2d1\u4eba\u6b21",1)}else{if(G<=B){p(G)}else{v("\u672c\u671f\u6700\u591a\u53ef\u62cd\u8d2d"+B+"\u4eba\u6b21",B)}}}}).mouseover(function(){$(this).focus().select()});var E=F.find("a").eq(0);var s=F.find("a").eq(1);var C=function(H){var G=D.val();if(y.test(G)){if(H=="add"){if(G<B){G++;if(G==B){s.addClass("num_ban")}E.removeClass("num_ban")}}else{if(G>1){G--;if(G==1){E.addClass("num_ban")}s.removeClass("num_ban")}}p(G)}};E.click(function(){C("sub")});s.click(function(){C("add")});var w=x.find("a").eq(0);var u=function(){var G=D.val();if(y.test(G)){}else{v("\u60a8\u8f93\u5165\u7684\u4eba\u6b21\u6709\u8bef\uff01",1)}};w.unbind("click").bind("click",function(){u()});var t=$("#imgGoodsPic");var z=function(){var H=D.val();var G=/^\d+$/;if(G.test(H)){var codeid=o;var json=getCookie("products");if(json==null||json==""){var val="[{'pId':"+codeid+",'num':1}]";SetCookieByExpires("products",val,H)}else{var flag=false;json=eval("("+json+")");$.each(json,function(n,value){if(codeid==value.pId){value.num=parseInt(value.num+1);flag=true}});if(!flag){json.push({pId:+codeid,num:H})}json=JSON.stringify(json);SetCookieByExpires("products",json,1)}$.ajax({url:"/mycart/getProductCartCount.html",type:"GET",success:function(data){IsCartChanged=true;$("#sCartTotal").html(data);J(data)}})}var J=function(K){var L=$('<div id="cart_shadow" style="display: none;border:1px solid #aaa;z-index: 9999;"><img src="'+t.attr("src")+'" width="100%" /></div>').prependTo("body");L.css({width:t.css("width"),height:t.css("height"),position:"absolute",top:$("#middlePicBox").offset().top,left:$("#middlePicBox").offset().left}).show();L.animate({width:f.width(),height:f.height(),top:f.offset().top,left:f.offset().left,opacity:0.5},{queue:false,duration:600,complete:function(){L.remove();f.html("<b>\u8d2d\u7269\u8f66</b><s></s><em>"+(K>99?"N+":K)+"</em>")}})}};x.find("a").eq(1).click(function(){z();return false});$("#btnAdd2Cart").click(function(){z();return false})};d(m,h);var b=function(){var p=$("#btnOpenPeriod");var E=false;if(p.length>0){p.click(function(){if(E){E=false;$(this).parent().parent().css("height","99px");$(this).html("\u5c55\u5f00<i></i>");if($(window).scrollTop()>$("div.Current_nav").offset().top+25){$("body,html").animate({scrollTop:0},0)}}else{E=true;$(this).parent().parent().css("height","");$(this).html("\u6536\u8d77<s></s>")}return false})}this.checkUserLoginFunEx=function(S){if(g){S()}else{var T=new popLogin();PagePOPLoginOK=function(){g=true;T.hide();S()};T.show()}};var G=false;var R=function(){if(g&&!G){}};var C=$("#divProductNav");var y=$("#divContent");var K=$("#divBuyRecord");var F=$("#divPost");C.find("li").each(function(S,T){var U=$(this);if(S==1&&c){U.remove()}else{U.click(function(){if(A){$("body,html").animate({scrollTop:D-1},0)}Q(U,S)});if(a&&S==1){U.addClass("DetailsTCur").siblings().removeClass("DetailsTCur");y.hide();K.show().next().hide();F.hide().prev().hide()}}});var Q=function(T,S){T.addClass("DetailsTCur").siblings().removeClass("DetailsTCur");switch(S){case 0:y.show();K.hide();F.hide();break;case 1:K.show();y.hide();F.hide();if(!a){getParticipatePage()}break;case 2:y.hide();K.hide();F.show();if(!sf){getShareListPage()}break}};var D=C.offset().top;var P=0;var r=0;var A=false;$(window).scroll(function(){x()});var x=function(){P=$(window).scrollTop();r=$(document.body).height();if(P>=D&&P<=r-795){A=true;C.addClass("nav-fixed")}else{A=false;C.removeClass("nav-fixed")}};if(c||!i){}else{var q=function(){var U=false;var W=10;var T=1;var aa={codeID:o,FIdx:1,EIdx:W,isCount:1};var V=new Object();var Z=0;var S=K.children().eq(0);var ab=function(){var ac="";ac+="codeID="+aa.codeID;ac+="&FIdx="+aa.FIdx;ac+="&EIdx="+aa.EIdx;ac+="&isCount="+aa.isCount;return ac};var X=function(ac){S.hide();K.append(ac)};this.gotoPageIndex=function(ac,ad){if(U){Q(C.find("li").eq(1),1);if(A){$("body,html").animate({scrollTop:D-1},0)}}T=Math.floor(ad/W);K.children('div[name="bitem"]').remove();if(V["page"+T]!=null){X(V["page"+T])}else{if(T>1){aa.isCount=0}aa.codeID=o;aa.FIdx=ac;aa.EIdx=ad;Y()}};this.initData=function(){if(!U){BuyFun.gotoPageIndex(1,W)}}}}var v=$(".Announced_FrameBut > a").eq(0);if(v.length>0){v.click(function(){$("#liUserBuyAll").prev().addClass("DetailsTCur").siblings().removeClass("DetailsTCur");y.show();K.hide();F.hide();$("body,html").animate({scrollTop:D-1},0);return false})}var u=$(".Announced_FrameBut > a").eq(2);if(u.length>0){u.click(function(){$("#liUserBuyAll").next().addClass("DetailsTCur").siblings().removeClass("DetailsTCur");F.show();K.hide();y.hide();$("body,html").animate({scrollTop:D-1},0);return false})}$(".Announced_FrameBut > a:eq(1)").unbind("click").bind("click",function(){$("body,html").animate({scrollTop:D-1},0);$("#liUserBuyAll").addClass("DetailsTCur").siblings().removeClass("DetailsTCur");K.show();F.hide();y.hide();if(!a){getParticipatePage()}return false}).parent().show();isLoaded=true;x()};b();var j=function(){var u=$("#userRnoId");var m=u.children("dl");var q=0;m.each(function(){q+=$(this).height()});if(q>90){var s=function(){var w=$("#userRnoId",$(this).prev());if($(this).attr("class")=="MaOff"){w.attr("class","MaCenterC");$(this).attr("class","MaOpen").html("<span>\u6536\u8d77<s></s></span>")}else{$(this).attr("class","MaOff").html("<span>\u5c55\u5f00\u67e5\u770b\u5168\u90e8 <s></s></span>");w.attr("class","MaCenterH")}};$("#divOpen").bind("click",s).show()}else{$("#divOpen").hide()}};j();function getShareListPage(){var resultCount=$("#pageCount").val();var pageNo=0;var id=$("#productId").val();$("#pagination2").pagination(resultCount,{current_page:pageNo,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:20,callback:pageselectCallback2});function pageselectCallback2(pageNo){$.ajax({url:"/shareShow/productInfoShareListByProductId.action",data:"id="+id+"&pageNo="+pageNo,beforeSend:loading,success:function(Z){if(Z.length>0){$("#shareByListDIV").empty();$(".pageULEx2").prepend('<li class="total_page">\u9875\u6b21<i>'+(pageNo+1)+"/"+Math.ceil(resultCount/20)+"</i>&nbsp;&nbsp;\u5171<i>"+resultCount+"</i>\u6761\u8bb0\u5f55</li>");var aa=Z.length;var Y="";for(var X=0;X<aa;X++){Y+='<div class="Single_list">';Y+='<div class="SingleL fl Topiclist-img"><a class="head-img" href="/u/'+Z[X].userId+'.html" type="showCard" uweb="'+Z[X].userId+'"  target="_blank"><img border="0" alt="" src="'+Z[X].userFace+'"></a><a class="blue" href="/u/'+Z[X].userId+'.html" target="_blank" rel="nofollow" type="showCard" uweb="'+Z[X].userId+'">'+Z[X].userName+'</a></div><div class="SingleR fl"><div class="SingleR_TC"><i></i> <s></s><h3><span class="gray02">\u7b2c'+Z[X].productPeriod+'\u671f\u6652\u5355</span> <a href="/shareShow/'+Z[X].uid+'.html" target="_blank">'+Z[X].shareTitle+'</a><em class="gray02">'+Z[X].shareDate+'</em></h3><p class="gray01">'+Z[X].shareContent+'</p></div><ul class="SingleR_pic">';var V=Z[X].shareimageList;for(var W=0;W<V.length;W++){Y+='<li><img src="'+$img+"/UserPost/Small/"+V[W].images+'"/></li>'}Y+='</ul><div class="SingleR_Comment" postID="'+Z[X].uid+'" count="'+Z[X].replyCount+'"><div class="Comment_smile gray02"><span><i></i>'+Z[X].upCount+"\u4eba\u7fa1\u6155\u5ac9\u5992\u6068</span><span><s></s>"+Z[X].replyCount+"\u6761\u8bc4\u8bba</span></div></div></div></div>"}$("#shareByListDIV").html(Y);$(".goods_loding").hide()}else{$(".NoConMsg").show();$(".goods_loding").hide()}}})}sf=true}function getParticipatePage(){var resultCount=$("#resultCount").val();var pageNo=0;var id=$("#hidGoodsID").val();$("#pagination").pagination(resultCount,{current_page:pageNo,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:20,callback:pageselectCallback});function pageselectCallback(pageNo){var url="/lotteryDetail/buyListAjaxPage.action?id="+id+"&pageNo="+pageNo;$.ajax({url:url,type:"post",data:"json",beforeSend:loading,success:function(data){$("#userByListDIV").empty();$(".pageULEx").prepend('<li class="total_page">\u9875\u6b21<i>'+(pageNo+1)+"/"+Math.ceil(resultCount/20)+"</i>&nbsp;&nbsp;\u5171<i>"+resultCount+"</i>\u6761\u8bb0\u5f55</li>");var ai=data;var aj=function(ak){var al='<div class="AllRecW AllReclist">';al+='<div class="AllRecL fl">'+ak.buyDate+"<i></i></div>";al+='<div class="AllRecR fl"><p class="AllRecR_T"><span name="spCodeInfo" isLoad="0" buyid="'+ak.buyId+'" isShow="0" class="AllRecR_Over"><a class="Headpic" target="_blank" href="'+$www+"/u/"+ak.userId+'.html" title="'+ak.userName+'"><img border=0 width="20" height="20" alt="" uweb="'+ak.userId+'" src="'+ak.userFace+'" ></a><a target="_blank" href="'+$www+"/u/"+ak.userId+'.html" class="blue" uweb="'+ak.userId+'" title="'+ak.userName+'">'+ak.userName+"</a>("+ak.ip_location+" IP:"+ak.ip_address+")"+$shortName+'\u4e86<em class="Fb orange">'+ak.buyCount+"</em>\u4eba\u6b21";al+='<a name="btnShow" style="display:none;"  class="AllRecR_See" href="javascript:;">\u67e5\u770b'+$shortName+"\u7801<s></s></a></span></p></div></div>";return al};var ah="";var ad="";var af=null;var ac='<div name="bitem" class="AllRecordCon">';for(var ag=0;ag<ai.length;ag++){ah=ai[ag].buyDate;af=ah.split(" ");if(ag==0){ad=af[0];ac+='<div class="AllRecW AllRecTime"><p>'+af[0]+"</p> <b></b></div>"}else{if(ad!=af[0]){ad=af[0];ac+='<div class="AllRecW All_lineH"></div>';ac+='<div class="AllRecW AllRecTime"><p>'+af[0]+"</p> <b></b></div>"}}ac+=aj(ai[ag])}ac+="</div>";$(ac).appendTo("#userByListDIV");$(".goods_loding").hide();a=true;var G=function(){$("#divBuyRecord").find("span[name='spCodeInfo']").each(function(){var P=$(this);var N=P.find("a[name='btnShow']");var O=0;P.children("a:lt(2)").click(function(Q){B(Q);window.open(n+"/u/"+$(this).attr("uweb")+".html");return false});P.find("a.terminal").click(function(Q){B(Q);window.open($(this).attr("page"));return false});P.click(function(){N.hide();var R=parseInt(P.attr("isLoad"));if(R==0){P.attr("isLoad","1");var Q=P.attr("buyid");$.ajax({url:"/lotteryDetail/getUserBuyCodeByBuyid.action",data:"spellbuyrecordId="+Q+"&id="+o,success:function(s){if(s!="false"){var W=s;var Y=W.length;var T=Y>80?180:(parseInt(Y/8)+1)*18;var X='<p class="AllRecR_Code gray02" style="height:'+T+'px;">';for(var U=0;U<Y;U++){X+="<b>"+W[U]+"</b>"}X+='</p><a class="AllRecR_close" href="javascript:;" title="\u6536\u8d77"></a>';if(Y>80){X+='<div name="showAll" class="MaOff"><span>\u5c55\u5f00\u67e5\u770b\u5168\u90e8<s></s></span></div>'}P.attr("isShow","1");var V=P.parent().parent();V.addClass("AllRecRCur").append(X);V.find("a.AllRecR_close").click(function(){P.attr("isShow","0").parent().nextAll().hide();P.parent().parent().removeClass("AllRecRCur");return false});V.find("div[name='showAll']").click(function(){if($(this).attr("class")=="MaOff"){$(this).attr("class","MaOpen").html("<span>\u6536\u8d77<s></s></span>");P.parent().next().height("")}else{$(this).attr("class","MaOff").html("<span>\u5c55\u5f00\u67e5\u770b\u5168\u90e8<s></s></span>");$("body,html").animate({scrollTop:O},0);P.parent().next().height(T);P.attr("isShow","0").parent().nextAll().hide();P.parent().parent().removeClass("AllRecRCur")}return false})}else{P.attr("isLoad","0")}}})}else{P.attr("isShow","1").parent().nextAll().show().parent().addClass("AllRecRCur")}return false});P.hover(function(){O=$(window).scrollTop();if(P.attr("isShow")=="0"){P.css("cursor","pointer");N.show()}else{P.css("cursor","")}},function(){N.hide()})})};G();var B=function(N){if(N&&N.stopPropagation){N.stopPropagation()}else{window.event.cancelBubble=true}}}})}}function loading(){$(".goods_loding").show()}var loaded=false;function show(){var top=$(".Roll_Con").offset().top;if(!loaded&&$(window).scrollTop()+$(window).height()>top){$.ajax({url:"/lottery/upcomingAnnouncedByTop.action?pageNo="+1+"&pageSize="+10,type:"get",data:"json",success:function(data){for(var i=0;i<data.length;i++){$('<li id="'+i+'"><div class="pic"><a title="'+data[i].productTitle+'" target="_blank" href="'+$www+"/products/"+data[i].productId+'.html" rel="nofollow"><img alt="'+data[i].productName+'" src="'+$img+data[i].headImage+'"></a></div><p class="name"><a title="'+data[i].productTitle+'" target="_blank" href="'+$www+"/products/"+data[i].productId+'.html">'+data[i].productName+'</a></p><p class="money">\u4ef7\u503c\uff1a<span class="rmbgray">'+data[i].productPrice+'.00</span></p><div class="go_buy"><a rel="nofollow" class="go_Shopping12" title="\u7acb\u53731\u5143'+$shortName+'" target="_blank" href="'+$www+"/products/"+data[i].productId+'.html">\u7acb\u53731\u5143'+$shortName+"</a></div></li>").appendTo("#ulRecommend")}$.getScript($skin+"/js/recommendpicfun.js")}});loaded=true}}$(window).scroll(show)});