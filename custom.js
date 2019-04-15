$(document).ready(function(){
  $("body,html").stop().animate({"scrollTop":0},1500,"swing");
   $(window).scroll(function(){ var scroll = $(this).scrollTop();  for(var i=0; i<5; i++){
     $("section>article").eq(i).css({"transform":"translateZ("   + parseInt((-5000*i)+scroll)   +  "px)"}); if(scroll>=i*5000-2500&&scroll<(i+1)*5000-2500){
       $(".scrollNavi li").removeClass(); $(".scrollNavi li").eq(i).addClass("on");
       $("article").removeClass();
       $("article").eq(i).addClass("on"); }; };  });
       $(".scrollNavi li").on("click",function(){ var a =
         $(this).index();
         $("body,html").stop().animate({"scrollTop":5000*a},1500,"swing"); });
         $("body").on("mousemove",function(e){ var posX = e.pageX/100; var posY = e.pageY/150;});  });
