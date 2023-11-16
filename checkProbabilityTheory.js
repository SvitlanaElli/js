function checkProbabilityTheory(count) {
    let generatedNumbers = [];
    let evenCount = 0;
    let oddCount = 0;

    // Генеруємо випадкові числа та обчислюємо кількість парних та непарних
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1001 - 100) + 100);
        generatedNumbers.push(randomNumber);

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Виводимо інформацію
    console.log('Кількість згенерованих чисел: ' + count);
    console.log('Парних чисел: ' + evenCount);
    console.log('Непарних чисел: ' + oddCount);

    // Обчислюємо та виводимо відсоткове співвідношення
    let percentageEven = (evenCount / count) * 100;
    let percentageOdd = (oddCount / count) * 100;
    console.log('Відсоток парних до не парних: ' + percentageEven.toFixed(2) + '% : ' + percentageOdd.toFixed(2) + '%');
}

// Приклад виклику функції з параметром 100
checkProbabilityTheory(100);