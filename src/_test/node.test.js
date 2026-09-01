import Node from '../node';

describe('Node class', () => {
    it('Should create node correctly', () => {
        let nextNode = new Node({ value: 'node x'});

        expect(new Node({})).toEqual({
            value: null,
            nextNode: null,
        });
        expect(new Node({ value: 'head' })).toEqual({
            value: 'head',
            nextNode: null,
        });
        expect(new Node({ value: 'head', nextNode })).toEqual({
            value: 'head',
            nextNode,
        });
    });
});