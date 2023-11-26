var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

var filteredEmails = arr.filter(function(obj) {
    return emailRegex.test(obj.email);
});

console.log(filteredEmails);


// ^[a-zA-Z0-9]+   початок рядка з одного або більше латинських букв або цифр
// (?:\.[a-zA-Z0-9]+)*   нуль або більше повторень групи
// @  email
// (gmail\.com|yahoo\.com)  група для визначення допустимих доменів - gmail.com або yahoo.com
// $ Кінець рядка
// після цього використовуємо метод filter