login={loginload:function(){function d(i){var h=/^1\d{10}$/;if(!h.exec(i)){return false}else{return true}}function g(h){var i=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(i.test(h)){return true}return false}function a(i){var h=/^[^ \f\n\r\t\v]{6,16}$/;if(!h.exec(i)){return false}return true}function e(h,i){document.cookie=h+"="+escape(i)+";id=1ypg;path=/;domain="+$domain}function f(i,k,h){var j=h;var l=new Date();l.setTime(l.getTime()+j*24*60*60*1000);document.cookie=i+"="+escape(k)+";id=1ypg;path=/;expires="+l.toGMTString()+";domain="+$domain}function c(i){var h=document.cookie.match(new RegExp("(^| )"+i+"=([^;]*)(;|$)"));if(h!=null){return unescape(h[2])}return null}function b(){$("#btnSubmitLogin").remove();$("#loginSubmitStatus").show()}$(function(){var t=$("#username");var o=$("#pwd");var k=$("#name_ts");var s=$("#pwd_ts");var v=null;var n=null;var i=1;var h=1;var q=function(x,w){x.attr("class","ts_wrong").html(w)};t.focus(function(){$(this).attr("class","text_name_focus")}).blur(function(){$(this).attr("class","text_name");if(i==0){k.attr("class","ts").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1")}});o.focus(function(){$(this).attr("class","text_password_focus")}).blur(function(){$(this).attr("class","text_password");if(h==0){s.attr("class","ts").html("\u8bf7\u586b\u5199\u957f\u5ea6\u4e3a6-16\u957f\u5ea6\u7684\u5b57\u7b26\u5bc6\u7801")}});var p=function(){v=t.val();n=o.val();if(v==""||(!d(v)&&!g(v))){i=0;t.focus();q(k,"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7/\u90ae\u7bb1");return false}if(n==""){h=0;o.focus();q(s,"\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801");return false}else{if(!a(n)){h=0;o.focus();q(s,"\u767b\u5f55\u5bc6\u7801\u4e3a6-16\u957f\u5ea6\u7684\u5b57\u7b26");return false}}i=1;h=1;return true};var r="";var m=$("#forward").val();var u=function(){if(!isLoaded){return}if(p()){if(r!=v){$.ajax({url:"/login/login.html",type:"post",data:"userName="+v+"&pwd="+n,beforeSend:b,success:function(w){if(w=="userError"){i=0;t.focus();q(k,"\u767B\u5F55\u5E10\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");$("#loginText").prepend('<input id="btnSubmitLogin" type="button" value="\u767b\u5f55" class="login_init" tabindex="3" />');$("#loginSubmitStatus").hide();r=v}else{if(w=="pwdError"){h=0;o.focus();q(s,"\u767B\u5F55\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");$("#loginText").prepend('<input id="btnSubmitLogin" type="button" value="\u767b\u5f55" class="login_init" tabindex="3" />');$("#loginSubmitStatus").hide()}else{if(w=="check"){i=0;t.focus();q(k,"\u6ce8\u518c\u7528\u6237\u6ca1\u6709\u9a8c\u8bc1\uff0c\u8bf7\u767b\u5f55\u90ae\u7bb1\u8fdb\u884c\u9a8c\u8bc1\uff01");$("#loginText").prepend('<input id="btnSubmitLogin" type="button" value="\u767b\u5f55" class="login_init" tabindex="3" />');$("#loginSubmitStatus").hide()}else{if(w.userId){e("userId",w.userId);e("face",w.faceImg)}if(w.userName){e("userName",w.userName)}else{if(w.mail){e("userName",w.mail)}else{if(w.phone){e("userName",w.phone)}}}e("loginType",0);if(m=="rego"){window.location.href=$www}else{if(m=="mycart"){window.location.href=$www+"/mycart/index.html"}else{if(m=="myUser"){window.location.href=$www+"/user/index.html"}else{if(m=="PostSingleList"){window.location.href=$www+"/user/PostSingleList.html"}else{if(m=="auth"){window.location.href=$www+"/referAuth.html"}else{if(m=="cartPay"){window.location.href=$www+"/cartPay/index.html"}else{if(m=="userRecharge"){window.location.href=$www+"/user/UserRecharge.html"}else{window.location.href=$www}}}}}}}}}}f("loginUser",v,365)},error:function(){alert("\u8FDE\u63A5\u670D\u52A1\u5668\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");window.location.href=$www}})}else{q(k,"\u767B\u5F55\u5E10\u53F7\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01");i=0;t.focus()}}};$("#LoginForm").keydown(function(w){var x=(window.event)?event.keyCode:w.keyCode;if(x==32){return false}else{if(x==13){u()}}return true});$("#btnSubmitLogin").live("click",function(){u()});var l=function(){GetLogoInfo(9,"getbysortid",false,function(w){$("#loadingPicBlock").html(w)})};isLoaded=true;var j=c("loginUser");if(j!=null){t.val(j);o.focus()}else{t.focus()}});QC.Login({btnId:"qqLoginBtn",scope:"get_user_info,add_share",size:"B_M"},function(h,i){if(QC.Login.check()){QC.Login.getMe(function(k,j){$.ajax({url:"/register/authorizeIsExists.action",type:"POST",data:"openId="+encodeURIComponent(k.replace(/(\/)/g,"")),success:function(l){if(l=="true"){$.ajax({type:"POST",url:"/register/authorizeRegsiter.action",data:"userName="+encodeURIComponent(h.nickname.replace(/(\/)/g,""))+"&openId="+k+"&userFace="+h.figureurl_2,success:function(m){e("userId",m.userId);e("userName",m.userName);e("face",m.faceImg);e("loginType",2);window.location.href="/register/qqUserInfoAuth.html"}})}else{e("userId",l.userId);e("userName",l.userName);e("face",l.faceImg);e("loginType",2);window.location.href="/register/qqUserInfoAuth.html"}}})})}})}};jQuery(function(a){login.loginload()});