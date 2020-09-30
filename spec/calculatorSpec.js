describe('Calculator', () => {
  
  let calculator;
  // use beforeEach() to instantiate new Calculator before each 'it' statement - need to declare the variable 'calculator' above
  beforeEach(() => {
    calculator = new Calculator();
  });

  // Nick's defined spec for add(x, y)
  describe('#add', () => {

    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        // const calculator = new Calculator();

        expect(() => calculator.add('1', 2)).toThrow();
        expect(() => calculator.add(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {

      it('should not throw an error', () => {
        // const calculator = new Calculator();
        expect(() => calculator.add(1, 2)).not.toThrow();
      });

      it('should add the numbers together', () => {
        // const calculator = new Calculator();
        const result = calculator.add(1, 2);
        expect(result).toBe(3);
      });
    });
  });

  // define specs for subtract(x, y)
  describe('#subtract', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        // const calculator = new Calculator();

        expect(() => calculator.subtract('1', 2)).toThrow();
        expect(() => calculator.subtract(1, '2')).toThrow();        
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        // const calculator = new Calculator();
        expect(() => calculator.subtract(1, 2)).not.toThrow();
      });

      it('should subtract the second number from the first', () => {
        // const calculator = new Calculator();
        expect(calculator.subtract(1, 2)).toBe(-1);
      });
    });
  }); 

  // define specs for multiply(x, y)
  describe('#multiply', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        // const calculator = new Calculator();
        
        expect(() => calculator.multiply('1', 2)).toThrow();
        expect(() => calculator.multiply(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        // const calculator = new Calculator();
        expect(() => calculator.multiply(1, 2)).not.toThrow();
      });

      it('should multiply the numbers together', () => {
        // const calculator = new Calculator();
        expect(calculator.multiply(1, 2)).toBe(2);
      });
    });
  });

  // define specs for divide(x, y) 
  describe('#divide', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        // const calculator = new Calculator();

        expect(() => calculator.divide('1', 2)).toThrow();
        expect(() => calculator.divide(1, '2')).toThrow();
      });
    });

    describe('when passed a second number that is zero', () => {
      it('should throw an error', () => {
        // const calculator = new Calculator();
        expect(() => calculator.divide(1, 0)).toThrow();
      });
    });

    describe('when passed two numbers where the second number is not zero', () => {
      it('should not throw an error', () => {
        // const calculator = new Calculator();  
        expect(() => calculator.divide(1, 2)).not.toThrow();
      });

      it('should divide the first number by the second number', () => {
        // const calculator = new Calculator();
        expect(calculator.divide(1, 2)).toBe(0.5);
      });
    });
  });


});