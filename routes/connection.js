const mongoose = require("mongoose")

const MONGO_URL = 'mongodb://127.0.0.1:27017/officehub';
// const MONGO_URL = 'mongodb+srv://vatsaljajadiya1310:8iII8939646@cluster0.oahfaag.mongodb.net/officehub';

mongoose.set("strictQuery", false);


const serv = mongoose.connect(MONGO_URL)
    .then(console.log(`DB Connection is success!`))
    .catch((error) => {
        console.log(`DB connection is Failed!`)
        console.log(error);
});

module.exports = serv;    