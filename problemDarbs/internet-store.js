const items = [
    {
        nosaukums: "Viedtālrunis",
        cena: 699.99,
        kategorija: "Elektronika",
    },
    {
        nosaukums: "Kleita",
        cena: 49.99,
        kategorija: "Apģērbs",
    },
    {
        nosaukums: "Klepjdators",
        cena: 19.99,
        kategorija: "Elektronika",
    },
    {
        nosaukums: "Grāmata",
        cena: 14.99,
        kategorija: "Literatūra",
    }
];

const Elektronika = items.filter(item => item.kategorija === "Elektronika");

if (Elektronika.length > 0) {
    console.log("Elektroniskas preces: ");
    Elektronika.forEach(item => {
        console.log(`- ${item.nosaukums}: $${item.cena}`);
    });
} else {
    console.log("Nav pieejamu elektronisku preču.");
}

cena = items.reduce((sum, item) => sum + item.cena, 0);
console.log(`Kopējā preču cena: $${cena.toFixed(2)}`);