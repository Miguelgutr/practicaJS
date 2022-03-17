console.log("Funcionando");
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("entrada");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://sm.ign.com/t/ign_latam/screenshot/default/pikachu-triste_auuu.1280.jpg")
            pokeNombre("error");
            pokeTipo("error");
            pokeHp("error");
            pokeAtk("error");
            pokeDef("error")
            pokeSpAtk("error");
            pokeSpDef("error");
            pokeSpeed("error");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data)
        if (data) {
            console.log(data);
            // Estadisticas del pokemon
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let name = data.name;
            pokeNombre(name);
            let typo = data.types[0].type.name;
            pokeTipo(typo.toString());
            let hp = data.stats[0].base_stat;
            pokeHp(hp);
            let atk = data.stats[1].base_stat;
            pokeAtk(atk)
            let def = data.stats[2].base_stat;
            pokeDef(def)
            let spatk = data.stats[3].base_stat;
            pokeSpAtk(spatk);
            let spdef = data.stats[4].base_stat;
            pokeSpDef(spdef);
            let speed = data.stats[5].base_stat;
            pokeSpeed(speed);
            // Movimientos
            let mov = data.moves;
            let movlng = data.moves.length;
            pokeMove(mov,movlng);
        }
    });
}
//Movimientos
const pokeMove = (movs,len) =>{
    const movtxt = document.getElementById("movtxt");
   // console.log(movs[0].move.name);
   movtxt.innerHTML = " " ;
    for (let i = 0; i <len ; i++) {
        let movimientos= movs[i].move.name;
        console.log(movimientos);
        movtxt.innerHTML += movimientos +" " + ", " ;
    }
}

// Estadisticas del pokemon
const pokeSpeed = (speeds) =>{
    const speed = document.getElementById("speed");
    speed.innerHTML = "Velocidad: " + speeds;
    progresspeed.value = speeds;
}
const pokeSpDef = (sdefe) =>{
    const spDef = document.getElementById("spDef");
    spDef.innerHTML = "Defensa especial: " + sdefe;
    progresspDef.value = sdefe;
}
const pokeSpAtk = (spat) =>{
    const spatk = document.getElementById("spatk");
    spatk.innerHTML = "Ataque especial: " + spat;
    progresspatk.value = spat;
}
const pokeDef = (defe) =>{
    const def = document.getElementById("def");
    def.innerHTML = "Defensa: "+ defe;
    progresdef.value = defe;
}
const pokeAtk = (atk) =>{
    const ataq = document.getElementById("atk");
    ataq.innerHTML= "Ataque: "+ atk;
    progresatk.value = atk;
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeNombre = (name) =>{
    const nombre = document.getElementById("nombre")
    nombre.innerHTML = name; 
}
const pokeTipo = (type) =>{
    const tipo = document.getElementById("tipo")
    tipo.innerHTML = "Tipo de Pokemon: " + type; 
}
const pokeHp = (hpp) =>{
    const hp = document.getElementById("hp");
    hp.innerHTML = "HP: " + hpp;
    progreshp.value = hpp;
}

//Desplegar cuadros

function excer(){
    var caja = document.getElementById("estadis");
     if (caja.style.display == "none"){
         document.getElementById("estadis").style.display="block";            }
     else{
         document.getElementById("estadis").style.display="none";
     }
     var caja2 = document.getElementById("movs");
     if (caja2.style.display == "none"){
         document.getElementById("movs").style.display="block";            }
     else{
         document.getElementById("movs").style.display="none";
     }
     
 }