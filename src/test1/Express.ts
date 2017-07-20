import IExpress from './IExpress'
import NumberExpress from './NumberExpress'
import BinaryExpress from './BinaryExpress'


export default class Express implements IExpress {
  private node: IExpress

  constructor(left: number | IExpress, operator?:string, right?: number | IExpress) {
    if (typeof left === 'number') {
      left = new NumberExpress(left)
    }

    if (!operator) {
      this.node = left
    } else if (operator && right) {
      if (typeof right === 'number') {
        right = new NumberExpress(right)
      }

      this.node = new BinaryExpress(left, operator, right)
    }
  }

  static of(left:number | IExpress, operator?: string, right?: number | IExpress): Express {
    return new Express(left, operator, right)
  }

  calculate(): number {
    return this.node.calculate()
  }

  toString(): string {
    return this.node.toString()
  }

}