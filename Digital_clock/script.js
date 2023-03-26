function clock(){
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds(); 
    let d = a.getDate();
    let month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    let mn = month[a.getMonth()];
    let y = a.getFullYear();

    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML  = m;
    document.getElementById("seconds").innerHTML  = s;
    document.getElementById("date").innerHTML  = d;
    document.getElementById("month").innerHTML  = mn;
    document.getElementById("year").innerHTML  = y;

}

setInterval(clock, 1000);



