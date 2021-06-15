// let actor = document.querySelector('.portrayed');
const getChs = document.querySelector('#get-character');
let result = document.querySelector('#result');
let cName = document.querySelector('.char-name');
let cNick = document.querySelector('.char-nick');
let occup = document.querySelector('.occupation').style.color= "red";



getChs.addEventListener('click', () => {

    let random = Math.floor(Math.random() * 61) +1;
    console.log(random);

    async function getData(){
        const bBadUrl = `https://www.breakingbadapi.com/api/characters`

        const response = await fetch(bBadUrl);
        const data = await response.json();
        console.log(data.length);
        const {img, name, nickname} = data[random];
        const occupation = data[random].occupation[0];

        if(name === "Holly White"){
            result.innerHTML = '<img src = "https://i.pinimg.com/originals/2f/05/61/2f0561e02700247edc7cdd9ca703e349.jpg">'
            cName.innerHTML = `<p class="char-name">${name}</p>`;
            cNick.innerHTML = `<p class="char-name">Nickname/Info: Holly</p>`;
            actor.innerHTML = `<p class="portrayed">Actor: Holly</p>`;

        }else{
            console.log(name);
            
            result.innerHTML = `<img src="${img}">`;
            cName.innerHTML = `<p class="char-name">${name}</p>`;
            cNick.innerHTML = `<p class="char-name">Nickname/Info: ${nickname}</p>`;
            occup.innerHTML = `<p class="occupation">Occupation: ${occupation}</p>`;
            console.log(occupation);
            
        }
        
    }
    
    
    getData();
});
