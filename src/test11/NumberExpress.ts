import IExpress from './IExpress';

export default class NumberExpress implements IExpress {
  node: number

  constructor(node) {
    this.node = node
  }

  calculate(): number {
    return this.node
  }

  toString() {
    return this.node.toString()
  }
}