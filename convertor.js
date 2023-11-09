let unit = "км"; // одиниця виміру 
let value = 10; // кількість

let result;

switch (unit) {
  case "км":
    result = `${value} км це ${value * 1000} м.`;
    break;
  case "год":
    result = `${value} год це ${value * 60} хв.`;
    break;
  case "кг":
    result = `${value} кг це ${value * 1000} г.`;
    break;
  default:
    result = "Невідома одиниця виміру";
    break;
}

console.log(result);