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
        x =x+12
        o2.style.transform = "rotate(" + x + "deg)"

    }
    else if(slider2.value > 90)
        {
            x=x+16
            o2.style.transform = "rotate(" + x + "deg)"
        }
    var path = "../res/img/lightbulb.png"
    var pathOn = "../res/img/lightbulbon.png"

    if (slider2.value<50) {
        
        i2.setAttribute("src", path)
    } else {

      i2.setAttribute("src", pathOn)
    }
    


}


mvsensor.addEventListener("mouseenter",strip)

function write1()
{
    i1OptionValue.style.display="inline"
    i1OptionValue.style.width="100%"
   // console.log(i1OptionValue)
   i1OptionValue.innerHTML= i1OptionInput.value
   i1OptionInput.value =""
   
}

function write2()
{
    i2OptionValue.style.display="inline"
    i2OptionValue.style.width="100%"
   // console.log(i1OptionValue)
   i2OptionValue.innerHTML= i2OptionInput.value
   i2OptionInput.value =""
}
function write3()
{
    i3OptionValue.style.display="inline"
    i3OptionValue.style.width="100%"
   i3OptionValue.innerHTML= i3OptionInput.value
   i3OptionInput.value =""
}


 function writeDescription1()
 {
     
     i1Description.classList.add("p-2");
    i1Description.innerHTML = mvDescription.value;
    if(i1Description.innerHTML === "")
    {
        i1Description.classList.remove("p-2")
    }
 }
 function writeDescription2()
 {
     i2Description.classList.add("p-2");
     i2Description.innerHTML = lightDescription.value;
    if(i2Description.innerHTML === "")
    {
        i2Description.classList.remove("p-2")
    }
  }
   
 function writeDescription3()
 {
    i3Description.classList.add("p-2");
    i3Description.innerHTML = tempDescription.value;
    if(i3Description.innerHTML === "")
        {
            i3Description.classList.remove("p-2")
        }
   
 }


mvsensor.addEventListener("mouseenter",strip)