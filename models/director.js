module.exports=(sequalize,type) =>{
  const Director =sequalize.define('director',{
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      name: type.STRING,
      lastName: type.STRING
  });
  return Director;
};
