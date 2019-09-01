$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            // console.log(result)
            $(result).replaceAll("#header");
            // 为引入的header标签绑定事件
            $("#log_reg>span:first-child").click(function(){
                $(".backg").addClass("active")
                $("#login").addClass("active")
            });
            $("#login .close").click(function(){
                $("#login").removeClass("active")
                $(".backg").removeClass("active")
            })
            $("#reg_img").click(function(){
                $("#login>div:first-child").removeClass("active")
                $("#login>div:nth-child(2)")
            })
        }
    })
    

})