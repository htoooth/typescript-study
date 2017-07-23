import IExpress from './IExpress'


export default class BinaryExpress implements IExpress {
  left:IExpress
  right:IExpress
  operator:string

  constructor(left: IExpress, opener:string, right:IExpress) {
    this.left = left
    this.operator = opener
    this.right = right
  }

  calculate():number {
    switch(this.operator) {
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
        break
    }
  }

  toString() {
    return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`
  }
}