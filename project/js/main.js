// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const back = document.querySelector('.back')


// const setRandomColors = () => {
    
//     const request = new XMLHttpRequest()
//     request.open('GET', './data/backgrounds.json')
//     request.setRequestHeader('Content-type','application/json')
//     request.send()

    // request.onload = () =>{
    //     const data = JSON.parse(request.response)
    //     const shuffleData = shuffleArray(data)


    //     buttonsColor.forEach((buttonColor, index) => {
    
    //         buttonColor.innerHTML = shuffleData[index].name;
    //         buttonColor.onclick = () => {
    //             back.src = `./media/${shuffleData[index].id}.mp4`;
    //         };
    //     });
    // };
    
// }
    

const url = './data/backgrounds.json'

const fetchPost = async () =>{
    try{
        const response = await fetch(url)
        const data = await response.json()

        const shuffleData = shuffleArray(data)


        buttonsColor.forEach((buttonColor, index) => {
    
            buttonColor.innerHTML = shuffleData[index].name;
            buttonColor.onclick = () => {
                back.src = `./media/${shuffleData[index].id}.mp4`;
            };
        });
        
    }catch(e){
        console.log(e)
    }
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};








window.onload = () => fetchPost()

window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        fetchPost()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)
