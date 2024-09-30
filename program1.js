/**
 * @param {string} s
 * @return {boolean}
 */
import java.util.Stack;
var isValid = function(s) {

public class Solution {
    
    // Method to check if parentheses are valid
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty() || 
                    (c == ')' && stack.pop() != '(') || 
                    (c == '}' && stack.pop() != '{') || 
                    (c == ']' && stack.pop() != '[')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }

    // Main method to run the program
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test cases
        String s1 = "()";
        String s2 = "()[]{}";
        String s3 = "(]";
        
        System.out.println(solution.isValid(s1));  // Output: true
        System.out.println(solution.isValid(s2));  // Output: true
        System.out.println(solution.isValid(s3));  // Output: false
    }
}

};

module.exports = { isValid };


