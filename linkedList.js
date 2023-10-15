function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    let length = 0;
    let head = null;
    this.size = function(){
        return length;
    }

    this.head = function(){
        return head;
    }

    this.add = function(element){
        let node = new Node(element);
        if(head === null) head = node;
        else{
            let currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    }

    this.remove = function(element){
        let currentNode = head;
        let previousNode;
        if(currentNode.element === element) head = currentNode.next;
        else{
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;   
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.indexOf = function(element){
        let currentNode = head;
        let index = 0;
        if(currentNode.element === element) return index;
        currentNode = currentNode.next;
        while(currentNode){
            index++;
            if(currentNode.element === element) return index;
            currentNode = currentNode.next;
        }
        return undefined;   
    }

    this.addAt = function(index, element){
        let newNode = new Node(element);
        let currentNode = head;
        let oldNode;
        let indexOfList = 0;
        if(index >= length) return undefined;
        if(index === 0){
            head = newNode;
            head.next = currentNode;
            length++;
            return 1;
        }
        else{
            currentNode = currentNode.next;
            while(currentNode){
                indexOfList++;
                if(indexOfList + 1 === index){
                    oldNode = currentNode.next;
                    //
                    currentNode.next = newNode;
                    newNode.next = oldNode;
                    
                    length++;
                    return 1;
                }
                currentNode = currentNode.next;
            }
        }
    }

    this.removeAt = function(index){
        let currentNode = head;
        let previousNode;
        let indexOfList = 0;
        if(index >= length) return undefined;
        if(index === 0) {
            head = currentNode.next;
            return 1;
        }
        else{
            previousNode = currentNode;
            currentNode = currentNode.next;
            while(currentNode){
                indexOfList++;
                if(index === indexOfList){
                    previousNode.next = currentNode.next;
                    length--;
                    return true;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
    this.print = function(){
        let str = '';
        let currentNode = head;
        let value;
        if(!currentNode) console.log('Undefined');
        while(currentNode){
            if(currentNode.next === null) value = null;
            else value = currentNode.next.element;
            str += `(value: ${currentNode.element}, next: ${value}) -> `;
            currentNode = currentNode.next;
        }
        return str;
    }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
console.log('Size: ', linkedList.size());
console.log(linkedList.print());
console.log('Size: ', linkedList.size());