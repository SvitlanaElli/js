// створюємо конструктор 
function MyObject(shape, form, color) {
    this.shape = shape;
    this.form = form;
    this.color = color;
}

// додаємо метод getInfo
MyObject.prototype.getInfo = function () {
    let info = '';
    for (let key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
            info += key + ': ' + this[key] + ', ';
        }
    }
    info = info.slice(0, -2);
    console.log(info);
};
// створюємо обджект
let myObject = new MyObject('твердий', 'круглий', 'зелений');

myObject.getInfo();
myObject.newProperty = 'смачний'; //Нова властивість
myObject.getInfo();