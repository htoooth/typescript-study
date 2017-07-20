import Express from './Express'

function main() {
  let a:Express = Express.of(1)
  let b:Express = Express.of(3, "+", 2)
  let c:Express = Express.of(4, "-", 2)
  let d:Express = Express.of(5, "*", 2)
  let e:Express = Express.of(6, "/", 2)
  let f:Express = Express.of(b, "+", c)

  console.log(a.toString())
  console.log(b.toString())
  console.log(f.toString(), '=', f.calculate())
}

main()