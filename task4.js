const number = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            if (randomNumber % 2 === 0) {
                resolve(randomNumber);
            } else {
                reject(randomNumber);
            }
        }, 3000);
    });
};

number()
    .then(number => {
        console.log("Завершено успешно. Сгенерированное число - " + number);
    })
    .catch(number => {
        console.log("Завершено с ошибкой. Сгенерированное число - " + number);
    });