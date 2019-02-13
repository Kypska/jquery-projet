$(window).on("scroll",function(){
    let positionY =$(this).scrollTop();
    console.log(positionY);

    if(positionY > 1213){
        $("#scrollToTop").css("opacity" , 1);
    }
    if(positionY < 1213){
        $("#scrollToTop").css("opacity" , 0);
    }

    if(positionY > 100){
        $("#nav-bar").css("height",80)
                     .css("position","fixed")
                     .css("width","100%")
    }
})