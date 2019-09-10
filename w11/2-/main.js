$(document).ready(function(){

// $("p").on("mouseout mouseover",function(e){
//     $('this').toggleClass("light");
    
// });

$('p').on({
    mouseover:function(){
        $('body').css('background','lightgreen');

    },
    mouseout:function(){
        $('body').css('background','lightblue');

    },
    click:function(){
        $('body').css('background','orange');

    }
});


});


