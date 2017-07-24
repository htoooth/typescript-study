
import Express from './Express'

function main() {
  let a:Express = Express.of(1)
  let b:Express = Express.of(2)
  let c:Express = Express.of(a, "+", b)

  console.log(c.toString() , '=', c.calculate())
}

main() 