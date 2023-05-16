const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://trungng618:Nightmare666@musicplayer-cluster.cbexwk8.mongodb.net/music_player?retryWrites=true&w=majority";


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(uri, {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// Models
const Song = require('./models/Song');

app.get('/songs', async (req, res) => {
	const songs = await Song.find();

	res.json(songs);
});
app.listen(3001, ()=>{
    console.log("Listening on port 3001");
});