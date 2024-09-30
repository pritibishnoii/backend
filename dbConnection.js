const mongoose = require('mongoose');
const mongodbUrl = process.env.MONGODB_URL;

function dbConnect(){
    mongoose
    .connect(mongodbUrl)
    .catch((error) => console.log(error.reason));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Database ready to be connected");
});
}

module.exports = dbConnect;