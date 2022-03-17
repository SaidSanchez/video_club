module.exports = (sequalize, type) =>{
  const Movie = sequalize.define('movie',{
    id:{type: type.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type: type.STRING, notNull:true}
  });
  return Movie;
};
