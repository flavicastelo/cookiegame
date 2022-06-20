const pikachu = document.querySelector(".pikachu");
const pokeball = document.querySelector(".pokeball");
const pokeLife = document.querySelector(".poke-life");
const continuar = document.querySelector(".continue-flag");
const audio = document.querySelector("#player");
var qtd = 0;
var count = 0;

const jump = () => {
    pikachu.classList.add('jump-pikachu'); //add a class jump dentro da class do selector pikachu     
   
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
    qtd++;
    if(pokeballPosition <= 120 && pokeballPosition > 0 && pikachuPosition < 80){
        pokeball.style.animation = "none";
        pokeball.style.left = `${pokeballPosition}px`;
    
        pikachu.style.animation = "none";
        pikachu.style.bottom = `${pikachuPosition}px`;
    
        pikachu.src = "./img/pikachu-over.png";
        pikachu.style.width = "150px";
        pikachu.style.marginLeft = "45px";
        
        //tirar vida quando perde
        pokeLife.style.display = 'none';            

        clearInterval(loopGame);
        continuar.classList.remove('continue-flag');
        continuar.classList.add('continue');

        document.getElementById('player').pause();
        audio.src = "./audio/game-over.wav";
        audio.type = "audio/wav";
        audio.play();
        document.getElementById('player').removeAttribute('loop');
        
       
    } else if(pokeballPosition == 0){   //contador de pontos                        
        count++;
        document.querySelector('.count').innerHTML = count;
    }  
    
    // for (let i=0; i < 6; i++) {
    // document.location.reload(true);
    // }
}, 10);

document.addEventListener("keydown", jump); //adiciona o evento, (tecla, funcao) [keydown = qualquer tecla]



