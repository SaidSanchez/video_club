module.exports=(sequalize,type) =>{
  const Genero =sequalize.define('generos',{
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      description: type.STRING,
      status: type.BOOLEAN  
  });
  return Genero;
};
