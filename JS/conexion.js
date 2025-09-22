let pokemones = [];
let totalpokemones = 10;

async function Conexion() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalpokemones}`);
    const data = await res.json();
    return data.results;
}

async function General() {
    if(pokemones.length === 0) {
        pokemones = await Conexion();
    }
    home(pokemones);
    console.log(pokemones[9].name);
}

General();
