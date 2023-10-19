class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) { 
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if(bucket){
        const sameKeyItem = bucket.find(item => item[0] === key);
        if(sameKeyItem) return sameKeyItem[1] = value
        return bucket.push([key, value])   
    }
    return this.table[index] = [[key, value]];
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if(bucket){
        const sameKeyItem = bucket.find(item => item[0] === key);
        if(sameKeyItem) return sameKeyItem[1];
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if(bucket){
        const sameKeyItem = bucket.find(item => item[0] === key);
        if(sameKeyItem) return bucket.splice(bucket.indexOf(sameKeyItem), 1)
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]){
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("name", "bruce");
table.set("mane", "clark");
table.set("age", 20);
table.set("age", 21);
table.set("location", "nairobi");
table.display();
console.log(table.get("age"));
table.remove("location");
table.display();
table.remove("name");
table.display();

//// average case complexity = O(1)  -- better hashing algs 
