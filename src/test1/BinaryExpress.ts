import IExpress from './IExpress'

export default class BinaryExpress implements IExpress {
  left:IExpress
  right: IExpress
  operator: string

  constructor(left: IExpress, operator: string, right: IExpress) {
    this.left = left
    this.right = right
    this.operator = operator
  }

  calculate(): number{
    switch(this.operator) {
      case '+' : {
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
    return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`
  }
}