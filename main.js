var navBtn = document.getElementById("nav-icon");
var menu = document.getElementById("menu-all");
var left = document.getElementById('left');
var right = document.getElementById('right');

let times = 0
let i = -1

var dt = new Date();
var sec = dt.getSeconds();

navBtn.addEventListener("click", () => {
  menu.classList.toggle('hide')
       
    
})


let gablotteItem1 = document.getElementById('gablotte-item1');
let gablotteItem2 = document.getElementById('gablotte-item2');
let gablotteItem3 = document.getElementById('gablotte-item3');
let gablotteItem4 = document.getElementById('gablotte-item4');

const gablotteItems = [gablotteItem1,gablotteItem2,gablotteItem3]



let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');


const dots = [dot1,dot2,dot3]

let currentitem = gablotteItems[i]
let currentdot = dots[i]


dot1.addEventListener('click', setGablotte)
dot2.addEventListener('click', setGablotte)
dot3.addEventListener('click', setGablotte)


navBtn.addEventListener("click", () => {
    times += 1;
    if(times % 2 === 1){
        menu.classList.remove("hide")
    }
    else {
        menu.classList.add('hide')
    }
       
    
})


left.addEventListener('click', previousGablotte)
right.addEventListener('click', nextGablotte)

function setGablotte() {

}



function previousGablotte() {

    i -= 1;

    if(i < 0){
       i = 0;

    }
        
    gablotteItems[i].classList.remove('hide')
    gablotteItems[i+1].classList.add('hide')

    dots[i].classList.add('dot-selected');
    dots[i].classList.remove('dot');
    
    dots[i+1].classList.add('dot');
    dots[i+1].classList.remove('dot-selected');

}

function nextGablotte() {

    i += 1;

    if(i === gablotteItems.length) {

        gablotteItems[gablotteItems.length - 1].classList.add('hide');
        dots[dots.length - 1].classList.remove('dot');
        dots[dots.length - 1].classList.add('dot-selected');

        i = 0;

        gablotteItems[i].classList.remove('hide');

        dots[i].classList.add('dot-selected');
        dots[i].classList.remove('dot');

        dots[dots.length -1].classList.add('dot')
        dots[dots.length -1].classList.remove('dot-selected')

    } else {

        dots[dots.length - 1].classList.add('dot')
        dots[dots.length - 1].classList.remove('dot-selected')
        

        gablotteItems[i].classList.remove('hide');
        gablotteItems[i-1].classList.add('hide');
    
        dots[i].classList.remove('dot')
        dots[i].classList.add('dot-selected')

        dots[i-1].classList.remove('dot-selected')
        dots[i-1].classList.add('dot') 
     
    }
     
}

function loop() {
    setInterval(() => {
        nextGablotte()
    },5000);     
}

loop()