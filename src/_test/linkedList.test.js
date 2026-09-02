import LinkedList from '../linkedList';

describe('LinkedList', () => {
    let LL;

    beforeAll (() => {
        LL = new LinkedList();
    });
    
    describe('Append method', () => {
        it('Should append new node to linked list', () => {
            LL.append('cat');
            
            expect(LL.size()).toBe(1);
            expect(LL.head()).toBe('cat');
        });

        it('Should append new node correctly to linked list when given > 1', () => {
            LL.append('dawg');
            LL.append('binatang');
            
            expect(LL.size()).toBe(3);
        });
    });

    describe('Prepend method', () => {
        it('Should prepend new node correctly to linked list', () => {
            LL.prepend('new head');
            
            expect(LL.size()).toBe(4);
            expect(LL.head()).toBe('new head');
        });
    });

    describe('Size method', () => {
        it('Should count all node correctly in linkedlist', () => {
            expect(new LinkedList().size()).toBe(0);
        });

        it('Should count all node correctly in linkedlist', () => {
            expect(LL.size()).toBe(4);
        });
    });

    describe('Head method', () => {
        it('Should return undefined when list is empty', () => {
            expect(new LinkedList().head()).toBeUndefined();
        });

        it('Should return head value correctly', () => {
            expect(LL.head()).toBe('new head');
        });
    });

    describe('Tail method', () => {
        it('Should return undefined when lisst is empty', () => {
            expect(new LinkedList().tail()).toBeUndefined();
        });

        it('Should return value of final node correctly', () => {
            expect(LL.tail()).toBe('binatang');
        });
    });

    describe('At method', () => {
        it('Should return undefined when lisst is empty', () => {
            expect(new LinkedList().at(2)).toBeUndefined();
        });

        it('Should return undefined when lisst is empty and given arg < 0', () => {
            expect(new LinkedList().at(1)).toBeUndefined();
        });

        it('Should return undefined when given index > total node', () => {
            expect(LL.at(10)).toBeUndefined();
        });

        it('Should return value of node at index n correctly ', () => {
            expect(LL.at(0)).toBe('new head');
        });
    });

    describe('Pop method', () => {
        it('Should return undefined when lisst is empty', () => {
            expect(new LinkedList().pop()).toBeUndefined;
        });

        it('Should remove head node from the list and returne its value', () => {
            expect(LL.pop()).toBe('new head');
            expect(LL.size()).toBe(3);
            expect(LL.head()).toBe('cat');
        });
    });

    describe('Contains method', () => {
        it('Should returns false with no error if list is empty', () => {
            expect(new LinkedList().contains('x')).toBe(false);
        });

        it('Should returns true if the passed in value is in the list and otherwise returns false', () => {
            expect(LL.contains('cat')).toBe(true);
            expect(LL.contains('dawg')).toBe(true);

            expect(LL.contains('node')).toBe(false);
            expect(LL.contains('X')).toBe(false);
        });
    });
    
    describe('findIndex method', () => {
        it('Should returns undefined with no error when list is empty', () => {
            expect(new LinkedList().findIndex('some value')).toBeUndefined();
        });
        
        it('Should returns -1 when value cant be found int the list', () => {
            expect(LL.findIndex('x')).toBe(-1);
        });

        it('Should returns the index of the node containing the given value', () => {
            expect(LL.findIndex('binatang')).toBe(2);
        });

        it('Should returns the index of the first node value match, if node value match > 1', () => {
            let linkedList = new LinkedList();
            linkedList.append('0');
            linkedList.append('1');
            linkedList.append('1');
            linkedList.append('2');
            linkedList.append('2');

            expect(linkedList.findIndex('1')).toBe(1);
            expect(linkedList.findIndex('2')).toBe(3);
        });
    });

    describe('toString method', () => {
        it('Should returns empty string when list is empty', () => {
            expect(new LinkedList().toString()).toBe('');
        });

        it('Should returns the index of the first node value match, if node value match > 1', () => {
            let linkedList = new LinkedList();
            linkedList.append('H');
            linkedList.append('A');
            linkedList.append('B');
            linkedList.append('X');
            linkedList.append('Z');

            expect(linkedList.toString()).toBe('( H ) -> ( A ) -> ( B ) -> ( X ) -> ( Z ) -> null');
        });
    });

    describe('InsertAt method', () => {
        it('Should throw rangeError when given index < 0 or > list size', () => {
            let linkedList = new LinkedList();
            linkedList.append('1');
            linkedList.append('2');

            expect(() => linkedList.insertAt(-1, 1, 20)).toThrow(RangeError);
            expect(() => linkedList.insertAt(3, 1, 20)).toThrow(RangeError);
        });

        it('Should insert correctly new node correctly', () => {
            let linkedList = new LinkedList();
            linkedList.append('1');
            linkedList.append('2');
            linkedList.append('3');

            linkedList.insertAt(1, 10, 11);

            expect(linkedList.size()).toBe(5);
            expect(linkedList.toString()).toBe('( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null');
        });

        it('Should insert correctly new node correctly', () => {
            let linkedList = new LinkedList();
            linkedList.append('1');
            linkedList.append('2');
            linkedList.append('3');

            linkedList.insertAt(2, 'dawg');

            expect(linkedList.size()).toBe(4);
            expect(linkedList.toString()).toBe('( 1 ) -> ( 2 ) -> ( dawg ) -> ( 3 ) -> null');
        });

        it('Should insert correctly new node correctly', () => {
            let linkedList = new LinkedList();
            linkedList.append('1');
            linkedList.append('2');
            linkedList.append('3');
            linkedList.append('4');
            linkedList.append('5');

            linkedList.insertAt(3, 'x', 'y');

            expect(linkedList.size()).toBe(7);
            expect(linkedList.toString()).toBe('( 1 ) -> ( 2 ) -> ( 3 ) -> ( x ) -> ( y ) -> ( 4 ) -> ( 5 ) -> null');
        });
    });
    
    describe('RemoveAt method', () => {
        it('Should throw rangeError when given index < 0 or > list size', () => {
            let linkedList = new LinkedList();
            linkedList.append('1');
            linkedList.append('2');

            expect(() => linkedList.removeAt(-1)).toThrow(RangeError);
            expect(() => linkedList.removeAt(2)).toThrow(RangeError);
        });

        it('Should Remove node correctly node correctly', () => {
            let linkedList = new LinkedList();
            linkedList.append('1');
            linkedList.append('2');
            linkedList.append('3');

            linkedList.removeAt(0);

            expect(linkedList.toString()).toBe('( 2 ) -> ( 3 ) -> null');
        });

        it('Should Remove node correctly node correctly', () => {
            let linkedList = new LinkedList();
            linkedList.append('1');
            linkedList.append('2');
            linkedList.append('3');
            linkedList.append('4');
            linkedList.append('5');

            linkedList.removeAt(2);

            expect(linkedList.toString()).toBe('( 1 ) -> ( 2 ) -> ( 4 ) -> ( 5 ) -> null');
        });
    });
});