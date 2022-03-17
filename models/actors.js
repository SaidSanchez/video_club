module.exports=(sequalize,type) =>{
  const Actors =sequalize.define('actors',{
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      name: type.STRING,
      lastName: type.STRING
  });
  return Actors;
};
