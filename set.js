/*A set is a data structure that stores unique elements of the same type in a sorted order. Each value is a key, which means that we access each value using the value itself. With arrays, on the other hand, we access each value by its position in the container (the index).*/

function SetF(){
    var collection = [];

    const has = (element) => collection.indexOf(element);

    const values = () => collection;

    const size = () => collection.length;

    const add = (element) => {
        if(has(element) === -1){
            collection.push(element);
            return true;
        }    
        return false;
    }

    const remove = (element) => {
        if(has(element) !== -1){
            collection.splice(index, 1);
            return true;
        }
        else return false;
    }

    const union = (otherSet) => {
        var unionSet = SetF();
        var firstSet = values();
        var secondSet = otherSet.values();
        firstSet.forEach(el => {
            unionSet.add(el);
        })
        secondSet.forEach(el => {
            unionSet.add(el);
        })

        return unionSet;
    }

    const intersection = (otherSet) => {
        let intersectionSet = SetF();
        let secondSet = otherSet.values();
        secondSet.forEach(el => {
            if(has(el) !== -1) intersectionSet.add(el);
        })
        return intersectionSet;
    }

    const difference = (otherSet) => {
        const differenceSet = SetF();
        let firstSet = values();
        let secondSet = otherSet.values();
        firstSet.forEach(el => {
            if(otherSet.has(el) === -1) differenceSet.add(el);
        })
        return differenceSet;
    }

    const subset = (otherSet) => {
        let subSet = SetF();
        const potentialSubset = otherSet.values();
        const result = potentialSubset.every(el => has(el) !== -1);
        return result;
    }
    return {
        has,
        remove,
        values,
        size,
        add,
        union,
        intersection,
        difference,
        subset
    }
}

const firstSet = SetF();
const secondSet = SetF();

firstSet.add(1);
firstSet.add(2);
firstSet.add(3);
firstSet.add(4);
firstSet.add(5);

secondSet.add(3)
secondSet.add(4);
secondSet.add(5);
//secondSet.add(6);

console.log(`First set: ${firstSet.values()}`);
console.log(`Second set: ${secondSet.values()}`);
console.log(`Intersection set: ${firstSet.intersection(secondSet).values()}`);
console.log(`Difference set: ${firstSet.difference(secondSet).values()}`);
console.log(`Is secondSet subset of firstSet: ${firstSet.subset(secondSet)}`);





