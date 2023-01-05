console.log('ready for moonshot!')

const main = document.createElement('div');
main.classList.add('main');

/* now to make sure that the pages will load on click */
function tabEvent(contentElement){
   
    const tabs = document.querySelectorAll('.tab');

    const tags= document.querySelectorAll('[data-tab-target]')
    const tabContents =document.querySelectorAll('[data-tab-content]')
    
    tags.forEach(tab =>{
        tab.addEventListener('click',()=>{
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent =>{
                tabContent.classList.remove('active')
                console.log("test")
             })
            target.classList.add('active')
        })
    })
    
    tabs.forEach(tab => {
        tab.addEventListener('click',(e)=>{

            switch(e.target.innerText){
                
                case "Countdown":
                    tab.classList.add("active")
                    console.log("clicked")
                    break;
                
                case "Explanation":
                    tab.classList.add("active")
                    break;
                
                case "About me":
                    tab.classList.add("active")
                    break;
               
                default:
                    return;
            }
        })
    })
}


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

/*starting with computershared.net I calculated a date */

var floatLockDate = new Date("July 9, 2024 09:30:00").getTime();
var moonLaunchDate = new Date("May 11, 2028 09:30:00").getTime();

/* Here we create the countdown time */

var floatInterval = setInterval(function(){

    var now = new Date().getTime();
    var floatDistance = floatLockDate - now;
    var floatDays = Math.floor(floatDistance / 86400000);
    var floatHours = Math.floor(floatDistance % (1000*60*60*24)/(1000*60*60));
    var floatMinutes = Math.floor(floatDistance % (1000*60*60)/(1000*60));
    var floatSeconds = Math.floor(floatDistance % (1000*60)/1000);
    var floatLock = document.getElementById("floatLock").innerHTML =
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
    var moonLaunch = document.getElementById("moonLaunch").innerHTML =
    days + " Days " + hours + " Hours "+ minutes + " Minutes " + seconds +" Seconds ";

    if (distance < 0) {
        clearInterval(moonInterval)
        document.querySelector(".moonLaunch").textContent = "Happy Launch Day!"
    };
},1000)

