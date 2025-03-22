// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

<<<<<<< HEAD
customEmitter.emit('response', 'john', 34)


//IMPORT AREAS TO STUDY WELL
//1. EVENT LOOP 2. EVENT EMITTER 3. STREAMS 4. ASYNC PATTERNS
=======
customEmitter.emit('response', 'john', 34)// listerners will be called in order they are defined when event is emitted
>>>>>>> 9b02724af800f851b187798a9bf5cf3306609fca
