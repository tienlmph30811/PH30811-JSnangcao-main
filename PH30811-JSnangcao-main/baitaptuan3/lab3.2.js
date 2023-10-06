const checkDogs = function (dogsJulia, dogsKate) {
    // 1. Tạo một bản sao của mảng Julia và loại bỏ tuổi mèo
    const juliaCopy = dogsJulia.slice(1, -2);

    // 2. Tạo một mảng chứa cả dữ liệu của Julia (đã sửa) và Kate
    const allDogs = [...juliaCopy, ...dogsKate];

    // 3. Đánh dấu trạng thái của từng con chó
    allDogs.forEach(function (age, i) {
        const dogType = age >= 3 ? 'trưởng thành' : 'chó con';
        console.log(`Chó số ${i + 1} là ${dogType} và ${age} tuổi.`);
    });

    // 4. Julia phát hiện sai cho chó đầu tiên và hai chó cuối cùng
    const isDogMistaken = juliaCopy.some(age => age < 3);

    // 5. Xuất thông báo kết quả cho Julia
    if (isDogMistaken) {
        console.log('Julia đã phát hiện sai! Một trong ba chó đầu tiên hoặc hai chó cuối cùng là mèo.');
    } else {
        console.log('Julia không phát hiện sai. Tất cả chó của cô ấy đều là chó.');
    }
};

// TEST DATA 1
console.log('---- TEST DATA 1 ----');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// TEST DATA 2
console.log('\n---- TEST DATA 2 ----');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
