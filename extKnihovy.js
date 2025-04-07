/*
npm install @faker-js/faker dayjs
*/

//Faker.js – falešná testovací data
//Použití: generování náhodných jmen, emailů, hesel atd. v testech

import { faker } from "@faker-js/faker";

console.log(faker.name.fullName());
console.log(faker.internet.email());
console.log(faker.address.city());
console.log(faker.date.past(10)); // datum před 10 lety
console.log(faker.image.avatar()); // URL na avatar
//--------------------------    --------------------------

// Pro použití Faker.js je nejprve potřeba nainstalovat balíček:
// npm install @faker-js/faker

// Import knihovny Faker.js
import { faker } from "@faker-js/faker";

// Nastavení lokalizace na češtinu (pokud je vyžadováno)
// faker.locale = 'cs'; // Poznámka: čeština nemusí být plně podporována

// Funkce pro vygenerování náhodného uživatele
function createRandomUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName({ firstName, lastName }),
    email: faker.internet.email({ firstName, lastName }),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),

    // Kontaktní informace
    phone: faker.phone.number(),

    // Adresa
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      zipCode: faker.location.zipCode(),
    },
  };
}

// Vytvoření testovacího uživatele
const testUser = createRandomUser();

// Výpis uživatele do konzole
console.log(testUser);

//--------------------------    --------------------------

//Dayjs – práce s datumem a časem
//Použití: kontrola datumů, porovnání, formátování ve výstupu testu

import dayjs from "dayjs";

console.log(dayjs().format("YYYY-MM-DD"));
console.log(dayjs().add(7, "day").format("dddd, MMMM D"));
console.log(dayjs("2025-04-04").fromNow());

//--------------------------    --------------------------
// Pro použití Day.js je nejprve potřeba nainstalovat balíček:
// npm install dayjs

// Import knihovny Day.js
import dayjs from "dayjs";

// Případný import lokalizace pro češtinu (volitelné)
// import 'dayjs/locale/cs';
// dayjs.locale('cs');

// Získání aktuálního data
const currentDate = dayjs();

// Přidání 30 dnů k aktuálnímu datu
const futureDate = currentDate.add(30, "day");

// Formátování datumů do čitelné podoby
// Různé možnosti formátování:

// 1. Standardní formát (např. 7. dubna 2025)
const standardFormat = currentDate.format("D. MMMM YYYY");
const futureDateStandard = futureDate.format("D. MMMM YYYY");

// 2. S časem (např. 7. dubna 2025, 14:30:45)
const withTimeFormat = currentDate.format("D. MMMM YYYY, HH:mm:ss");
const futureDateWithTime = futureDate.format("D. MMMM YYYY, HH:mm:ss");

// 3. Krátký formát (např. 07.04.2025)
const shortFormat = currentDate.format("DD.MM.YYYY");
const futureDateShort = futureDate.format("DD.MM.YYYY");

// Výpis výsledků
console.log("Aktuální datum (standardní):", standardFormat);
console.log("Datum za 30 dní (standardní):", futureDateStandard);

console.log("\nAktuální datum (s časem):", withTimeFormat);
console.log("Datum za 30 dní (s časem):", futureDateWithTime);

console.log("\nAktuální datum (krátký):", shortFormat);
console.log("Datum za 30 dní (krátký):", futureDateShort);
