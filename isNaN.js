function myIsNaN(value) {
    // перевіряю чи value не число
    // чи воно не рівне самому собі 
    return typeof value === 'number' && value !== value;
}

// Приклади використання
console.log(myIsNaN(5)); 
console.log(myIsNaN('abc')); 
console.log(myIsNaN(NaN));   
console.log(myIsNaN('123')); 