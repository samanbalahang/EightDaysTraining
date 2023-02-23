$(function(){
    $(".check").on("click",function(e){
        $(this).siblings('.situ').val(1);
        $(this).siblings('.close').remove();
        $(this).addClass("disabled");
        changesum($(this));
    });

    $(".close").on("click",function(e){
        $(this).siblings('.situ').val(0);
        $(this).addClass("disabled");
    });

    function changesum(e) {
    let last = $(e).parents('tr').children().last().text();
    if(last == ""){
        $(e).parents('tr').children().last().text("1");
    }else{
        last = parseInt(last);
        last++;
        $(e).parents('tr').children().last().text(last);
    }
    }
});
