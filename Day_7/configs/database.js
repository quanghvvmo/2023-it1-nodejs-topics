const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Connection error:'));
database.once('open', () => {
    console.log('Connected to MongoDB!');
})