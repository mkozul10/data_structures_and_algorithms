function Stack(){
    const stackArray = [];

    const addItem = (item) => stackArray.push(item);
    const removeItem = () => stackArray.pop();
    const length = () => stackArray.length;
    const peek = () => stackArray[length() - 1];

    return {
        addItem,
        removeItem,
        peek,
        length
    }
}

const stack = Stack();

console.log('Adding 2,4,6,8,10');
stack.addItem(2);
stack.addItem(4);
stack.addItem(6);
stack.addItem(8);
stack.addItem(10);
console.log('Peek: ',stack.peek());
console.log('Length: ', stack.length());
console.log('Pop: ', stack.removeItem());
console.log('Peek: ',stack.peek());
console.log('Length: ', stack.length());
console.log('Pop: ', stack.removeItem());
console.log('Peek: ',stack.peek());
console.log('Length: ', stack.length());
