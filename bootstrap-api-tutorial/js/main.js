// CACHED ELEMENT REFERENCES //

const tSwizzleBtn = document.getElementById('tSwizzleBtn');
const kanyeBtn = document.getElementById('kanyeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const containerBtn = document.getElementById('container');
const body = document.getElementById('body');

const colorScheme = {
    dark: false,
    changeColorScheme: function(){
        colorScheme.dark ? (colorScheme.dark = false) : (colorScheme.dark = true);
        const color = colorScheme.dark ? "dark" : "";
        body.setAttribute("class", color)
    },
};

// VARIABLES //
const quotes =[]

// EVENT LISTENERS //

tSwizzleBtn.addEventListener('click', ()=> {
    fetch('https://api.taylor.rest')
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        let newQuote = {}
        newQuote.quote = data.quote
        newQuote.artist = "T-Swizzle"
        quotes.push(newQuote)
        appendDiv(data.quote, "T-Swizzle")
        render()
    })
    .catch((err) => {
        console.log(err)
    })
})

// "quote": "I'm T-swift, rah rah",
// "artist": "Taylor Swift"

kanyeBtn.addEventListener('click', ()=> {
    fetch('https://api.kanye.rest/')
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        let newQuote = {}
        newQuote.quote = data.quote
        newQuote.artist = "Yeezy"
        quotes.push(newQuote);
        appendDiv(data.quote, "Yeezy")
        render ()
    })
    .catch((err) => {
        console.log(err)
    })
})
darkModeBtn.addEventListener('click', colorScheme.changeColorScheme)

// FUNCTIONS //

function appendDiv(quote, artist, idx){
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `
                        <div class="card" id="${artist.toLowerCase()}">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${quote}</p>
                                    <footer class="blockquote-footer">${artist}</footer>
                                </blockquote>
                            </div>
                            <button onClick={deleteQuote(${idx})} id="delButton" class="btn">X</button>
                        </div>    
                        `
    container.appendChild(newDiv)
}

function render(){
    container.innerHTML = ''
    quotes.forEach((quote, idx) => {
        appendDiv(quote.quote, quote.artist, idx)
    })
}

function deleteQuote(idx){
    quotes.splice(idx, 1)
    render()
}

function checkUserColorSchemePreference() {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      colorScheme.changeColorScheme()
    }
  }

checkUserColorSchemePreference()

// Add the HTML for two buttons (one for T-Swift, one for Yeezy)
// Add the HTML for a 'Mode Swap' or 'Dark Mode' button.
// Add a container element for the 'card' components to be appended to as children
// Add a cached element reference for the container element in the JS file
// Add cached element references for each of the buttons
// Add event listeners to each of the buttons (TEST with console.log)
// Write code for API call and examine response data using console.log
// Tweak event listeners so that the quote is stored in a variable (TEST with console.log)
// Create a test 'card' element with Bootstrap
// Add a function to handle appending a 'card' containing the quote to the container element.
// Style each card differently, based on whether the quote is from T-Swift or Yeezy. (What options do we have to handle this?)
// Add a button to the card that will allow us to REMOVE the quote from list. (What are some approaches we can take to do this?)