const chainable = (initialValue) => {
    let value = initialValue;

    return {
        add: (num) => {
            value += num;
            return chainable(value);
        },
        multiply: (num) => {
            value *= num;
            return chainable(value);
        },
        getValue: () => value,
    };
};

// Example usage:
const result = chainable(5).add(3).multiply(2).getValue(); // result should be 16
console.log(result); // Output: 16
