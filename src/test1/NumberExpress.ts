
import IExpress from './IExpress'

export default class NumberExpress implements IExpress {
  val: number
  constructor(val: number) {
    this.val = val
  }

  calculate():number {
    return this.val
  }

  toString() {
    return this.val.toString()
  }
}