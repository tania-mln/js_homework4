function checkProbabilityTheory(count) {
    const numbers = [];
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 901) + 100;
        numbers.push(randomNumber);
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = numbers.length;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log(`Кількість згенерованих чисел: ${totalNumbers}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток не парних: ${oddPercentage.toFixed(2)}%`);
    console.log(evenPercentage.toFixed(2) === "50.00" ? "Співвідношення близьке до 50/50" : "Співвідношення не близьке до 50/50");
}

