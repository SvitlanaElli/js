function myBlend(arr) {
    var currentIndex = arr.length, randomIndex, temporaryValue;
  
    // пока є елементи які не міксували
    while (currentIndex !== 0) {
      // вибираємо випадковий індекс
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // міняємо поточний елемент з випадковим
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  
  }
  
  // приклад:
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  myBlend(arr);
  console.log(arr); // перемішаний масив