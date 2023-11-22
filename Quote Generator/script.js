const api_url = "https://api.quotable.io/quotes/random"
const quote = document.getElementById('quote')
const author = document.getElementById('author')

async function getQuote(url) {
    const response = await fetch(url)
    var data = await response.json()

    console.log(data)
    quote.innerHTML = data[0].content
    author.innerHTML = data[0].author
}

getQuote(api_url)


function tweet() {
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + " --" + author.innerHTML)
}