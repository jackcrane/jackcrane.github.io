let vidRunning = false;
let tloop;
let target_time = [23,58,45];
                 // h, m, s  in military time

function showTime(){
    let date = new Date();
    let y = date.getFullYear();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    // 19:55:00
    if(h == target_time[0] && m == target_time[1] && s == target_time[2]) {
      let vid = document.getElementsByTagName("video")[0]
      vid.currentTime = 0;
      vid.play();
      //alert("ITS TIME TO START");
    }

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    tloop = setTimeout(showTime, 1000);

}

showTime();
