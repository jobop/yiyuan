$(document).ready(function(){var d=$skin;var c=function(){var a=$("#butSubmit");a.bind("click",function(){if(!isLoaded){return}a.val("\u6b63\u5728\u53d1\u9001...");isLoaded=false;var b=$("#hidEmail").val();$.ajax({url:"/user/EmailSending.html",data:"userJSON="+b,success:function(e){if(e=="0"){OKDialog("\u53d1\u9001\u6210\u529f\uff0c\u6ce8\u610f\u67e5\u6536\uff01")}else{if(e=="false"){FailDialog("\u53d1\u9001\u5931\u8d25\uff0c\u7a0d\u540e\u518d\u8bd5\uff01")}else{FailDialog("\u4e0d\u8981\u91cd\u8bd5\u592a\u5feb\u54e6\uff01");a.val("\u91cd\u53d1\u9a8c\u8bc1\u90ae\u4ef6")}}isLoaded=true},error:function(){alert("\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5!")}})});isLoaded=true};c()});