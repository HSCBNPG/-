// 绑定DOM元素加载后就提前执行的事件
$(function(){
    $("#log_reg>span:first-child").click(function(){
        $(".backg").addClass("active")
        $("#login").addClass("active")
    });
    $("#login .close").click(function(){
        $("#login").removeClass("active")
        $(".backg").removeClass("active")
    })
})
