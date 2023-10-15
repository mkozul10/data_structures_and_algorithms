function hash(string, max){
    let hash = 0;
    for(let i = 0; i < string.length; i++){
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

function HashTable(){
    let storage = [];
    const storageLimit = 4;

    const add = (key, value) => {
        let index = hash(key, storageLimit);
        if(storage[index] === undefined){
            storage[index] = [
                [key, value]
            ];
        }
        else{
            let inserted = false;
            for(let i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if(!inserted) storage[index].push([key,value]);
        }
    }

    const remove = (key) => {
        let index = hash(key, storageLimit);
        if(storage[index].length === 1 && storage[index][0][0] === key) delete storage[index];
        else{
            for(let i = 0; i < storage[index]; i++){
                if(storage[index][i][0] === key) delete storage[index][i];
            }
        }
    }

    const lookup = (key) => {
        let index = hash(key, storageLimit);
        if(storage[index] === undefined) return undefined;
        else{
            for(let i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key) return storage[index][i][1];
            }
        }
    }
    return {
        add,
        remove,
        lookup
    }
}

const hashmap = HashTable();
hashmap.add('Mario');
hashmap.add('Ana');
hashmap.add('Pero');
hashmap.add('Marija');
//console.log(hashmap.lookup('Mario'));

//BUILT IN ALTERNATIVE

const newMap = new Map();
newMap.set('age',30);
newMap.set('name','Mario');
newMap.set('surname','Kozul');
newMap.forEach(el => {
    console.log(el);
})

