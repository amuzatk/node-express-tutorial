// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname) // @ 0min this runs
setTimeout(()=> { //after 1sec setTimeout runs
  setInterval(() => { //after 3seconds first 'hello world' runs
    console.log('hello world')
  }, 2000)
}, 1000);

