const Sequalize=require('sequelize');
const directorModel = require('./models/director');
const generesModel = require('./models/generes');
const actorsModel = require('./models/actors');
const membersModel = require('./models/member');
const movieModel = require ('./models/movie');
const movieActorModel= require('./models/MovieActor');
const copiesModel = require('./models/copies');
const bookingModel= require('./models/booking');
//1) nombre de la base de datos.
//2) usuario de base de datos
//3) contraseña de la base de datos.
//4) Objeto de configuración
const sequalize=new Sequalize('video-club','root','abc123',{
  host:'localhost',
  dialect:'mysql',
  //Como se cambia el puerto, se tiene que espesificar
  port:3307
});

const Director=directorModel(sequalize,Sequalize);
const Genero=generesModel(sequalize,Sequalize);
const Actors=actorsModel(sequalize,Sequalize);
const Members=membersModel(sequalize,Sequalize);
const Movie= movieModel(sequalize,Sequalize);
const MovieActor = movieActorModel(sequalize,Sequalize);
const Copies= copiesModel(sequalize,Sequalize);
const Booking= bookingModel(sequalize,Sequalize);

//Un Director puede tener muchas Peliculas
//.hasMany Mapea la relacion
//Primer parametro lo que va a recibir

Director.hasMany(Movie, {as:'movies'});
//Una Pelicula puede tener un Director
Movie.belongsTo(Director, {as:'director'});

//Un genero puede tener muchas peliculas
Genero.hasMany(Movie,{as:'movies'});
//Una pelicula puede tener un genero
Movie.belongsTo(Genero,{as:'genero'});

//Un actor participa en muchas peliculas
MovieActor.belongsTo(Movie,{foreingKey:'movieId'});

//En una pelicula participan muchos actores
MovieActor.belongsTo(Actors,{foreingKey:'actorId'});
Movie.belongsToMany(Actors,{
  foreingKey:'actorId',
  as:'actors',
  through:'movieActors'
});
Actors.belongsToMany(Movie,{
  foreingKey:'movieId',
  as:'movies',
  through:'movieActors'
});

Movie.hasMany(Copies, {as:'copies'});

Copies.belongsTo(Movie, {as:'movies'});

Copies.hasMany(Booking, {as:'bookings'});

Booking.belongsTo(Copies, {as:'copies'});

Member.hasMany(Booking, {as:'bookings'});

Booking.belongsTo(Member, {as:'members'});

sequalize.sync({
  force:true //borra toda la base de datos y vuelve a inicializar la bd
}).then(()=>{
  console.log("Base de datos actualizada.");
});

module.exports={Director,Genero,Actors,Members,Movie,Copies,Booking};
