let boxValue = document.getElementById("value");
let count = 0;


function changeValue(button) {
    if(button == increase){
        count += 1;
        boxValue.innerText = count;
    } else if(button == reset){
        count = 0;
        boxValue.innerText = count;
    } else if(button == decrease) {
        count -= 1;
        boxValue.innerText = count;
    } else {
        boxValue.innerText = 0;
    }
}
