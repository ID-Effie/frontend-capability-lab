console.log('1. var does not have block scope')

if (true) {
  var functionOrGlobalScoped = 'var inside if'
  let blockScopedLet = 'let inside if'
  const blockScopedConst = 'const inside if'

  console.log(functionOrGlobalScoped)
  console.log(blockScopedLet)
  console.log(blockScopedConst)
}

console.log(functionOrGlobalScoped)

try {
  console.log(blockScopedLet)
} catch (error) {
  console.log('blockScopedLet outside block:', error.name)
}

try {
  console.log(blockScopedConst)
} catch (error) {
  console.log('blockScopedConst outside block:', error.name)
}

// var ignores the if block, so functionOrGlobalScoped can still be read.
// let and const belong to the if block, so reading them outside throws ReferenceError.
// This is the main difference between function/global scope and block scope.

console.log('\n2. var inside a function belongs to that function')

function showFunctionScope() {
  if (true) {
    var functionScoped = 'var inside function if'
  }

  console.log(functionScoped)
}

showFunctionScope()

try {
  console.log(functionScoped)
} catch (error) {
  console.log('functionScoped outside function:', error.name)
}

// var inside a function is available throughout that function.
// It does not escape outside the function, even when declared inside an if block.
// This is why we say var has function scope.

console.log('\n3. let in for creates a new block binding each time')

for (let i = 0; i < 3; i++) {
  console.log('let loop i:', i)
}

try {
  console.log(i)
} catch (error) {
  console.log('i outside for:', error.name)
}

// let i only exists inside the for block.
// After the loop ends, the outer scope cannot access i.
// This behavior is safer than var in loops.
