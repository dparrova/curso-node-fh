const fs = require('fs');
const color = require('colors');

const crearArchivo = async(base = 5,listar,hasta) =>{
  try{
let salida = '';
let consola = '';

for(let i =1;i<=hasta;i++){
  consola += `${base} ${color.green('x')} ${i} ${color.yellow('=')} ${base * i} \n`;

  salida += `${base} x ${i} = ${base * i} \n`;
}

fs.writeFileSync(`./salida/tabla${base}.txt`,salida);
if(listar){
  console.log('===================='.green);
  console.log('     Tabla del',base);
  console.log('===================='.green);
  console.log(consola);
}
return `tablar-${base}.txt creada`;
}
catch(err){
  throw err;
}

}

module.exports = {
  crearArchivo
}