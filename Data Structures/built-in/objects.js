 /// not iterable , unordered
 
 const obj = {
    name: "john",
    age: 25,
    "key-three": true,
    sayMyName: function(){
        console.log(this.name)
    }
 }

 obj.sayMyName();

 console.log(obj.name);
 console.log(obj["key-three"]);

 obj.hobby = "football";

 delete obj.hobby;

 /// return arrays
 Object.keys(obj)
 Object.values(obj)
 Object.entries(obj)

 /**
  * insert, remove, access - O(1)
  * search - O(n)
  * Object.keys(), .values(), .entries() - O(n)
  */