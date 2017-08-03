import NumberExpress from './NumberExpress';
import IExpress from './IExpress';
import BinaryExpress from './BinaryExpress';

export default class Express implements IExpress {
  node: IExpress

  constructor(left: number | IExpress, op?: string, right?: number | IExpress) {

    if (typeof left === 'number') {
      left = new NumberExpress(left)
    }

    if (op === undefined) {
      this.node = left
    } else {
      if (typeof right === 'number') {
        right = new NumberExpress(right)
      }

      this.node = new BinaryExpress(left, op, right)
    }
  }

  static of(left: number | IExpress, op?: string, right?: number | IExpress): Express {
    return new Express(left, op, right)
  }

  calculate(): number {
    return this.node.calculate()
  }

  toString() {
    return this.node.toString()
  }
}
