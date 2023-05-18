function breakEvenPoint(totalFixedCost, variableCost, sellingPrice) {
    if (totalFixedCost >= 0 && variableCost >= 0 && sellingPrice >= 0) {
        const contributionMargin = sellingPrice - variableCost;
        return `The Break Even Point is ${totalFixedCost / contributionMargin}`;
    }
    else {
        throw new Error("Wrong input: Input needs to be a positive number.")
    }

}

module.exports = breakEvenPoint