import Express from './Express'

function main() {

  let a = Express.of(3)
  let b = Express.of(4)
  let c = Express.of(7)
  let d = Express.of(9)

  let e = Express.of(a, '+', b)
  let f = Express.of(c, '+', d)

  let g = Express.of(e, '*', f)

  console.log(g.toString(), '=', g.calculate())
}

main()