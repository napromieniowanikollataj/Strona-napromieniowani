let i = 0

let start  = document.getElementById('start')
let next  = document.getElementById('next')
let questionbox = document.getElementById('question-box')
let scorehtml = document.getElementById('score')

let question = document.getElementById('question')

let anser_a = document.getElementById('anser-a')
let anser_b = document.getElementById('anser-b')
let anser_c = document.getElementById('anser-c')
let anser_d = document.getElementById('anser-d')


let useranser = ''
let score = 0


const questions = ['pytanie1', 'pytanie2','pytanie3']
const correct =['a','b','c'];


let questionamount = questions.length

const ansersa = ['odpowiedz','odpowiedz','odpowiedz']
const ansersb = ['odpowiedz','odpowiedz','odpowiedz']
const ansersc = ['odpowiedz','odpowiedz','odpowiedz']
const ansersd = ['odpowiedz','odpowiedz','odpowiedz']

start.addEventListener('click', startgame)
next.addEventListener('click', nextquestion)

function startgame() {
    start.classList.add('hide')
    questionbox.classList.remove('hide')
    nextquestion()


}



function nextquestion() {

    if (useranser === undefined) {
    next.ariadisabled = true   
    }

    else {
        question.innerText = questions[i]
        anser_a.innerText = ansersa[i]
        anser_b.innerText = ansersb[i]
        anser_c.innerText = ansersc[i]
        anser_d.innerText = ansersd[i]

        checkanser()
        i += 1 
        useranser = undefined 
         

        setInterval(() => {
            if(correct === 'a'){
                anser_a.classList.add('btn-correct')
                anser_a.classList.remove('btn-defult')
            }    
            },1000);     
            
            setInterval(() => {
            if(correct === 'b'){
                anser_b.classList.add('btn-correct')
                anser_b.classList.remove('btn-defult')
            }    
            },1000);     
            
            setInterval(() => {
            if(correct === 'c'){
                anser_c.classList.add('btn-correct')
                anser_c.classList.remove('btn-defult')
            }    
            },1000);     
            
            setInterval(() => {
            if(correct === 'd'){
                anser_d.classList.add('btn-correct')
                anser_d.classList.remove('btn-defult')
            }    
            },1000);     
            
        
        }
    
    
}


anser_a.addEventListener('click', selectanser_a)

function selectanser_a() {
    useranser = 'a'
}

anser_b.addEventListener('click', selectanser_b)

function selectanser_b() {
    useranser = 'b'
}

anser_c.addEventListener('click', selectanser_c)

function selectanser_c() {
    useranser = 'c'
}

anser_d.addEventListener('click', selectanser_d)

function selectanser_d() {
    useranser = 'd'
}


function setcolortodefult(){
    anser_a.classList.toggle('btn-correct')
    anser_c.classList.toggle('btn-correct')
    anser_c.classList.toggle('btn-correct')
    anser_d.classList.toggle('btn-correct')
}





function checkanser() {

    if (useranser === correct[i-1]) {
        score += 1;
        scorehtml.innerText ='wynik: ' + score.toString() + '/' + questionamount.toString() 
        
        
    } else {

        scorehtml.innerText ='wynik: ' + score.toString() + '/' + questionamount.toString()

    }
}

