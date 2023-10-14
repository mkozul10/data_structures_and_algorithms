function Queue() {
    const arr = [];

    const enqueue = (item) => arr.push(item);

    const isEmpty = () => arr.length > 0 ? false : true;

    const size = () => arr.length;

    const dequeue = () => arr.shift();

    const front = () => arr[0];

    const print = () => console.log(arr);
    

    return {
        enqueue,
        dequeue,
        isEmpty,
        size,
        front,
        print
    }
}

const queue = Queue();

console.log('Print: ');
queue.print();
console.log('Adding 1,2,3,4,5,6');
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log('Print: ');
queue.print();

console.log('Is empty: ',queue.isEmpty());
console.log('Size: ', queue.size());
console.log('Front: ',queue.front());

console.log('Dequeue: ',queue.dequeue());
console.log('Dequeue: ',queue.dequeue());

console.log('Is empty: ',queue.isEmpty());
console.log('Size: ', queue.size());
console.log('Front: ',queue.front());
console.log('Print: ');
queue.print();
