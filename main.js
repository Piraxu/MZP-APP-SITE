function mainpage() {
    window.location.assign("index.html")
}

function dwlnd() {
    window.location.assign("download.html")
}

function adds() {
     window.location.assign("addons.html")
}

//slider//

function slider1() {
     var sliderbg = document.getElementById("slider-bg")
     var slidertxt = document.getElementById("slider-text")
     sliderbg.style.backgroundImage = "url('res/img/code.png')"
     slidertxt.innerHTML = "Nowatorskie rozwiązanie wśród V-firm."
     setTimeout(slider2,5000)
}

function slider2() {
         var sliderbg = document.getElementById("slider-bg")
         var slidertxt = document.getElementById("slider-text")
     sliderbg.style.backgroundImage = "url('res/img/app.png')"
          slidertxt.innerHTML = "Nowoczesny wygląd."
     setTimeout(slider3,5000)
}

function slider3() {
         var sliderbg = document.getElementById("slider-bg")
         var slidertxt = document.getElementById("slider-text")
     sliderbg.style.backgroundImage = "url('res/img/updater.png')"
          slidertxt.innerHTML = "Prosty Aktualizator."
     setTimeout(slider4,5000)
}

function slider4() {
         var sliderbg = document.getElementById("slider-bg")
         var slidertxt = document.getElementById("slider-text")
     sliderbg.style.backgroundImage = "url('res/img/print.png')"
          slidertxt.innerHTML = "Wygodne drukowanie dowolnych rozkładów."
     setTimeout(slider1,5000)
}