require("dotenv").config();

const db = {};
db.mongoId = process.env.MONGO_ID;
db.mongoPass = process.env.MONGO_PASS;

const url = `mongodb+srv://${db.mongoId}:${db.mongoPass}@cluster0.ebk3y.mongodb.net/dailyRoutineDB?retryWrites=true&w=majority`;

module.exports = url;
