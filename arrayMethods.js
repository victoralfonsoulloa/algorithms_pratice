// Data Structure array is an ordered collecctioin of elementes that can be accessed using a numerical index.

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop () {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift () {
        const firsElement = this.data[0];
        // re indexing 
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return firsElement;
    }

    delete(index) {
        const item = this.data[index];

        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i=1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}

const myNewArray = new MyArray;
console.log(myNewArray.push("hello"));
console.log(myNewArray.push("friend"));
console.log(myNewArray);
console.log(myNewArray.get(0));
console.log(myNewArray.pop())
console.log(myNewArray);

