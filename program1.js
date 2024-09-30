/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        // Stack to store opening brackets
        Stack<Character> stack = new Stack<>();
        
        // Loop through each character in the string
        for (char c : s.toCharArray()) {
            // If it's an opening bracket, push it onto the stack
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            }
            // If it's a closing bracket
            else {
                // If the stack is empty or the top of the stack doesn't match the corresponding opening bracket, return false
                if (stack.isEmpty() || 
                   (c == ')' && stack.pop() != '(') || 
                   (c == '}' && stack.pop() != '{') || 
                   (c == ']' && stack.pop() != '[')) {
                    return false;
                }
            }
        }
        // If the stack is empty, the string is valid, otherwise, it's not
        return stack.isEmpty();
    }
}

};

module.exports = { isValid };


