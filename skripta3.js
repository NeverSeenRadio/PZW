console.log("Pozdrav iz vanjske datoteke"); 
//varijable i tipovi ppodataka 


//brojevi

let a = 83;
let b = 7;
let duljinaa = 72.38; //float
let težina = 123.88; 
const PI =3.14; //konstanta

//niziovi znakova

let ime = "Ivo ivić";
let poruka = "Pozdrav hakeri!";
//polja (array)
let auti = ["bmw","audi","mercedes"]

const osoba = {ime: "Ivo", prezime: "Ivić" , razred: "3.a"}

// Ispis u konzolu
console.log("=== BROJEVI ===");
console.log("a:", a);
console.log("b:", b);
console.log("duljinaa:", duljinaa);
console.log("težina:", težina);
console.log("PI:", PI);
console.log("\n=== NIZOVI ZNAKOVA ===");
console.log("ime:", ime);
console.log("poruka:", poruka);
console.log("\n=== POLJA (ARRAY) - AUTI ===");
for (let i = 0; i < auti.length; i++) {
  console.log(`auti[${i}]:`, auti[i]);
}
console.log("\n=== OBJEKTI - OSOBA ===");
for (let key in osoba) { 
  console.log(`${key}:`, osoba[key]);
}
