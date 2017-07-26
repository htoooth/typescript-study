import Express from './Express';

function main() {
  let a: Express = Express.of(3)
  let b: Express = Express.of(4)
  let c: Express = Express.of(5)
  let d: Express = Express.of(6)
  let e: Express = Express.of(7)
  let f: Express = Express.of(8)
  let g: Express = Express.of(9)

  let h = Express.of(g, '+', f)
  let j = Express.of(d, '-', e)
  let i = Express.of(c, '*', b)

  let x = Express.of(h, '*', Express.of(j, "+", i))

  console.log(x.toString(), ' = ', x.calculate())

}

main()