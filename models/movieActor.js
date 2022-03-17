module.exports= (sequalize,type)=>{
  const MovieActor=sequalize.define('movieActors',{
    id:{type: type.INTEGER, primaryKey:true,autoIncrement:true},
    movieId: type.INTEGER,
    actorId: type.INTEGER
  });
  return MovieActor;
}
