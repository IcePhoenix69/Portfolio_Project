console.log('Start JS...')
// Global Variables
let btnStartQuote = document.getElementById('start-quote')
const quotesList = ["Controlla se il tuo pane a casa \u00E8 stato chiuso bene.", 
    "Se qualcuno dice di no, puoi insistere solo un'altra volta. Dopo \u00E8 solo ridicolo.",
    "Lascia perdere, oggi non \u00E8 giornata.",
    "Se sei indeciso, mangia qualcosa e poi ripensaci. Mai pensare a stomaco vuoto.",
    "La violenza non \u00E8 una soluzione, ma \u00E8 una domanda. E la risposta \u00E8 S\u00CC.", 
    "Le persone vanno e vengono, ma JS \u00E8 per sempre, purtroppo."]

// Links to HTML
btnStartQuote.addEventListener('click',quoteGenerator)

// Functions
function quoteGenerator(){
    const randomNumber = Math.floor(Math.random()* quotesList.length);
    const quoteText = document.getElementById('quote-text').innerText = quotesList[randomNumber];
    document.getElementById('quote-text').style.backgroundColor = "antiquewhite"
}
console.log('Loading: Done')