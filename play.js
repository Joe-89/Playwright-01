// Tento kód ukazuje, jak funguje asynchronní kód v JavaScriptu pomocí setTimeout
console.log("Začínám");

setTimeout(() => {
  console.log("Tahle zpráva přijde později");
}, 2000);

console.log("Kód pokračuje...");

// Tento kód ukazuje, jak funguje Promise v JavaScriptu
function slib() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hotovo!");
    }, 2500);
  });
}

slib().then((vysledek) => {
  console.log(vysledek);
});

// Tento kód ukazuje, jak funguje async/await v JavaScriptu
async function spust() {
  let vysledek = await slib();
  console.log("Výsledek:", vysledek);
}

spust();

// Tento kód ukazuje, jak funguje try/catch v JavaScriptu
async function spustSChybou() {
  try {
    let vysledek = await slib();
    console.log("Výsledek:", vysledek);
  } catch (error) {
    console.error("Nastala chyba:", error);
  }
}

spustSChybou();
console.log("Kód skončil...");

// Tento kód ukazuje, jak funguje generator v JavaScriptu

function* generator() {
  yield "První hodnota";
  yield "Druhá hodnota";
  yield "Třetí hodnota";
}

let gen = generator();

console.log(gen.next().value); // Vypíše "První hodnota"
console.log(gen.next().value); // Vypíše "Druhá hodnota"
console.log(gen.next().value); // Vypíše "Třetí hodnota"
console.log(gen.next().value); // Vrací { value: undefined, done: true } (done: true znamená, že generator je již vyčerpán)
