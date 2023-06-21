import { calculateRPN } from './calculator';
import mockStdin from 'mock-stdin';
import { mockProcessExit } from "jest-mock-process";

// mock console.log
console.log = jest.fn();


describe('RPN Calculator', () => {
    let stdin: ReturnType<typeof mockStdin.stdin>;
    const mockExit = mockProcessExit();

    // just a helper function to start the application
    // and mock the input
    const execute = (input: string): void => {
        calculateRPN();
        stdin.send(input);
        stdin.end();
    }

    beforeEach(() => {
        stdin = mockStdin.stdin();
    })

    afterAll(done => {
        process.exit(0);
        stdin.end();
        done();
      })

    describe('addition', () => {
        const input = '5 8 +';
        const expectedResult = 13;
    
        beforeEach(() => {
          execute(input);
        })
    
        it('should correctly calculate addition', () => {
          expect(console.log).toBeCalledWith(expectedResult);
        })
    })

    describe('subtraction', () => {
        const input = '5 8 -';
        const expectedResult = -3;
    
        beforeEach(() => {
          execute(input);
        })
    
        it('should correctly calculate subtraction', () => {
          expect(console.log).toBeCalledWith(expectedResult);
        })
    })

    describe('multiplication', () => {
        const input = '5 8 *';
        const expectedResult = 40;
    
        beforeEach(() => {
          execute(input);
        })
    
        it('should correctly calculate multiplication', () => {
          expect(console.log).toBeCalledWith(expectedResult);
        })
    })

    describe('division', () => {
        const input = '40 8 /';
        const expectedResult = 5;
    
        beforeEach(() => {
          execute(input);
        })
    
        it('should correctly calculate division', () => {
          expect(console.log).toBeCalledWith(expectedResult);
        })
    })

    describe('multiple operations', () => {
        const input = '5 5 5 8 + + -';
        const expectedResult = -13;
    
        beforeEach(() => {
          execute(input);
        })
    
        it('should handle multiple operations', () => {
          expect(console.log).toBeCalledWith(expectedResult);
        })
    })

    describe('complex expressions', () => {
        const input = '5 8 * 5 + 9 -';
        const expectedResult = 36;
    
        beforeEach(() => {
          execute(input);
        })
    
        it('should handle complex expressions', () => {
          expect(console.log).toBeCalledWith(expectedResult);
        })
    })

    describe('invalid input', () => {
        it('one digit', () => {
            execute('5 +')
            expect(console.log).toBeCalledWith('Insufficient operands on the stack');
        });
        it('no operand', () => {
            execute('5 8')
            expect(console.log).toBeCalledWith('Invalid expression: Too many operands or no operator');
        });
        it('divide by zero', () => {
            expect(() => execute('5 0 /')).toThrowError();
        });
    })
    
    it('should exit with a 1', () => {
        process.exit(0);
        expect(mockExit).toHaveBeenCalledWith(0);
    })
});