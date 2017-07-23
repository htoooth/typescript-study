import IExpress from './IExpress'
import NumberExpress from './NumberExpress'
import BinaryExpress from './BinaryExpress'

export default class Express implements IExpress {
  private _node: IExpress

  constructor(left: number | IExpress , operator?: string, right?: number | IExpress) {
    if (typeof left === 'number') {
      left = new NumberExpress(left)
    }

    if (!operator) {
      this._node = left
      return;
    } else {
      if (typeof right === 'number') {
        right = new NumberExpress(right)
      }

      this._node = new BinaryExpress(left, operator, right)
    }
  }

  static of(left: number | IExpress, operaotr?: string, right?: number | IExpress): Express {
    return new Express(left, operaotr, right)
  }

  calculate():number {
    return this._node.calculate()
  }

  toString() {
    return this._node.toString()
  }
}