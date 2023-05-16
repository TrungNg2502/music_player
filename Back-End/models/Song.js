const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
	songName: {
		type: String,
		required: true
	},
	author: {
		type: String,
		require: true
	},
	albumName: {
		type: String,
		require: false,
        default: "Unknown"
	},
    avatar: {
		type: String,
		require: false,
        default: 'https://yt3.googleusercontent.com/vCqmJ7cdUYpvR0bqLpWIe8ktaor4QafQLlfQyTuZy-M9W_YafT8Wo9kdsKL2St1BrkMRpVSJgA=s900-c-k-c0x00ffffff-no-rj'
	},
    link: {
		type: String,
		require: true,
	}
});

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;