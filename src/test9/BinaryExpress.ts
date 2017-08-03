import IExpress from './IExpress';


export default class BinaryExpress implements IExpress {
  left: IExpress
  op: string
  right: IExpress

  constructor(left: IExpress, op: string, right: IExpress) {
    this.left = left
    this.op = op
    this.right = right
  }

  calculate():number {
    switch (this.op) {
      case '+': {
        return this.left.calculate() + this.right.calculate()
      }
      case '-': {
        return this.left.calculate() - this.right.calculate()
      }
      case '*': {
        return this.left.calculate() * this.right.calculate()
      }
      case '/': {
        return this.left.calculate() / this.right.calculate()
      }
    }
  }

  toString() {
    return `(${this.left.toString()} ${this.op} ${this.right.toString()})`
  }
}