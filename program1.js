import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        // Stack to store opening brackets
        Stack<Character> stack = new Stack<>();
        
        // Loop through each character in the string
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            }
            else {
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
}
