const ListaPoke = document.querySelector("#pokemon-list");
const buttonheader = document.querySelectorAll("button");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch (URL + i)
        .then((response) => response.json())
        .then(data => mostrarpoke(data))
}

function mostrarpoke(poke) {

    let tipos = poke.types.map((type) =>`<p class="py-1 px-2 rounded-full ${type.type.name}" id="electric">${type.type.name}</p>`);
    tipos = tipos.join('')


    let pokeId = poke.id.toString();
    if (pokeId.length === 1){
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }


    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <div class="bg-slate-50 rounded-2xl shadow-md
    shadow-gray-300 uppercase relative isolate overflow-hidden" id="pokemon-card">
        <p class="absolute left-1/2 -translate-x-2/4
        top-4 text-8xl font-semibold text-slate-300 -z-10" id="pokemon-number">#${pokeId}</p>
        <div class="py-4 flex justify-center" id="pokemon-imagen">
                <img class="w-full max-w-24" src="${poke.sprites.other["official-artwork"].front_default} "
                alt="${poke.name}">
        </div>
        <div class="flex flex-col gap-2 py-4
        items-center text-center" id="pokemon-info">
            <div class="flex items-center gap-x-2 flex-wrap justify-center" id="nombre-container">
                <p class="bg-stone-200 py-1 px-2 rounded-full
                font-semibold text-xs" id="pokemon-id">#${pokeId}</p>
                <h2 class="text-2xl font-semibold" id="pokemon-name">${poke.name}</h2>
            </div>
            <div class="flex gap-2 text-xs font-medium
            flex-wrap justify-center" id="pokemon-type">
                ${tipos}
            </div>
            <div class="flex text-sm gap-4" id="pokemon-stats">
                <p id="height">${poke.height}cm</p>
                <p id="weight">${poke.weight}kg</p>
            </div>
        </div>
    </div>
`;
ListaPoke.append(div)
}

buttonheader.forEach(boton => boton.addEventListener("click", async (event) => {
    const botonId = event.currentTarget.id;
    ListaPoke.innerHTML = "";

    if (botonId === "see-all") {
        for (let i = 1; i <= 151; i++) {
            const response = await fetch(URL + i);
            const data = await response.json();
            mostrarpoke(data);
        }
    } else {
        for (let i = 1; i <= 151; i++) {
            const response = await fetch(URL + i);
            const data = await response.json();
            const tipos = data.types.map(type => type.type.name);
            if (tipos.includes(botonId.toLowerCase())) {
                mostrarpoke(data);
            }
        }
    }
}));