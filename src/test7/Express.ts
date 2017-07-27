import NumberExpress from './NumberExpress';
import IExpress from './IExpress';
import BinaryExpress from './BinaryExpress';

export default class Express implements IExpress {
  node: IExpress

  constructor(left: number | IExpress, operator?: string, right?: number | IExpress) {
    if (typeof left === 'number') {
      left = new NumberExpress(left)
    }

    if (operator === undefined) {
      this.node = left
    } else {
      if (typeof right === 'number') {
        right = new NumberExpress(right)
      }

      this.node = new BinaryExpress(left, operator, right)
    }
  }

  static of(left: number | IExpress, operator?: string, right?: number | IExpress): Express {
    return new Express(left, operator, right)
  }

  calculate(): number {
    return this.node.calculate()
  }

  toString() {
    return this.node.toString()
  }
}