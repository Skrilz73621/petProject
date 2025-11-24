const content = document.querySelector('.cards-wrapper')
let id = 1


const fetchPost = async () =>{
    if(id < 10){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()        
        const card = `
        <div class="content">
        <img src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987722169-VV6ZASHHZNRBJW9X0PLK/Key_Art_02_layeredjpg.jpg?format=1500w">
        <div class="description">
        <h1>${data.title}</h1>
        <h3>${data.body}</h3>
        </div>
        </div>    
    `
    content.innerHTML += card
    id++
    requestAnimationFrame(fetchPost)

    }else{
        const footer = `
        <footer>
        <div class="footer-container">

        <div class="footer-section about">
            <h3>О проекте</h3>
            <p>Маленький проект с душой о моей любимой игре за все время</p>
        </div>

        <hr style="margin: 0px;">

        <div class="footer-section links">
            <h3>Пагинация</h3>
            <ul class="footer_ul">
                  <li><a href="/project/project/pages/characters.html">Персонажи</a></li>
                  <li><a href="/project/project/pages/home_works.html">Локации</a></li>
                  <li><a href="/project/project/pages/music.html">Музыка</a></li>
                  <li><a href="/project/project/pages/cards.html">Карточки</a></li>
                  <li><a href="/project/project/pages/lessons.html">Амулеты</a></li>
            </ul>
        </div>

            <hr style="margin: 0px;">

        <div class="footer-section social">
            <h3>Я в соцсетях</h3>
            <ul class="footer_ul">
            <li><a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i> YouTube</a></li>
            </ul>
        </div>
        </div>


        </footer>`

        content.innerHTML += footer

    }

}





fetchPost()