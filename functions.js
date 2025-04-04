export function quoteGenerator(list){
    const randomNumber = Math.floor(Math.random()* list.length);
    const quoteText = document.getElementById('quote-text').innerText = list[randomNumber];
    document.getElementById('quote-text').style.backgroundColor = "antiquewhite"
}