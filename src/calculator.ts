import * as readline from 'readline';

// Function to perform the arithmetic operations
const performOperation = (operator: string, operand1: number, operand2: number): number => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      if (operand2 === 0) {
        throw new Error('Invalid expression: Division by zero');
      }
      return operand1 / operand2;
    default:
      throw new Error('Invalid operator' + operator);
  }
}

const isOperator = (token: string): boolean => ['+', '-', '*', '/'].includes(token);


// Function to handle user input and perform calculations
export const calculateRPN = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const stack: number[] = [];

  rl.setPrompt('> ');
  rl.prompt();

  rl.on('line', (input) => {
    const tokens = input.trim().split(' ');

    for (const token of tokens) {
      if (isOperator(token)) {
        if (stack.length < 2) {
          console.log('Insufficient operands on the stack');
          rl.prompt();
          return;
        }
        
        const operand2 = stack.pop()!;
        const operand1 = stack.pop()!;
        const result = performOperation(token, operand1, operand2);
        stack.push(result);
        
      } else if (!isNaN(Number(token))) {
        stack.push(Number(token));
      } else if (token === "close") {

      } else {
        console.log('Invalid input');
        rl.prompt();
        return;
      }
    }

    if (stack.length !== 1) {
      console.log('Invalid expression: Too many operands or no operator');
      rl.prompt();
      return;
    }

    const result = stack.pop()
    console.log(result);

    rl.prompt();
  }).on('close', () => {
    console.log('Exiting calculator');
    rl.close()
    rl.removeAllListeners()
    process.exit(0);
  });

  
}

// Start the calculator
calculateRPN();