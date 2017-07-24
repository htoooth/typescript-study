import Express from './Express';

function main() {
  let a:Express = Express.of(5)
  let b:Express = Express.of(8)
  let c:Express = Express.of(9)
  let d:Express = Express.of(10)
  let e:Express = Express.of(c, '-', d)
  let f:Express = Express.of(a, '+', b)
  let g:Express = Express.of(e, '*', f)

  console.log(g.toString(), "=", g.calculate())
}

main()