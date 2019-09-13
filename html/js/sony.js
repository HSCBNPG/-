// 绑定DOM元素加载后就提前执行的事件
$(function(){
    window.onscroll=function(){
        // console.log($("#log_reg>span:first-child"))
        $("#log_reg>span:first-child")
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrollTop>=500){
            $("#header").addClass("fixed");
        }else{
            $("#header").removeClass("fixed")
        }
    }
})
