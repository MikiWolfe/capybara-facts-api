const factEL = document.getElementById('fact')

let randomFact

function getFact() {
    let factURL ="https://mikiwolfe.github.io/capybara-facts-api/data/data.json";
    fetch(factURL).then((res)=> {return res.json()})
    .then((data) => {
        console.log(data.length)
        randomFact = data[Math.floor(Math.random() * data.length)]
        console.log(randomFact)
        factEl.innerHTML = randomFact.fact
    })
}

setInterval(getFact, 7000)
