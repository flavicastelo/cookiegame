const pikachu = document.querySelector(".pikachu");
const pokeball = document.querySelector(".pokeball");
const pokeLife = document.querySelector(".poke-life");

var count = 0;

const jump = () => {
    pikachu.classList.add('jump-pikachu'); //add a class jump dentro da class do selector pikachu    

    count++;
    document.querySelector('.count').innerHTML = count;

    setTimeout( () => {
        pikachu.classList.remove("jump-pikachu");
    }, 500); //remove a classe jump depois de 500ms [500 é o tempo usado na classe do pulo]
   
};

//vai repetir a execução da função de tempos em tempos
const loopGame = setInterval(()=>{
    const pokeballPosition = pokeball.offsetLeft;
    const pikachuPosition = +window
    .getComputedStyle(pikachu)
    .bottom.replace("px", "");
    
    
        if(pokeballPosition <= 120 && pokeballPosition > 0 && pikachuPosition < 80){
            pokeball.style.animation = "none";
            pokeball.style.left = `${pokeballPosition}px`;
        
            pikachu.style.animation = "none";
            pikachu.style.bottom = `${pikachuPosition}px`;
        
            pikachu.src = "./img/pikachu-over.png";
            pikachu.style.width = "100px";
            pikachu.style.marginLeft = "45px";
            
            

            clearInterval(loopGame);
        }
    
     
        
        
    

}, 10);




document.addEventListener("keydown", jump); //adiciona o evento, (tecla, funcao) [keydown = qualquer tecla]


