/**
  * Follows the principle of Last In First Out (LIFO)  eg. stack of plates

  * utilizes push and pop
 
  * Useful in;
     Browser history tracking 
     Undo operation when typing
     Call stack in JavaScript runtime
  */


class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        this.items.pop();
    }

    peek(){  // return element at top of stack
        return this.items[this.items.length - 1];
    }

    isEmpty(){ // return true or false
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){ // view itmes in stack
        console.log(this.items.toString());
    }
}     

const stack = new Stack();

stack.push(20)
stack.push(10)
stack.push(30)

console.log(stack.size());
stack.print();
console.log(stack.peek());