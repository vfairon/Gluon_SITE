let i = 0;

function clicked(event) {
    if ((i > 1 || i == 0) && $(event.target).parents(".output").length) return;
    if (i > 0 && $(event.target).parents(".input").length)

    {
        if (i == 1) return;
    }
    i++;
    if (i > 2) {

        document.querySelectorAll(".bg-light").forEach(element => {
            element.classList.remove("bg-light")
        });
        i = 1;
    }

    event.target.classList.add("bg-light");

}

function power()
{
    if(slider3.value<50)
    {
        o3.setAttribute("src","../res/img/turn-off.png")
    }
    else
    {
        o3.setAttribute("src","../res/img/turn-on.png")
    }
}

function strip()
{
    count++;
    switch(count)
    {
        case 1:{
            led1.setAttribute("src",ledOnPath);
            break;
        }
        case 2:{
            led2.setAttribute("src",ledOnPath);
            break;
        }
        case 3:{
            led3.setAttribute("src",ledOnPath);
            break;
        }
        case 4:{
            led4.setAttribute("src",ledOnPath);
            break;
        }
        case 5:{
            led5.setAttribute("src",ledOnPath);
            break;
        }
        case 6:{
            led6.setAttribute("src",ledOnPath);
            break;
        }
        default :{
            for(var i = 0;i<arrLeds.length;i++)
            {
                arrLeds[i].setAttribute("src",ledOffPath);
            }
            count=0;
        }
    }
    
}

function slide1() {

    if (slider.value > 33) {
        led1.setAttribute("src", "../res/img/ledOn.png")
    } else {
        led1.setAttribute("src", "../res/img/led.png")
    }
    if (slider.value > 66) {
        led2.setAttribute("src", "../res/img/ledOn.png")
    } else {
        led2.setAttribute("src", "../res/img/led.png")
    }
    if (slider.value > 99) {
        led3.setAttribute("src", "../res/img/ledOn.png")
    } else {
        led3.setAttribute("src", "../res/img/led.png")
    }

}

function slide2() {



    if (slider2.value < 30)
    {

        x = x + 6;
        o2.style.transform = "rotate(" + x + "deg)"
    }
    else if (slider2.value > 30 && slider2.value < 60)
    {
        x = x + 10;
        o2.style.transform = "rotate(" + x + "deg)"

    }
    else if (slider2.value > 60 && slider2.value < 90)
    {
        o2.style.transform = "rotate(" + x + "deg)"

    }



}
function clic(event) {
    var path = "../res/img/lightbulb.png"
    var pathOn = "../res/img/lightbulbon.png"

    if (event.target.getAttribute("src") == path) {
        console.log("sal")
        event.target.setAttribute("src", pathOn)
    } else {
        event.target.setAttribute("src", path)
    }

}

mvsensor.addEventListener("mouseenter",strip)




