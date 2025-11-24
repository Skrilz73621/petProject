const redSquare = document.querySelector('.child_block') 
const parentBlock = document.querySelector('.parent_block')
let redSquareLeft = 0
let redSquareBottom = 0
let parentBlockWidth = parentBlock.offsetWidth
let parentBlockHeight = parentBlock.offsetHeight
const reset = document.querySelector('#reset')
const start = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const seconds = document.querySelector('#seconds')
let knight = redSquare.querySelector('img')
let stopper = false
let num = 0
const gif = '<img src="/project/project/media/fall.gif" alt="">'
const gif2 = '<img src="/project/project/media/giphy.gif"></img>'
const gif3 = '<img src="/project/project/media/hollow-knight-knight.gif"></img>'
const gif4 = '<img src="/project/project/media/hk.gif"></img>'

    start.addEventListener('click', ()=>{
        if(!stopper){
            const interval = setInterval(() => {
                num++
                seconds.innerHTML = num
            }, 1000);
            stopper = true
            stopBtn.addEventListener('click', ()=>{
                clearInterval(interval)
                stopper = false
            })
        
            reset.addEventListener('click', ()=>{
                clearInterval(interval)
                num=0
                seconds.innerHTML = num
                stopper = false
            })
        }
    
    })








const moveBlock = ()=>{

    if (redSquareLeft < parentBlockWidth - redSquare.offsetWidth && redSquareBottom === 0) {
        let knight = redSquare.querySelector('img')
        redSquare.innerHTML = gif2
        knight.style.width = '80px';
        knight.style.height = '100%'
        redSquare.style.transform = 'scaleX(1)';
        parentBlock.style.backgroundImage = 'url("https://steamuserimages-a.akamaihd.net/ugc/1826772178563836231/E70376795D25E66DFA96ACA1253CFD0AD3995096/")'
        redSquareLeft += 2;
        redSquare.style.left = `${redSquareLeft}px`;
    

    } else if (redSquareLeft === parentBlockWidth - redSquare.offsetWidth && redSquareBottom < parentBlockHeight - redSquare.offsetHeight) {
        redSquare.innerHTML = gif
        let knight = redSquare.querySelector('img')
        knight.style.width = '120%';
        knight.style.height = '250px'
        parentBlock.style.backgroundImage = 'url("https://otvet.imgsmail.ru/download/u_6dea8b3e070219d94acb33fd90d97fc6_800.jpg")'
        redSquareBottom += 2;
        redSquare.style.top = `${redSquareBottom}px`;
    

    } else if (redSquareLeft > 0 && redSquareBottom === parentBlockHeight - redSquare.offsetHeight) {
        redSquare.innerHTML = gif3
        let knight = redSquare.querySelector('img')
        knight.style.width = '100%';
        knight.style.height = '120%'
        parentBlock.style.backgroundImage = 'url("https://eldritch.ru/wp-content/uploads/2023/07/word-image-1370-15.jpeg")'
        redSquare.style.transform = 'scaleX(-1)';
        redSquareLeft -= 2;
        redSquare.style.left = `${redSquareLeft}px`;
    

    } else if (redSquareLeft === 0 && redSquareBottom > 0) {
        redSquare.innerHTML = gif
        let knight = redSquare.querySelector('img')
        knight.style.width = '120%';
        knight.style.height = '250px'
        parentBlock.style.backgroundImage = 'url("https://steamuserimages-a.akamaihd.net/ugc/1826772178563839703/E8ABA11747D8F6F010DBBF89B83DE2D70B19482E/")'
        parentBlock.style.backgroundImage = '/project/project/media/Бездна.jpg'
        redSquareBottom -= 2;
        redSquare.style.top = `${redSquareBottom}px`;
    }

    requestAnimationFrame(moveBlock)
}

moveBlock()


const url = '../data/any.json'

const fetchPost = async () =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }catch (e){
        console.log(e)
    }
}

fetchPost()

// Modal
// removeEventListner
// scroll




const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const introMedia = document.querySelector('.intro_media')
const introImg = introMedia.querySelector('.back')


const hideTabContent = () =>{
    tabContentBlocks.forEach((item) =>{
        item.style.display = 'none'

    })

    tabItems.forEach((item) =>{
        item.classList.remove('tab_content_item_active')
    })


}

const showTabContent = (index = 0) =>{
    
    tabContentBlocks[index].style.display = 'block'
    introImg.src = `../media/${tabItems[index].innerHTML}.jpg`
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()


let q = 0

const changeTab = () =>{
    hideTabContent()
    q = (q+1) % tabItems.length
    showTabContent(q)
}

const interval = setInterval(()=>{
    changeTab()
}, 5000)



tabParent.onclick = (event) =>{
    
    if(event.target.classList.contains('tab_content_item')){
        tabItems.forEach((item, index) =>{
            if(event.target === item){
                q = index
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}
