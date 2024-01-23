
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

// Bước 1
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// Bước 2
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
const sarahsDogIsEatingTooMuch = sarahsDog.curFood > sarahsDog.recommendedFood * 1.1;
const sarahsDogIsEatingTooLittle = sarahsDog.curFood < sarahsDog.recommendedFood * 0.9;

// Bước 3
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(dog => {
    const isEatingTooMuch = dog.curFood > dog.recommendedFood * 1.1;
    const isEatingTooLittle = dog.curFood < dog.recommendedFood * 0.9;
    
    if (isEatingTooMuch) {
        ownersEatTooMuch.push(...dog.owners);
    }
    
    if (isEatingTooLittle) {
        ownersEatTooLittle.push(...dog.owners);
    }
});

// Bước 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Bước 5
const isExactRecommendation = dogs.every(dog => dog.curFood === dog.recommendedFood);
console.log(`Is there any dog eating the exact recommended amount? ${isExactRecommendation}`);

// Bước 6
const isReasonableRecommendation = dogs.every(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(`Is there any dog eating a reasonable amount? ${isReasonableRecommendation}`);

// Bước 7
const dogsWithReasonableFood = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log('Dogs with reasonable food:', dogsWithReasonableFood);

// Bước 8
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('Sorted dogs by recommended food:', sortedDogs);
