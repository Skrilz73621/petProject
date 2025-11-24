// converter

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')
const tenInput = document.querySelector('#ten')
const inputs = document.querySelectorAll('.conv')



inputs.forEach(element => {
    element.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)

            if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(0)
                eurInput.value = (element.value * (data.usd / data.eur)).toFixed(2)
                tenInput.value = (element.value * (data.usd / data.tenge)).toFixed(2)
            }

            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(2)
                eurInput.value = (element.value / data.eur).toFixed(2)
                tenInput.value = (element.value / data.tenge).toFixed(2)
            }

            if (element.id === 'eur') {
                usdInput.value = (element.value * (data.eur / data.usd)).toFixed(2)
                somInput.value = (element.value * data.eur).toFixed(0)
                tenInput.value = (element.value * (data.eur / data.tenge)).toFixed(2)
            }

            if (element.id === 'ten') {
                usdInput.value = ((data.tenge * element.value) / data.usd).toFixed(2)
                somInput.value = (element.value * data.tenge).toFixed(0)
                eurInput.value = ((data.tenge * element.value) / data.eur).toFixed(2)
            }
                  
            if(element.value === ''){
                usdInput.value = ''
                eurInput.value = ''
                tenInput.value = ''
                somInput.value = ''
            }
        }

    })
})


// card switcher

const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
const cardBlock = document.querySelector('.card')
let cardId = 0
const url = '../data/amulets.json'

async function cardSwitcher(){

    const response = await fetch(url)
    const data = await response.json()

    cardBlock.classList.remove('fade-in');
    cardBlock.classList.add('fade-out');

    setTimeout(() =>{

            let currentCard = data[cardId]
    
            cardBlock.innerHTML = `
                    <p style="font-size: 30px; margin:0px">${currentCard.name}</p>
                    <p style="font-size: 20px; text-align: center; width:500px">${currentCard.effects}</p>
                    <img class="amulet" src="${currentCard.img}"></img>
                    <div style="display:flex; margin-top:20px">${currentCard.costs}</div>`


                    cardBlock.classList.remove('fade-out');
                    cardBlock.classList.add('fade-in');
            
                    btnNext.onclick = () => {
                        if(cardId < data.length - 1){
                            cardId++
                            cardSwitcher()
                        }else{
                            cardId = 0
                            cardSwitcher()
                        }
                    }
                    
                    btnPrev.onclick = () =>{
                        if(cardId > 1){
                            cardId--
                            cardSwitcher()
                        }else{
                            cardId = data.length - 1
                            cardSwitcher()
                        }
                    }
        }, 200)
    }

cardSwitcher()


// weather

const citySearchInput = document.querySelector('.cityName')
const searchButton = document.querySelector('#search')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')

// query params - параметры запроса

const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const API_URL = 'http://api.openweathermap.org/data/2.5/weather'

const icons = {
    cloudy:'<i class="fa-solid fa-cloud"></i>',
    sunny:'<i class="fa-solid fa-sun"></i>',
    windy:'<i class="fa-solid fa-wind"></i>',
    thunder:'<i class="fa-solid fa-bolt"></i>'
}

citySearchInput.oninput = (event) =>{

    fetch(`${API_URL}?q=${event.target.value}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data =>{
        const c = data.main?.temp - 273
        if(c >= 20){
            cityName.innerHTML = `${data.name} `
            cityTemp.innerHTML = data.main?.temp ? (c).toFixed(0) + '&deg;' + 'C': ',loh'  
            cityName.innerHTML += icons.sunny
        }else if(c <= 20 && c >= 15){
            cityName.innerHTML = `${data.name} `
            cityTemp.innerHTML = data.main?.temp ? (c).toFixed(0) + '&deg;' + 'C': ',loh'  
            cityName.innerHTML = icons.cloudy
        }else if(c <= 15 && c >= 10){
            cityName.innerHTML = `${data.name} `
            cityTemp.innerHTML = data.main?.temp ? (c).toFixed(0) + '&deg;' + 'C': ',loh'  
            cityName.innerHTML = icons.windy
        }else if(c < 10){
            cityName.innerHTML = `${data.name} `
            cityTemp.innerHTML = data.main?.temp ? (c).toFixed(0) + '&deg;' + 'C': ',loh'  
            cityName.innerHTML = icons.thunder
        }else{
            cityName.innerHTML = ''
            cityName.innerHTML = `Город ${event.target.value} не найден`
            cityTemp.innerHTML = ''
        }
        if(event.target.value === ''){
            cityName.innerHTML = ''
            cityTemp.innerHTML = ''
        }
    })
}


// optional chaining - опциональная цепочка


const addres = {
    id : 123,
    location:{
        street:'ibraimova',
        number: 103
    }
}

console.log(addres.location?.street);

