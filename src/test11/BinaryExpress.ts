import IExpress from './IExpress';

export default class BinaryExpress implements IExpress {
  left: IExpress
  right: IExpress
  op: string

  constructor(left: IExpress, op: string, right: IExpress) {
    this.left = left
    this.right = right
    this.op = op
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
      default:
        throw new Error('not supported operator')
    }
  }

  toString() {
    return `(${this.left.toString()} ${this.op} ${this.right.toString()})`
  }
}