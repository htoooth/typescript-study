import Express from './Express';

function main() {
  let a = Express.of(3)
  let b = Express.of(4)
  let c = Express.of(5)
  let d = Express.of(6)

  let e = Express.of(a, '+', b)
  let f = Express.of(c, '-', d)

  let g = Express.of(e, '*', f)
  let h = Express.of(f, '/', g)

  console.log(h.toString(), ' = ', h.calculate())
}

main()