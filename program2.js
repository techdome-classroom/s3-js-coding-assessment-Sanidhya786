/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    // Map to store Roman numeral values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current numeral and the next numeral
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // If the current numeral is less than the next one, subtract it from total
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, add it to total
            total += currentVal;
        }
    }
    
    return total;
}

// Test cases
console.log(romanToInt("III"));       // Output: 3
console.log(romanToInt("LVIII"));     // Output: 58
console.log(romanToInt("MCMXCIV"));   // Output: 1994


module.exports={romanToInt}