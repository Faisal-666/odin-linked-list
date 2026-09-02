import Node from './node.js';

export default class LinkedList {
    constructor() {}

    #getLast = (node = this.list) => {
        if (!(this.list instanceof Node)) return undefined;
        if (node.nextNode === null) return node;

        return this.#getLast(node.nextNode);
    }

    append = (value) => {
        if (!(this.list instanceof Node)) {
            this.list = new Node({ value });
            return;
        };

        this.#getLast(this.list).nextNode = new Node({ value });
    }

    prepend = (value) => {
        this.list = new Node({ value, nextNode: this.list });
    }

    size = (node = this.list) => {
        if (!(this.list instanceof Node)) return 0;
        if (node.nextNode === null) return 1;

        return 1 + this.size(node.nextNode);
    }

    head = () => {
        if (!(this.list instanceof Node)) return undefined;
        return this.list.value;  
    }

    tail = () => {
        if (!(this.list instanceof Node)) return undefined;
        return this.#getLast(this.list).value;
    }

    at = (index) => {
        if (!(this.list instanceof Node) || index < 0) return undefined;
        if (index === 0) return this.head();

        let temp = this.list;
        let n = 0;

        while(temp.nextNode !== null) {
            n++;
            temp = temp.nextNode;
            
            if (n === index) break;
        }

        return index > n ? undefined : temp.value;
    }

    
    pop = () => {
        if (!(this.list instanceof Node)) return undefined;
        const newHead = this.list.nextNode;
        const head = this.list;

        head.nextNode = null;
        this.list = newHead;
        
        return head.value;
    }

    contains = (value, node = this.list) => {
        if (!(this.list instanceof Node)) return false;
        if (node.value === value) return true;
        if (node.nextNode === null) return false;

        return this.contains(value, node.nextNode);
    }

    findIndex = (value) => {
        if (!(this.list instanceof Node)) return undefined;
        if (value === this.list.value) return 0;

        let temp = this.list;
        let n = 0;

        while(temp.nextNode !== null) {
            n++;
            temp = temp.nextNode;
            
            if (temp.value === value) break;
        }

        return temp.value === value ? n : -1;
    }


    toString = (node = this.list) => {
        if (!(this.list instanceof Node)) return '';
        if (node.nextNode === null) return `( ${node.value} ) -> null`;

        return `( ${node.value} ) -> ` + this.toString(node.nextNode);
    }

    insertAt = (index, ...values) => {
        if (index < 0 || index > this.size()) throw new RangeError('Input Range Error');

        if (index === 0) {
            let i = values.length - 1;

            while (i >= 0) {
                this.prepend(values[i]);
                i--;
            }
        } else {
            let head = this.list;
            let prev;

            let n = 0;
            while (n !== index) {
                if (n === (index - 1)) prev = head;
                head = head.nextNode;
                n++;
            }
            
            if (head === null) {
                let i = 0;
                while (i < values.length) {
                    this.append(values[i]); 
                    i++;
                }
                
            } else {
                let i = 0;

                while (i < values.length) {
                    const newNode = new Node({ value: values[i] });
                    prev.nextNode = newNode;
                    
                    prev = newNode;
                    i++;
                }

                prev.nextNode = head;
            }
        }
    }

    removeAt = (index) => {
        if (index < 0 || index >= this.size()) throw new RangeError('Input Range Error');
        if (!(this.list instanceof Node)) return undefined;

        if (index === 0) {
            const newHead = this.list.nextNode;
            const head = this.list;

            head.nextNode = null;
            this.list = newHead;
        } else {
            let temp = this.list;
            let prev;
            let n = 0;

            while(temp.nextNode !== null) {
                if (n === (index - 1)) prev = temp;
                n++;

                temp = temp.nextNode;
                if (n === index) break;
            }

            prev.nextNode = temp.nextNode;
        }
        
    }
}

const LL = new LinkedList();
// LL.append('cat');
// LL.append('dawg');
console.log(LL.findIndex(' '));