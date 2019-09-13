$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(result){
            $(result).replaceAll($("#footer"));
            $(`<link rel="stylesheet" href="sony_css/footer.css">`).appendTo($("head"));
        }
    })
})