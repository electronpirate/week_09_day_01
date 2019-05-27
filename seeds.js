use zoo;
// db.dropDatabase();
//
// db.animals.insertMany([
//
//   {name: 'Janet', type: 'Polar Bear'},
//   {name: 'Norman', type: 'Penguin'}
//
// ]);

const id = ObjectId("5cebde87280928c7cf6823f6");




db.animals.updateOne(
  { _id: id },
  { $set: { name: "Mary" } }
)


db.animals.deleteOne(
  { _id: id }
)

db.animals.findOne({_id: id });
