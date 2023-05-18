const breakEvenPoint = require('./index.js')

describe('breakEvenPoint', () => {
    it('should return only a positive number', () => {
        const totalFixedCost = 10000;
        const variableCost = 20
        const sellingPrice = 100

        const result = breakEvenPoint(totalFixedCost, variableCost, sellingPrice)
        expect(result).toBe("The Break Even Point is 125")
    })
    it('should only except numbers as an input', () => {
        const totalFixedCost = "a";
        const variableCost = "!";
        const sellingPrice = 5;

        expect(() => {
            breakEvenPoint(totalFixedCost, variableCost, sellingPrice);
        }).toThrow("Wrong input: Input needs to be a positive number.");
    })
})