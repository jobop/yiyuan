var funParabola=function(P,y,L){var c=0;var H=$(window).scrollTop();var K={speed:166.67,curvature:0.001,progress:function(){},complete:function(){}};var C={};L=L||{};for(var a in K){C[a]=L[a]||K[a]}var b={mark:function(){return this},position:function(){return this},move:function(){return this},init:function(){return this}};var O="margin",A=document.createElement("div");if("oninput" in A){["","ms","webkit"].forEach(function(d){var e=d+(d?"T":"t")+"ransform";if(e in A.style){O=e}})}var z=C.curvature,B=0,D=0;var I=true;if(P&&y&&P.nodeType==1&&y.nodeType==1){var E={},J={};var M={},F={};var N={},G={};b.mark=function(){if(typeof N.x=="undefined"){this.position()}return this};b.position=function(){if(I==false){return this}var d=document.documentElement.scrollLeft||document.body.scrollLeft,e=document.documentElement.scrollTop||document.body.scrollTop;if(O=="margin"){P.style.marginLeft=P.style.marginTop="0px"}else{P.style[O]="translate(0, 0)"}E=P.getBoundingClientRect();J=y.getBoundingClientRect();M={x:E.left+(E.right-E.left)/2+d,y:E.top+(E.bottom-E.top)/2+e};F={x:J.left+(J.right-J.left)/2+d,y:J.top+(J.bottom-J.top)/2+e};G={x:-1*(M.x-F.x),y:-1*(M.y-F.y)};B=(G.y-z*G.x*G.x)/G.x;return this};b.move=function(){if(I==false){return this}var e=0,d=G.x>0?1:-1;var f=function(){var j=2*z*e+B;e=e+d*Math.sqrt(C.speed/(j*j+1));if((d==1&&e>G.x)||(d==-1&&e<G.x)){e=G.x}var i=e,h=z*i*i+B*i;var g=$(window).scrollTop()-H;c+=g;h+=c;if(O=="margin"){P.style.marginLeft=i+"px";P.style.marginTop=h+"px"}else{P.style[O]="translate("+[i+"px",h+"px"].join()+")"}if(e!==G.x){b.position();C.progress(i,h);window.requestAnimationFrame(f)}else{C.complete();I=true}H=$(window).scrollTop()};window.requestAnimationFrame(f);I=false;return this};b.init=function(){this.position().mark().move()}}return b};
/*! requestAnimationFrame.js
 * by zhangxinxu 2013-09-30
*/
(function(){var d=0;var f=["webkit","moz"];for(var e=0;e<f.length&&!window.requestAnimationFrame;++e){window.requestAnimationFrame=window[f[e]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[f[e]+"CancelAnimationFrame"]||window[f[e]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(a,i){var j=new Date().getTime();var c=Math.max(0,16.7-(j-d));var b=window.setTimeout(function(){a(j+c)},c);d=j+c;return b}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(a){clearTimeout(a)}}}());$.fn.shake=function(e,f,d){this.each(function(){var a=$(this);var b=7;for(var c=1;c<=e;c++){a.animate({left:(f*-1)+b},(((d/e)/4))).animate({left:f+b},((d/e)/2)).animate({left:b},(((d/e)/4)))}});return this};var showParabola=function(t,r,E,w){var s=$(E);var u=$(t);if(s.length==0||u.length==0){return}var B=s.attr("src");var F=$('<div  style="display: none;z-index: 100;"><img style="border-radius:40px; border:2px solid #ff6600;" src="'+B+'" width="100%" /></div>').prependTo("body");F.css({width:40,height:40,position:"absolute",top:u.offset().top,left:u.offset().left}).show();var v=$("#ulRToolList").children("li.f-shopping-cart").find("i");var C=F.get(0);var G=v.get(0);var y=v.offset().left-u.offset().left;var A=600;var z=0.001;if(y<200){A=300;z=0.005}else{if(y<500){A=400;z=0.004}else{if(y<800){A=500;z=0.002}else{if(y<1100){A=600;z=0.001}}}}var D=function(){return $.browser.msie&&parseInt($.browser.version)==7};var H=function(){var a=$("#ulRToolList").children("li:first").find("a");var b=$('<strong class="f-fly-num">+'+r+"</strong>").prependTo(a);b.css({position:"absolute",left:13,top:3}).show();b.animate({opacity:0.1,top:-50},{queue:false,duration:1000,complete:function(){b.remove()}})};var x=funParabola(C,G,{speed:A,curvature:z,progress:function(d,a){var c=v.offset().left-$(C).offset().left;var b=v.offset().top-$(C).offset().top;if(c<=50&&b<=50){$(C).width(20);$(C).height(20)}},complete:function(){$(C).remove();v.shake(3,3,200);H();w()}}).init()};