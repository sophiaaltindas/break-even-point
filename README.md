# Break Even Point Calculator

The Break Even Point Calculator is a JavaScript library that provides a simple way to calculate the break-even point for a business or product. The break-even point is the level of sales at which total costs equal total revenue, resulting in neither profit nor loss.

## Installation
You can install the Break Even Point Calculator library using npm:

```shell
npm install break-even-point
```

## Usage
To use the Break Even Point Calculator, follow these steps:

1. Import the library into your JavaScript project:
```javascript
const BreakEvenPointCalculator = require('break-even-point');
```

3. Calculate the break-even point by providing the required inputs: total fixed cost, variable cost, and selling price:

```javascript
const totalFixedCost = 10000; // Replace with your actual fixed cost
const variableCost = 20; // Replace with your actual variable cost per unit
const sellingPrice = 50; // Replace with your actual selling price per unit


const result = breakEvenPoint(totalFixedCost, variableCost, sellingPrice);
```

4. Use the calculated break-even point in your application as needed.


## Example

Here's an example usage of the Break Even Point Calculator library:

```javascript
const BreakEvenPointCalculator = require('break-even-point');

const totalFixedCost = 10000;
const variableCost = 20;
const sellingPrice = 50;

const result = breakEvenPoint(totalFixedCost, variableCost, sellingPrice);

console.log(result);
```

This will output:

```css
The Break Even Point is 400 units.
```

## Contributing
Contributions to the Break Even Point Calculator library are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License
This library is released under the MIT License.