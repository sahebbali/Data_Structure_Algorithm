class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (const entry of bucket) {
                if (entry[0] === key) {
                    return entry[1];
                }
            }
        }
        return undefined;
    }
}

const dictionary = new HashTable(10);

dictionary.set("apple", "a fruit");
dictionary.set("banana", "a tropical fruit");
dictionary.set("carrot", "a root vegetable");

console.log(dictionary.get("apple"));   // Output: a fruit
console.log(dictionary.get("banana"));  // Output: a tropical fruit
console.log(dictionary.get("carrot"));  // Output: a root vegetable
console.log(dictionary.get("grape"));   // Output: undefined
