import * as validator from './validator';

describe('test validator odd even', () => {
    it('isEven should be return true', () => {
        const result = validator.isEven(2);
        expect(result).toBe(true);
    });

    it('isEven should be return false', () => {
        const result = validator.isEven(1);
        expect(result).toBe(false);
    });

    it('isOdd should be return true', () => {
        const result = validator.isOdd(1);
        expect(result).toBe(true);
    });

    it('isOdd should be return false', () => {
        const result = validator.isOdd(2);
        expect(result).toBe(false);
    });

    it('isHasEven should be return true', () => {
        const input = [1, 2, 3];
        const result = validator.isHasEven(input);
        expect(result).toBe(true);
    });

    it('isHasEven should be return false', () => {
        const input = [1, 3];
        const result = validator.isHasEven(input);
        expect(result).toBe(false);
    });

    it('isHasOdd should be return true', () => {
        const input = [1, 2, 4];
        const result = validator.isHasOdd(input);
        expect(result).toBe(true);
    });

    it('isHasOdd should be return false', () => {
        const input = [2, 4];
        const result = validator.isHasOdd(input);
        expect(result).toBe(false);
    });

    it('isAllNumber should be return true', () => {
        const input = [1, 2, 3, 4];
        const result = validator.isAllNumber(input);
        expect(result).toBe(true);
    });

    it('isAllNumber should be return false', () => {
        const input = [1, 2, 3, 'a'];
        const result = validator.isAllNumber(input);
        expect(result).toBe(false);
    });
});
