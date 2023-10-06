const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1. Tính khẩu phần ăn đề nghị và thêm vào mảng dogs
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2. Tìm chó của Sarah và kiểm tra khẩu phần ăn
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Chó của Sarah ăn quá ${sarahDog.curFood > sarahDog.recommendedFood ? 'nhiều' : 'ít'}.`);

// 3. Tạo mảng chứa chủ của chó ăn quá nhiều và chó ăn quá ít
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);

// 4. In ra thông báo về chủ của chó ăn quá nhiều và quá ít
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Kiểm tra nếu có chó nào ăn đúng khẩu phần ăn đề nghị
const correctPortion = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`Có chó nào ăn đúng khẩu phần ăn đề nghị không? ${correctPortion ? 'Có' : 'Không'}`);

// 6. Kiểm tra nếu có chó nào ăn ở mức hợp lý
const isProperPortion = dogs.some(
    dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
);
console.log(`Có chó nào ăn khẩu phần ăn ở mức hợp lý không? ${isProperPortion ? 'Có' : 'Không'}`);

// 7. Lọc ra các chó ăn ở mức hợp lý
const properPortionDogs = dogs.filter(
    dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
);
console.log('Các chó ăn khẩu phần ăn ở mức hợp lý:', properPortionDogs);

// 8. Tạo mảng chó mới và sắp xếp theo khẩu phần ăn đề nghị
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('Danh sách chó theo khẩu phần ăn đề nghị:', sortedDogs);
