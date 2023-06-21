# RPN Calculator - README

## Description

The RPN Calculator is a command-line application that allows users to perform arithmetic calculations using the Reverse Polish Notation (RPN) methodology. It supports the four basic arithmetic operators: addition (+), subtraction (-), multiplication (*), and division (/). The calculator provides a user-friendly interface through the standard input and output.

## Technical Choices

* __Language:__ TypeScript was chosen as the programming language due to its static typing, which helps catch errors during development, and I'm very familiar with it.

* __Readline Module:__ The readline module from the Node.js standard library was utilized to handle user input and provide an interactive command-line interface.

## Architectural Overview

The RPN Calculator follows a simple architecture, consisting of a main calculation function, an operation function for performing arithmetic calculations, and an event-driven input/output mechanism.

## Trade-offs and Future Improvements

* __Error Handling:__ The current implementation handles basic error scenarios, such as insufficient operands and invalid inputs. However, more advanced error handling, different edge cases or supporting additional operators, could be added to enhance the user experience.

* __Unit Tests:__ Unit tests can be run using the command `npm run test`. Unit tests cover all basic operations but could be extended to cover potential edge cases. 

## Running the Code

To run the RPN Calculator, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Download the source code or clone the repository.
3. Open a terminal and navigate to the project directory.
4. Install the dependencies by running `npm install` or `yarn install`.
5. Build the TypeScript code to JavaScript by running `npm run build` or `yarn build`.
6. Start the calculator by running `npm start`.

## Conclusion

The RPN Calculator provides a flexible and user-friendly solution for performing arithmetic calculations using the Reverse Polish Notation methodology. While the current version offers a solid foundation, further enhancements, such as error handling, can be explored to make the calculator even more robust and versatile.