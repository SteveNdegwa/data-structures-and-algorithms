/// iterable, ordered,  both keys and values can be of any data type
/// restricted to just storing data - no functions

const map = new Map([['a', 1], ['b', 2]]);

map.set('c', 3);

console.log(map.has('a'));  // true

map.delete('c');

console.log(map.size); // 2

map.clear() // delete all

for(const [key, value] of map){
    console.log(`${key} : ${value}`);
}

