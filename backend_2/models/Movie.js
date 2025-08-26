const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  plot: { type: String },
  genres: { type: [String] },
  runtime: { type: Number },
  cast: { type: [String] },
  num_mflix_comments: { type: Number },
  title: { type: String },
  fullplot: { type: String },
  countries: { type: [String] },
  released: { type: Date },
  directors: { type: [String] },
  rated: { type: String },
  awards: {
    wins: { type: Number },
    nominations: { type: Number },
    text: { type: String },
  },
  lastupdated: { type: Date },
  year: { type: Number },
  imdb: {
    rating: { type: Number },
    votes: { type: Number },
    id: { type: Number },
  },
  type: { type: String },
  tomatoes: {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    critic: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    lastUpdated: { type: Date },
  },
});

module.exports = mongoose.model('Movie', MovieSchema, 'movies');