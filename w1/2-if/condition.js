// if statement

var lineBreak = "<br><br>";

var myStrg = "My name is Joe. I'm 16 years old. My hometown is Alabama."


document.write();

document.write(myStrg + lineBreak);
document.write(myStrg.indexOf("is"));
document.write(myStrg.lastIndexOf("is"));
document.write(myStrg.search("name"));
document.write(lineBreak);

document.write(myStrg.substring(20,34));

document.write(lineBreak);

var myString = "Natalie \"Viola\" Gornicki";
document.write(myString + lineBreak);

var time = new Date;

var hour = time.getHours();
var minute = time.getMinutes();
var lunchtime = 13;
var endTime = 16;

if (hour == lunchtime) {
    document.write("It's time for lunch!");
} else if (hour < lunchtime) {
    document.write(
        "It's " + hour + ":" + minute + 
        ". This is not the time for lunch.<br> You have to wait " + 
        (lunchtime - 1 - hour) + " hour/s and " + 
        (60 - minute) + " minutes.");
} else if (hour > endTime) {
    document.write("We need to go home! School has been over for " + (hour - endTime) + " hours");
} else {
    document.write("Lunchtime is over!")
}

document.write(lineBreak);

var age = 12;
var drivingAge = 18;


driverAgeCheck = function(age) {
    if (age > 100) {
        document.write("You are " + age + ". You shouldn't drive anymore");
    } else if (age >= 18) {
        document.write("You are " + age + ". You can drive alone.")
    } else if (age == 17) {
        document.write("You are " + age + ". You can only drive with parents")
    } else {
        document.write("You are " + age + ". You can drive in " + (drivingAge - 1 - age) + " years")
    }
    document.write(lineBreak);
}

driverAgeCheck(12);
driverAgeCheck(15);
driverAgeCheck(17);
driverAgeCheck(18);
driverAgeCheck(111);