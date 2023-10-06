const calcAverageHumanAge = function (ages) {
    // 1. Tính tuổi của chó theo tuổi của con người
    const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

    // 2. Loại trừ chó có tuổi dưới 18
    const adults = humanAges.filter(age => age >= 18);

    // 3. Tính tuổi trung bình của các chó trưởng thành
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    return average;
};

// TEST DATA 1
console.log('---- TEST DATA 1 ----');
const averageAge1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(`Tuổi trung bình của các chó trưởng thành là: ${averageAge1} tuổi người.`);

// TEST DATA 2
console.log('\n---- TEST DATA 2 ----');
const averageAge2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(`Tuổi trung bình của các chó trưởng thành là: ${averageAge2} tuổi người.`);
