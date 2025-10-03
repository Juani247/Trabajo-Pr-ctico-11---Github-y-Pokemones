// Array inicial con 3 pokemones
let pokemones = [
  { nombre: "Pikachu", tipo: "Eléctrico", hp: 100, ataque: 55 },
  { nombre: "Charmander", tipo: "Fuego", hp: 90, ataque: 52 },
  { nombre: "Squirtle", tipo: "Agua", hp: 95, ataque: 48 },
  { nombre: "Bulbasaur", tipo: "Agua", hp: 95, ataque: 48 }
];

let opcion = "";

while (opcion !== "4") {
  opcion = prompt(
    "Elige una opción:\n1. Mostrar Pokemones\n2. Cargar nuevo Pokémon\n3. Restar HP\n4. Salir"
  );

  if (opcion === "1") {
    console.log("Pokemones cargados:", pokemones);
    console.log("Lista de nombres:", pokemones.map(p => p.nombre));
  } 
  else if (opcion === "2") {
    let nombre = prompt("Nombre del Pokémon:");
    let tipo = prompt("Tipo:");
    let hp = parseInt(prompt("HP:"));
    let ataque = parseInt(prompt("Ataque:"));
    pokemones.push({ nombre, tipo, hp, ataque });
    console.log("Se agregó un nuevo Pokémon.");
  } 
  else if (opcion === "3") {
    let nombre = prompt("¿A qué Pokémon le querés restar HP?");
    let resta = parseInt(prompt("¿Cuánto HP restar?"));
    let p = pokemones.find(p => p.nombre === nombre);
    if (p) {
      p.hp -= resta;
      console.log(`Se restaron ${resta} HP a ${nombre}.`);
    } else {
      console.log("No se encontró ese Pokémon.");
    }
  }
}
