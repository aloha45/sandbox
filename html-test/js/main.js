// const messageEl = document.getElementById('message')

const messageEl = document.querySelector('h1');
messageEl.style.textAlign = 'center'

const gHref = document.querySelector('a')
gHref.href = "https://www.google.com";

const divEls = document.querySelectorAll('div')

// divEls.forEach((element)=> {
//     element.innerText = 'taco'
//     console.log(element)})
// divEls.style.color= 'red'

// messageEl.textContent = "Taco"

// console.dir(divEls);

const btn = document.querySelector('button')
btn.addEventListener('click', function(evt) {
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    li.textContent = inp.value;
    document.querySelector('ul').appendChild(li)
})

const ul = document.querySelector('ul');

ul.addEventListener('click', function(e){
    console.log(e.target)
})

