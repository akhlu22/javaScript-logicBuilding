// code to check that the given string paranthesis is balanced or not

function isBalanced(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of str) {
    // If it's an opening bracket, push to stack
    if (brackets[char]) {
      stack.push(char);
    } 
    // If it's a closing bracket
    else if (Object.values(brackets).includes(char)) {
      const lastOpening = stack.pop();
      
      // Check if it matches the correct opening bracket
      if (brackets[lastOpening] !== char) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets were matched
  return stack.length === 0;
}

// --- Test Cases ---
console.log(isBalanced("{[()]}"));   // Output: true
console.log(isBalanced("{[( text )]}")); // Output: true (ignores non-brackets)
console.log(isBalanced("{[()]"));    // Output: false (missing closing bracket)
console.log(isBalanced("{[(])}"));   // Output: false (wrong order)
