class Character {
    constructor(name,eyecolor,birthyear){
        this.name = name
        this.eyecolor = eyecolor
        this.birthyear = birthyear
    }
    setPage() {
        const pageName = document.getElementById("name");  
        const pageEyecolor = document.getElementById("eyecolor"); 
        const pageBirthyear = document.getElementById("birthyear");
        pageName.innerHTML = `<strong>Name:</strong> ${this.name}`
        pageEyecolor.innerHTML = `<strong>Eye color:</strong> ${this.eyecolor}`
        pageBirthyear.innerHTML = `<strong>Birth year:</strong> ${this.birthyear}` 
    }
};

//fetch random character from https://swapi.dev//api/
document.getElementById("myBtn").addEventListener("click", function() {
    //get random character
    let randomNumber = Math.floor(Math.random()*83)
    fetch(`https://swapi.dev//api/people/${randomNumber}`)
        .then(response => response.json())
        .then(character => { 
            characterz = new Character(character.name, character.eye_color, character.birth_year).setPage()        
            });
  });
