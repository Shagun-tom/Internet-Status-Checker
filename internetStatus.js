let time = document.getElementById("connectionStatusCheckedResult");

let checkAgain = document.getElementById("connectionStatusCheckAgain");

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