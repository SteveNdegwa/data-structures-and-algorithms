/// iterable, only unique values
/// searching and deleting faster than arrays

const set = new Set([1,2,3])

set.add(4);

set.has(4); // true

set.delete(3);

console.log(set.size);

set.clear() /// delete all elements

for(const item of set){
    console.log(item);
}

