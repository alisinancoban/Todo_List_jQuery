//Check Off Specifit todos By Clicking
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","li span", function(event){
    $(this).parent().fadeOut("slow",function(){
       $(this).remove(); 
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>"+ todoText +"</li>")
    } 
});

$(".fa-plus").click(function(){
    $("input[type='text']").slideToggle("slow");
    
});