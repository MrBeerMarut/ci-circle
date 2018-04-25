import * as cart from './cart';

describe('test cart calculate', () => {
    const myCart = [
        { name: 'apple', price: 10, unit: 10 },
        { name: 'chocolate', price: 20, unit: 4 },
        { name: 'mango', price: 15, unit: 5 }
    ];

    it('sum cart item unit correct', () => {
        const result = cart.sumaryUnit(myCart);
        expect(result).toBe(19);
    });

    it('sum cart item price correct', () => {
        const result = cart.sumaryPrice(myCart);
        expect(result).toBe(255);
    });

    it('show item in cart by name apple', () => {
        const result = cart.getItemByName(myCart, 'apple');
        expect(result).toEqual([{ name: 'apple', price: 10, unit: 10 }]);
    });

    it('show item in cart by name snack', () => {
        const result = cart.getItemByName(myCart, 'snack');
        expect(result).toBe('not found');
    });

    it('show item price in cart by name apple', () => {
        const result = cart.sumaryPriceByName(myCart, 'apple');
        expect(result).toBe(100);
    });

});


describe('test cart calculate', () => {
    const myCart = [
        { name: 'apple', price: 10, unit: 10 },
        { name: 'chocolate', price: 20, unit: 4 },
        { name: 'mango', price: 15, unit: 5 }
    ];

    it('add item to cart', () => {
        const input = { name: 'snack', price: 5, unit: 1 };
        const result = cart.addItem(myCart, input);
        expect(result).toEqual([
            { name: 'apple', price: 10, unit: 10 },
            { name: 'chocolate', price: 20, unit: 4 },
            { name: 'mango', price: 15, unit: 5 },
            { name: 'snack', price: 5, unit: 1 }
        ]);
    });

    it('add item to cart', () => {
        const input = { name: 'snack', price: '5', unit: 1 };
        const result = cart.addItem(myCart, input);
        expect(result).toBe('input error');
    });

});


describe('test cart calculate', () => {
    const myCart = [
        { name: 'apple', price: 10, unit: 10 },
        { name: 'chocolate', price: 20, unit: 4 },
        { name: 'mango', price: 15, unit: 5 }
    ];

    it('delete item in cart ', () => {
        const result = cart.deleteItem(myCart, 'chocolate');
        expect(result).toEqual([
            { name: 'apple', price: 10, unit: 10 },
            { name: 'mango', price: 15, unit: 5 },
        ]);
    });
});


describe('test cart calculate', () => {
    const myCart = [
        { name: 'apple', price: 10, unit: 10 },
        { name: 'chocolate', price: 20, unit: 4 },
        { name: 'mango', price: 15, unit: 5 }
    ];

    it('edit unit item in cart', () => {
        const result = cart.editItemByName(myCart,'apple', 20);
        expect(result).toEqual([
            { name: 'apple', price: 10, unit: 20 },
            { name: 'chocolate', price: 20, unit: 4 },
            { name: 'mango', price: 15, unit: 5 },
        ]);
    });
});

describe('test cart calculate', () => {
    const myCart = [
        { name: 'apple', price: 10, unit: 10 },
        { name: 'chocolate', price: 20, unit: 4 },
        { name: 'mango', price: 15, unit: 5 }
    ];

    it('add one unit for item in cart', () => {
        const result = cart.addOneByName(myCart,'apple');
        expect(result).toEqual([
            { name: 'apple', price: 10, unit: 11 },
            { name: 'chocolate', price: 20, unit: 4 },
            { name: 'mango', price: 15, unit: 5 }
        ]);
    });
});