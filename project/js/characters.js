const url = '../data/characters.json'
const fetchPost = async () =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        document.querySelectorAll('.name').forEach((item, index) => item.innerHTML = data[index].name)
        document.querySelectorAll('.charBio').forEach((item, index) => item.innerHTML = data[index].bio)
        document.querySelectorAll('.photo').forEach((item,index) => item.src = data[index].photo)
    }catch(e){
        console.log(e)
    }
}   

fetchPost()