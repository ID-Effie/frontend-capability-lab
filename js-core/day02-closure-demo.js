console.log('1. counter closure')

function createCounter() {
  let count = 0

  return function increase() {
    count += 1
    return count
  }
}

const counter = createCounter()

console.log(counter())
console.log(counter())
console.log(counter())

// createCounter has finished running, but increase still remembers count.
// count is not a global variable, so outside code cannot directly change it.
// This is a typical closure for private state.

console.log('\n2. cache closure')

function createSquareCache() {
  const cache = new Map()

  return function square(number) {
    if (cache.has(number)) {
      console.log('from cache:', number)
      return cache.get(number)
    }

    console.log('calculate:', number)
    const result = number * number
    cache.set(number, result)
    return result
  }
}

const square = createSquareCache()

console.log(square(5))
console.log(square(5))
console.log(square(6))

// cache is saved by the returned square function.
// Multiple calls share the same cache, so repeated input can reuse previous result.
// This is a closure used to remember data between calls.

console.log('\n3. closure in loops with var')

const varCallbacks = []

for (var i = 0; i < 3; i++) {
  varCallbacks.push(function printVarI() {
    console.log('var callback i:', i)
  })
}

varCallbacks[0]()
varCallbacks[1]()
varCallbacks[2]()

// var has no block scope, so all callbacks share the same i.
// When callbacks run, the loop has ended and i is already 3.
// That is why all three outputs are 3.

console.log('\n4. closure in loops with let')

const letCallbacks = []

for (let j = 0; j < 3; j++) {
  letCallbacks.push(function printLetJ() {
    console.log('let callback j:', j)
  })
}

letCallbacks[0]()
letCallbacks[1]()
letCallbacks[2]()

// let creates a fresh binding for each loop round.
// Each callback remembers its own j.
// That is why the outputs are 0, 1, and 2.
