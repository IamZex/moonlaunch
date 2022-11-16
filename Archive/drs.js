var floatLockDate  = new Date("May 8, 2023 09:30:00").getTime();
var moonLaunchDate = new Date("March 21, 2024 09:30:00").getTime();
/*  "Mar 18, 2024 09:30:00" original float lock date
    "Sept 14, 2026 09:30:00 original moon launch date
    "July 13, 2023 09:30:00" first update float lock
    "June 30, 2023 09:30:00" 2nd update float lock
    "Sept 26, 2025 09:30:00" 2nd update moon launch date
    "July 9, 2024 09:30:00" 3rd updated float lock
    "May 11, 2028 09:30:00" 3rd updated float lock
    
*/

var floatInterval = setInterval(function(){

    var now = new Date().getTime();
    var floatDistance = floatLockDate - now;
    var floatDays = Math.floor(floatDistance / 86400000);
    var floatHours = Math.floor(floatDistance % (1000*60*60*24)/(1000*60*60));
    var floatMinutes = Math.floor(floatDistance % (1000*60*60)/(1000*60));
    var floatSeconds = Math.floor(floatDistance % (1000*60)/1000);

    floatLock = document.getElementById("floatLock").innerHTML =
        floatDays +" Days "+ floatHours +" Hours "
        + floatMinutes+" Minutes "+ floatSeconds +" Seconds ";

        if (floatDistance < 0) {
            clearInterval(floatInterval)
            document.querySelector(".floatLock").textContent = "We've locked the Free Float"
        };

},1000)

var moonInterval = setInterval(function(){

    var now = new Date().getTime();
    var distance = moonLaunchDate - now;
    var days = Math.floor(distance /(1000*60*60*24));
    var hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
    var minutes = Math.floor(distance %(1000*60*60)/(1000*60));
    var seconds = Math.floor(distance % (1000*60)/1000);

    moonLaunch = document.getElementById("moonLaunch").innerHTML =
    days + " Days " + hours + " Hours "+ minutes + " Minutes " + seconds +" Seconds ";

    if (distance < 0) {
        clearInterval(moonInterval)
        document.querySelector(".moonLaunch").textContent = "Happy Launch Day!"
    };
},1000)

