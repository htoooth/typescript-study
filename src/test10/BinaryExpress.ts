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
    switch(this.op) {
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
      default: {
        throw new TypeError('not supported this operator ' + this.op)
      }
    }
  }

  toString() {
    return `(${this.left.toString()} ${this.op.toString()} ${this.right.toString()})`
  }
}