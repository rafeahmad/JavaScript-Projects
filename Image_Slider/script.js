let count = 0;

function clickMe(x){
    count += x
    imageSlider(count);
}

imageSlider(count)

function imageSlider(num){
    let slides = document.getElementsByClassName("slide");

    if(num == slides.length){
        count = 0;
        num = 0;
    }

    if(num < 0){
        count = slides.length-1;
        num = slides.length-1;
    }

    for(let hide of slides){
        hide.style.display = "none"
    }

    slides[num].style.display = "block";
}