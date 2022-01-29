module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/album', require('./routes/album.route'));
  app.use('/artist', require('./routes/artist.route'));
  app.use('/song', require('./routes/song.route'));

};
