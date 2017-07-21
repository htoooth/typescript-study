import IExpress from './IExpress'


export default class NumberExpress implements IExpress {
  num: number

  constructor(val:number) {
    this.num = val
  }

  calculate():number {
    return this.num
  }

  toString() {
    return this.num.toString()
  }
}