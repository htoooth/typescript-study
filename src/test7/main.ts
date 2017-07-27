import Express from './Express';


function main() {
  let a:Express = Express.of(3)
  let b:Express = Express.of(7)
  let c:Express = Express.of(9)
  let d:Express = Express.of(11)
  let f:Express = Express.of(13)
  let g:Express = Express.of(17)
  let h:Express = Express.of(19)


  let e:Express = Express.of(a,'+',b)
  let i:Express = Express.of(c, '-', d)
  let j:Express = Express.of(e, '*', i)

  console.log(j.toString(), '=', j.calculate())
}

main()