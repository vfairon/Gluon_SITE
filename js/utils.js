let i = 0;
function clicked(event) {
    if ((i > 1 || i == 0) && $(event.target).parents(".output").length) return;
    if (i > 0 && $(event.target).parents(".input").length)
    {
        if (i == 1) return;
    }
    i++;
    if (i > 2) {      
        document.querySelectorAll(".d-inline").forEach(element => {
            element.classList.remove("d-inline")
          
           
            
        });
        let x = Array.from($("[connected=true]"))
        x.forEach(element=>{
                 element.setAttribute("connected","false")
             }) 
        i = 1;
    }
    var id = event.target.getAttribute("id");
    let c = document.getElementById("u"+event.target.getAttribute("id"))
    if(id[0]=="l")
    {
        c = document.getElementById("ul");
        led1.setAttribute("connected","true")
        led2.setAttribute("connected","true")
        led3.setAttribute("connected","true")

    }
    else{
    
        event.target.setAttribute("connected","true")
    }
    c.classList.add("d-inline")    
}
function power()
{
    if(i3.getAttribute("connected")==="true"&& l1.getAttribute("connected")==="true")
    {
        slide1(slider3)
    }
    if(i3.getAttribute("connected")==="true"&& o3.getAttribute("connected")==="true")
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
    if(i3.getAttribute("connected")==="true"&& o2.getAttribute("connected")==="true")
    {
        if (count < 30)
        {
            x = x + 6;
            o2.style.transform = "rotate(" + x + "deg)"
        }
        else if (slider3.value > 30 && slider3.value < 60)
        {
            x = x + 10;
            o2.style.transform = "rotate(" + x + "deg)"
    
        }
        else if (slider3.value > 60 && slider3.value < 90)
        {
            x =x+12
            o2.style.transform = "rotate(" + x + "deg)"
    
        }
        else if(slider3.value > 90)
            {
                x=x+16
                o2.style.transform = "rotate(" + x + "deg)"
            }
    }
}
function strip()
{
   $("#i1").hover(function(){
       $(this).css("background-color","black")
       mvsensor.setAttribute("src","../res/img/sensorWhite.png")
    },
       function(){
           setTimeout(3000)
        $(this).css("background-color", "white")
        mvsensor.setAttribute("src","../res/img/sensor.png")
       }
   )
    if(mvsensor.getAttribute("connected")==="true"&& l1.getAttribute("connected")==="true")
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
    if(mvsensor.getAttribute("connected")==="true"&& o2.getAttribute("connected")==="true")
    {
        count++
        if(count == 1)
        {
            o2.style.transform = "rotate(" + 15 + "deg)"
        }
      else if(count == 2)
      {
        o2.style.transform = "rotate(" + 25 + "deg)"
      }
      else if(count == 3)
      {
        o2.style.transform = "rotate(" + 35 + "deg)"
      }
      else if(count == 4)
      {
        o2.style.transform = "rotate(" + 95 + "deg)"
        count=0
      }
    
    }
    if(mvsensor.getAttribute("connected")==="true"&& o3.getAttribute("connected")==="true")
      {     
          var turn = "../res/img/turn-on.png";
          var turnOff = "../res/img/turn-off.png";
          if(o3.getAttribute("src")===turn) 
          {
              o3.setAttribute("src",turnOff)
             
          }
          else{
            o3.setAttribute("src",turn)
          }
      }   
}
function slide1(slider) {

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
    if(i2.getAttribute("connected")==="true"&& l1.getAttribute("connected")==="true")
    {
        slide1(slider2)
    }
    if(i2.getAttribute("connected")==="true"&& o3.getAttribute("connected")==="true")
    {
        if(slider2.value <50)
        {
            o3.setAttribute("src","../res/img/turn-off.png")
        }
        else{
            o3.setAttribute("src","../res/img/turn-on.png")
        }
        return
    }
    if(i2.getAttribute("connected")==="true"&& o2.getAttribute("connected")==="true")
    {

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
    if(i1OptionInput.value ==="")
    {
        i1OptionValue.style.visibility="hidden"
    }
    else{
        i1OptionValue.style.visibility="visible"
        i1OptionValue.style.display="inline"
        i1OptionValue.style.width="100%"
    }
    
    

   // console.log(i1OptionValue)
   i1OptionValue.innerHTML= i1OptionInput.value
   i1OptionInput.value =""
   
}

function write2()
{
    if(i2OptionInput.value ==="")
    {
        i2OptionValue.style.visibility="hidden"
    }
    else{

        i2OptionValue.style.visibility="visible"
        i2OptionValue.style.display="inline"
        i2OptionValue.style.width="100%"
    }
   // console.log(i1OptionValue)
   i2OptionValue.innerHTML= i2OptionInput.value
   i2OptionInput.value =""
}
function write3()
{
    if(i3OptionInput.value ==="")
    {
        i3OptionValue.style.visibility="hidden"
    }
    else{
        i3OptionValue.style.visibility="visible"
        i3OptionValue.style.display="inline"
        i3OptionValue.style.width="100%"
    }
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
 function hiddeOptions()
 {
            options.forEach(element=>{
            element.classList.toggle("d-none")
          })
 
 }
mvsensor.addEventListener("mouseenter",strip)
