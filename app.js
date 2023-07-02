const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

//console.log(process.argv);
//const [,,argumento = 'base=1']=process.argv;
//const[,base]=argumento.split('=');


crearArchivo(argv.base,argv.listar,argv.h).then(file => console.log(file))
.catch(err => console.log(err));
