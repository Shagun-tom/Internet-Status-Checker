let time = document.getElementById("connectionStatusCheckedResult");

let checkAgain = document.getElementById("connectionStatusCheckAgain");

let userInternetStatus1 = document.getElementById("userInternetStatus1");

let userInternetStatus2 = document.getElementById("URonline"); 

let onoffStatus = document.getElementById("onoffStatus");

let connectionDataResult = document.getElementById("connectionDataResult");


let networkActive = document.getElementById("networkActive");


if (navigator.onLine) {
    userInternetStatus1.innerText = "Online";
    onoffStatus.innerText = "Online";
    userInternetStatus2.innerText = "You're Online";
    networkActive.innerText = "Your internet connection is active.";
    connectionDataResult.innerText = "Internet detected";
} else {
    userInternetStatus1.innerText = "Offline";
    onoffStatus.innerText = "Offline";
    userInternetStatus2.innerText = "You're Offline";
    networkActive.innerText = "Your internet connection is inactive.";
    connectionDataResult.innerText = "Internet unavailable";

}

checkAgain.addEventListener("click", updateTime);




function updateTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let dateNum = date.getDate();
    let dateMonth = date.getMonth() + 1;
    let dateYear = date.getFullYear();

    function addZero(unit) {
        if (unit < 10) {   
            unit = "0" + unit;
        }   
        return unit;
    }

    function dayName(day) {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
        return days[day];
    }

    let currTime = dayName(date.getDay())+ ", "  + addZero(dateNum) + "/" + addZero(dateMonth) + "/" + addZero(dateYear) + " " + addZero(hour) + " : " + addZero(min) + " : " + addZero(sec);
    time.innerText = currTime;
};