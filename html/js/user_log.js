$(function(){
    // 功能一: 滑块验证
    var move=document.getElementById("move");
        div=move.getElementsByTagName("div");
        lang=div[1];
        bgcolor=div[0];
        txt=div[2];
        icon = move.querySelector(".lang svg use");
        
        span = txt.getElementsByTagName("span")[0]
        curtain = txt.getElementsByTagName("div")[0]
        // 滑块需要滑动的长度
        Lengths = (txt.clientWidth - lang.clientWidth)
    // 鼠标按下绑定事件
    
    lang.onmousedown=function(e){
        bgcolor.style.transition = "";
        lang.style.transition = "";
        

        // 按下时绑定鼠标移动事件
        var origin = e.clientX
        // console.log(origin)
        window.onmousemove = function(e){
            var left = e.clientX - origin;
            // console.log(left)
            if(left<Lengths && left>0){
                lang.style.left = left + "px";
                bgcolor.style.width = left + "px";
            }
            if(left >= (Lengths-13)){
                span.innerHTML = "验证通过";
                icon.setAttribute("xlink:href","#icon-jiazai");
                span.style.color = "white";
                lang.style.left = Lengths + "px";
                bgcolor.style.width = Lengths + "px";
                icon.setAttribute("xlink:href","#icon-chenggong");
                lang.onmousedown = null;
                window.onmousemove = null;
                return ;
            }
        }
        // 鼠标抬起
        window.onmouseup = function(){
            if(parseInt(lang.style.left) < Lengths){
                bgcolor.style.transition = ".5s";
                lang.style.transition = ".5s";
                bgcolor.style.width = 0 + "px";
                lang.style.left = 0 + "px";
            }
            window.onmousemove = null;
        }
    };


    // 功能二: 登录按钮ajax请求
    var login = document.getElementById("login");
    // 鼠标点击：
    login.onclick = loginJs;
    // 键盘按下：
    document.onkeydown = function(e){
        if(e.keyCode == 13){
            loginJs();
        }
    }
    function loginJs(){
        // var reg = /^$/
        var uname = $(".ipt_user")[0].value;
        var upwd = $(".ipt_pwd")[0].value;
        if(uname == "" || upwd == ""){
            alert("请输入用户名和密码")
            return ;
        }
        if(parseInt(lang.style.left) != Lengths){
            alert("请完成验证");
            return ;
        }
        $.ajax({
            url:`http://127.0.0.1:8080/login?uname=${uname}&upwd=${upwd}`,
            type:"get",
            data:{},
            success:function(res){
                if(res.code == -1){
                    alert("用户名密码有误");
                }
                if(res.code == 1){
                    alert("登录成功")
                    // .then(
                        // ()=>{
                            location.href="http://127.0.0.1:8081/sony.html"
                        // }
                    // )
                }
            }
        })
    }

    // 功能三: 清空输入框
    var delInput = document.querySelectorAll(".del_input");
    // console.log(delInput[0]);
    delInput[0].addEventListener("click",deleteInput);
    delInput[1].addEventListener("click",deleteInput);

    function deleteInput(){
        $(".ipt_user")[0].value = "";
        $(".ipt_pwd")[0].value = "";
    }
})
