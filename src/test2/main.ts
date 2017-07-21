import Express from './Express'

function  main() {
  let a:Express = Express.of(1)
  let b:Express = Express.of(3, '+', 4)
  let c:Express = Express.of(3, '-', 4)
  let d:Express = Express.of(3, '*', 4)
  let e:Express = Express.of(3, '/', 4)
  let f:Express = Express.of(b, '*', c)
  let g:Express = Express.of(f, '-', e)
  let h:Express = Express.of(g, '/', f)

  console.log(f.toString() + '=' + f.calculate())
  console.log(g.toString() + '=' + g.calculate())
  console.log(h.toString() + '=' + h.calculate())
}

main()