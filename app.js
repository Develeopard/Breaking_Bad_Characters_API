const getChs = document.querySelector('#get-character');
let result = document.querySelector('#result');
let cName = document.querySelector('.char-name')


getChs.addEventListener('click', () => {

    let random = Math.floor(Math.random() * 61) +1;
    console.log(random);

    async function getData(){
        const bBadUrl = `https://www.breakingbadapi.com/api/characters`

        const response = await fetch(bBadUrl);
        const data = await response.json();
        console.log(data.length);
        const {img, name} = data[random];

        if(name === "Holly White"){
            result.innerHTML = '<img src = "https://i.pinimg.com/originals/2f/05/61/2f0561e02700247edc7cdd9ca703e349.jpg">'
            cName.innerHTML = `<p class="char-name">${name}</p>`;

        }else{
            console.log(name);
            
            result.innerHTML = `<img src="${img}">`;
            cName.innerHTML = `<p class="char-name">${name}</p>`;
        }
        
    }
    
    
    getData();
});
