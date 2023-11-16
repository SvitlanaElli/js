var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

services.price = function () {
    let total = 0;
    for (let service in this) {
        if (this.hasOwnProperty(service) && typeof this[service] === 'string') {
            total += parseFloat(this[service]);
        }
    }
    return total;
};

services.minPrice = function () {
    let min = Infinity;
    for (let service in this) {
        if (this.hasOwnProperty(service) && typeof this[service] === 'string') {
            let price = parseFloat(this[service]);
            if (price < min) {
                min = price;
            }
        }
    }
    return min;
};

services.maxPrice = function () {
    let max = -Infinity;
    for (let service in this) {
        if (this.hasOwnProperty(service) && typeof this[service] === 'string') {
            let price = parseFloat(this[service]);
            if (price > max) {
                max = price;
            }
        }
    }
    return max;
};

// Викликаємо методи
console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуг: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуг: " + services.maxPrice() + " грн");