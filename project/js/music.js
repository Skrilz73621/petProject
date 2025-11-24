const wrapper = document.querySelector('.music')
const popa = {
    pause:'<i class="fa-solid fa-pause"></i>',
    play:'<i class="fa-solid fa-play"></i>'
}

const fetchPost = async () =>{
    const response = await fetch('../data/music.json')
    const data = await response.json()
    data.forEach((element) => {
        let cardBlock = `
            <div class="background" style="background-image: url('${element.background}');">
            <h1>${element.name}</h1>
                <button class="playBtn">
                    ${popa.play} Play
                </button>
                <audio class="audioPlayer" src="${element.url}"></audio>
            </div>
        `
        wrapper.innerHTML += cardBlock
    });


    const playButtons = document.querySelectorAll('.playBtn');
        playButtons.forEach((button, index) =>{
            button.addEventListener('click', ()=>{
                const audioPlayer = button.nextElementSibling

                if(audioPlayer.paused){
                    document.querySelectorAll('.audioPlayer').forEach(el =>{
                        if(!el.paused && el !== audioPlayer){
                            el.pause()
                            el.previousElementSibling.innerHTML = `${popa.play} Play`;
                        }
                        audioPlayer.play()
                        button.innerHTML = `${popa.pause} Pause`
                    });

                }else{
                    audioPlayer.pause()
                    button.innerHTML = `${popa.play} Play`
                };
            })
    })
}
fetchPost()



