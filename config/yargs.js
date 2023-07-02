const argv = require('yargs').option('b',{
  alias: 'base',
  type: 'number',
  demandOption:true,
  describe: 'Base de la tabla de multiplicar'
}).check((argv,options)=>{
  if(isNaN(argv.b)){
    throw 'La base tiene que ser un número'
  }
  return true;
}).option('l',{
  alias: 'listar',
  type: 'boolean',
  default: false,
  describe:'Muestra la tabla en consola'
}).option('h',{
  alias:'hasta',
  type:'number',
  default:'10',
  describe:'limite hasta cuando se repite la operación'
}).check((argv,option)=>{
  if(isNaN(argv.h)){
    throw 'El limite tiene que ser un numero'
  }
  return true
})
.argv;

module.exports = argv;