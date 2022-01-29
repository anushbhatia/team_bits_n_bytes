const Song = require("./models/Song");

// fastify-openapi-glue library expects the method names in the Service class to match the `operationId` from each path in your schema. That's how it will know the request method (GET/POST, etc) and the schema for the request/response of each route
class Service {
  constructor() {}
  getSongs = async (_req, res) => {
    const songs = await Song.find();
    res.send(songs);
  };

  listAllArtist= async (_req, res) => {
    const songs = await Song.find();
    res.send(songs);
  };
  listAllAlbums= async (_req, res) => {
    const songs = await Song.find();
    res.send(songs);
  };
  addSong = async (req, res) => {
    // create and save song to db
    const newSong = await Song.create(req.body);

    res.code(201).send(newSong);
  };
  listOneArtist= async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that song exists
    const song = await Song.findById(id);

    if (song) {
      res.send(song);
    } else {
      res.code(404).send({ message: `Song with id '${id}' not found` });
    }
  };
  listOneAlbum=async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that song exists
    const song = await Song.findById(id);

    if (song) {
      res.send(song);
    } else {
      res.code(404).send({ message: `Song with id '${id}' not found` });
    }
  };
  getSong = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that song exists
    const song = await Song.findById(id);

    if (song) {
      res.send(song);
    } else {
      res.code(404).send({ message: `Song with id '${id}' not found` });
    }
  };


  updateSong = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that song exists
    const song = await Song.findById(id);

    if (song) {
      // Update song in database
      await song.update(req.body);
      // send empty response with status 204
      res.code(204).send();
    } else {
      res.code(404).send({ message: `Song with id '${id}' not found` });
    }
  };

  deleteSong = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that restuarant exists
    const song = await Song.findById(id);

    if (song) {
      // Delete song from database
      await Song.findByIdAndRemove(id);
      // send empty response with status 204
      res.code(204).send();
    } else {
      res.code(404).send({ message: `Song with id '${id}' not found` });
    }
  };
}

module.exports = Service;
