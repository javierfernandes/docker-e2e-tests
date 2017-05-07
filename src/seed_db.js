var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = process.env.MONGO_URL;

console.log('>>>> Seeding database', url)

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('ERROR', err)
    process.exit(-1)
  }
  const col = db.collection('users')
  col.insertOne({ name: 'Socrates', created_at: new Date() })
    .then(() => {
      col.insertOne({ name: 'Platon', created_at: new Date() })
    })
    .then(() => {
      col.insertOne({ name: 'Aristoteles', created_at: new Date() })
    })
    .then(() => {
      db.close()
    })
});