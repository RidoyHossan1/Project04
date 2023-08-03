function nowTime(){
    var nowDate = new Date();
    var hr,min = (nowDate.getMinutes() < 10) ? "0" + nowDate.getMinutes() : nowDate.getMinutes(),
        sec = (nowDate.getSeconds() < 10) ? "0" + nowDate.getSeconds() : nowDate.getSeconds(),
        hrt = (nowDate.getHours() >= 12) ? "PM" : "AM";



    if(nowDate.getHours() == 0){
        hr = 12;
    }
    else if(nowDate.getHours() > 12){
        hr = nowDate.getHours()-12;
    }
    else{
        hr = nowDate.getHours();
    }

    var currentTime = hr + ":" + min;

    document.getElementsByClassName("Hr")[0].innerHTML = currentTime;
    document.getElementsByClassName("Hrt")[0].innerHTML = hrt;
    document.getElementsByClassName("Sec")[0].innerHTML = sec;

    var nowDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        nowMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        day = nowDate.getDate();
    
    var currentDate = nowDay[nowDate.getDate()] + "," + " " + nowMonth[nowDate.getMonth()] + " " + day ;
    document.getElementsByClassName("Dt")[0].innerHTML = currentDate;

}

nowTime();

setInterval(function(){
    nowTime();
}, 1000);