import NumberExpress from './NumberExpress';
import IExpress from './IExpress';
import BinaryExpress from './BinaryExpress';

function isIExpress(node: number | IExpress): node is IExpress {
  return (<IExpress>node).calculate !== undefined
}

export default class Express implements IExpress {
  node: IExpress

  constructor(left: number | IExpress, operator?: string, right?: number | IExpress) {

    if (!isIExpress(left)) {
      this.node = new NumberExpress(left)
    } else if (!operator) {
      this.node = left
    } else {
      if (!isIExpress(right)) {
        right = new NumberExpress(right)
      }

      this.node = new BinaryExpress(left, operator, right)
    }

  }

  static of(left: number | IExpress, operator?: string, right?: number | IExpress) {
    return new Express(left, operator, right)
  }

  calculate(): number {
    return this.node.calculate()
  }

  toString() {
    return this.node.toString()
  }
}