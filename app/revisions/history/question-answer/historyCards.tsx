export const historyCards = [
{
id: 1,
front: "Quel événement marque le début de la Seconde Guerre mondiale ?",
back: "Invasion de la Pologne en 1939",
isFlippedCard: false
},

{
id: 2,
front: "Qui était le président des États-Unis lors de la crise des missiles de Cuba ?",
back: "John F. Kennedy",
isFlippedCard: false
},

{
id: 3,
front: "En quelle année l’URSS s’est-elle effondrée ?",
back: "1991",
isFlippedCard: false
},

{
id: 4,
front: "Quel traité a mis fin à la Première Guerre mondiale ?",
back: "Traité de Versailles",
isFlippedCard: false
},

{
id: 5,
front: "Quand la Révolution française a-t-elle commencé ?",
back: "1789",
isFlippedCard: false
},

{
id: 6,
front: "Quelle est la date du débarquement en Normandie ?",
back: "6 juin 1944",
isFlippedCard: false
},

{
id: 7,
front: "Quel pays a colonisé l’Algérie ?",
back: "France",
isFlippedCard: false
},

{
id: 8,
front: "Qui était le dirigeant de l’Allemagne nazie pendant la Seconde Guerre mondiale ?",
back: "Adolf Hitler",
isFlippedCard: false
},

{
id: 9,
front: "Quel pays a subi la première attaque nucléaire ?",
back: "Japon (Hiroshima et Nagasaki)",
isFlippedCard: false
},

{
id: 10,
front: "Qui était le chef de la France libre pendant la Seconde Guerre mondiale ?",
back: "Charles de Gaulle",
isFlippedCard: false
}
]

export const flippedCards:any =[]
historyCards.map((geographyCard, index) =>(
  flippedCards.push(geographyCard.isFlippedCard),
  flippedCards.push(false)) // pour prendre en compte le dernier élément de la liste
)













































































































































































































































































































































































































































































































