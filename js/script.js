$(window).on("scroll",function(){
    let positionY =$(this).scrollTop();
    console.log(positionY);

    if(positionY > 1213){
        $("#scrollToTop").css("opacity" , 1)
    }
    else if(positionY < 100){
        $("#menu").css("opacity" , 1)
    }
})