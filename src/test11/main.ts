import Express from './Express'

function main () {
  let a: Express = Express.of(3)
  let b: Express = Express.of(5)
  let c: Express = Express.of(a, '+', b)
  let d: Express = Express.of(b, '*', c)
  let e: Express = Express.of(c, '/', d)

  console.log(e.toString() + '=' + e.calculate())
}

main()