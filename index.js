function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`)
  return '${firstName}'
}
 
sayHelloTo('Isabel') // "Hello, Isabel!"
sayHelloTo("Jane") // "Hello, Jane!"
sayHelloTo("R2-D2") // "Hello, R2-D2!"
sayHelloTo(1) // "Hello, 1!"