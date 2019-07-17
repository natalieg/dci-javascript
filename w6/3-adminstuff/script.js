var blockedUsers = [];

class User {
    constructor(username, password, ip) {
        this.username = username;
        this.password = password;
        this.ip = ip;
    }
    getName() {
        return this.username;
    }
    isBlocked() {
        let blocked = false;
        blockedUsers.forEach(element => {
            if (element == this.username) {
                blocked = true;
            }
        });
        return blocked;
    }
    isRejected() {
        if (this.ip == "127.1.1.1") {
            return true;
        } else {
            return false;
        }
    }
    greeting() {
        // Important to write 'this' in fron of the method inside of this class function
        if (this.isRejected() || this.isBlocked()) {
            document.write(`<p class="alert">Go away! You are not welcome here!</p>`);
        } else {
            document.write(`Welcome back ${this.username}<br>`);
        }
    }
    setTimePassing() {
        let timeFild = document.getElementById("startTime");
        let passedFild = document.getElementById("timePassed");
        var startTime = new Date();
        console.log(this.startTime);
        let date = startTime.toLocaleDateString();
        let time = startTime.toLocaleTimeString();
        timeFild.innerHTML = `Date: ${date} <br>Time: ${time}`;
        setInterval(function () {
            let now = new Date();
            var timeDiff = Math.round((now - startTime) / 1000);
            if (timeDiff <= 60) {
                passedFild.innerHTML = "<br>" + timeDiff + " Seconds passed";
            } else {
                passedFild.innerHTML = "<br>" + Math.round(timeDiff/60) + ":" + timeDiff%60 + " Minutes passed";
            }
        }, 1000);
    }
}

const user1 = new User("YoloKillerSwagginator", "420blazeit", "127.1.1.1");
const user2 = new User("Benni", "derbenniderbenni", "3.353.1.33");
user1.greeting();
user2.greeting();
user2.setTimePassing();

class Admin extends User {
    constructor(username, password, ip, level, area, rights) {
        super(username, password, ip);
        this.level = level;
        this.area = area;
        this.rights = rights;
    }
    getLevel() {
        return this.level;
    }
    getArea() {
        return this.area;
    }
    createRights(rightLevel) {
        let rightsArray = ["Edit", "Delete", "Ban User", "Block IP Adress", "Close Forum"];
        let rightString = ""
        if (rightLevel > rightsArray.length) {
            rightLevel = rightsArray.length;
        }
        for (let i = 0; i < rightLevel; i++) {
            rightString += rightsArray[i] + ", ";
        }
        return rightString.substring(0, rightString.length - 2);
    }
    getRights() {
        return this.createRights(this.rights);
    }
    writeAdminInfo() {
        document.write(`<hr><b>Admin</b>: ${this.username} <br><b>Level</b>: ${this.level} <br> 
        <b>Area</b>: ${this.area} <br><b>Abilities</b>: ${this.getRights()}<hr>`);
    }
    blockUser(userName) {
        if (this.rights > 2) {
            blockedUsers.forEach(element => {
                if (element == userName) {
                    return "User is already blocked!"
                }
            });
            blockedUsers.push(userName);
            return "Blocked User " + userName;
        } else {
            return "You can't ban a User!"
        }
    }
}

const admin1 = new Admin("MisterSir", "neverKnew", "12.12.55", 45, "User Management", 3);
admin1.writeAdminInfo();
const admin2 = new Admin("Anthony", "oklahoma", "785.12.457", 68, "Maintanace", 50);
admin2.writeAdminInfo();
const admin3 = new Admin("Weak", "notsure", "75.112.57", 2, "Welcome Wagon", 2);
admin3.writeAdminInfo();

class Owner extends Admin {

}

// create some stuff for website eyo

let adminArray = [admin1, admin2, admin3];

function createSelector() {
    let menu = document.getElementById("menu");
    let form = document.createElement("form");
    var select = document.createElement("select");
    select.setAttribute("id", "selectAdmin");
    menu.appendChild(form);
    form.appendChild(select);

    adminArray.forEach(element => {
        let option = document.createElement("option");
        option.value = element.username;
        option.innerHTML = element.getName();
        select.appendChild(option);
    });
}

createSelector();

var selectAdmin = document.getElementById("selectAdmin");
var activAdmin = selectAdmin.selectedIndex;
console.log("The Index is" + activAdmin);

selectAdmin.onchange = function(){
    console.log("Current Admin is: " + activAdmin);
}