//Мы можем конвертировать его в массив с помощью Array.from:

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more