/// calc Date thing
var now = new Date();
var day = now.getDay();
//day = 0;
var weekendText = "";

if(day == 0 || day == 6){
    weekendText = "It is the weekend!";
} else {
    var daysTillWeekend = 6 - day;
    weekendText = "It's " + daysTillWeekend + " Days until the weekend!"
}

// jquery

$("#submit").click(function(){
    //var name = $("#nameInput").val();
    var name = document.getElementById("nameInput").value;
    $("#yourName").text(name);
    $("#weekend").text(weekendText);
    if(name != ""){
        $("#enterName").addClass("hide");
        $("#greeting").removeClass("hide");
        
    } else {
        $("#enterName").removeClass("hide");
        $("#greeting").addClass("hide");
    }
})

