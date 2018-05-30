class Animal {
  constructor (color, name) {
    this.color = color
    this.name = name
  }
  run () {
    console.log('run')
    return 'run'
  }
}
class Bear extends Animal {
  constructor () {
    super('blue', 'hbird')
  }
  say () {
    console.log(this.color + this.name)
  }
  eat () {
    console.log('eat')
  }
}
let flappyBird = new Bear()
flappyBird.run()
flappyBird.say()
