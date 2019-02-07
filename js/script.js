$(window).on("scroll",function(){
    let positionY =$(this).scrollTop();
    console.log(positionY);

    if(positionY > 1213){
        $("#scrollToTop").css("opacity" , 1)
    }
})