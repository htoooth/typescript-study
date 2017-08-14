import Express from './Express';


function main() {
  let a = Express.of(2, '+', 3)
  let b = Express.of(5, '+', 7)
  let c = Express.of(a, '*', b)

  console.log(c.toString() + '=', c.calculate())
}

main()