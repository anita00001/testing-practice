class Calculator {
  constructor(num1, num2) {
    this.n1 = num1;
    this.n2 = num2;
  }

  addition() {
    return (this.n1 + this.n2);
  }

  subtraction() {
    return (this.n1 - this.n2);
  }

  division() {
    return (this.n1 / this.n2);
  }

  multiplication() {
    return (this.n1 * this.n2);
  }
}

module.exports = Calculator;