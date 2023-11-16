function pad(str, char, count, isStart) {
    // Перевіряю чи count не більше різниці між довжиною рядка та нужною довжиною
    count = Math.min(count, Math.max(0, str.length - count));
    
    let padding = '';
    for (let i = 0; i < count; i++) {
        padding += char;
    }

    return isStart ? padding + str : str + padding;
}

console.log(pad('qwerty', '+', 6, true)); 
console.log(pad('qwerty', '+', 6, false)); 