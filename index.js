const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require("dotenv").config();

const app = express()
const port = process.env.PORT || 5000;

//middlewire
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ch3vz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
	try {
		await client.connect();
		const database = client.db("usersDB");
		const usersCollection = database.collection("users");

	app.get('/users',async(req,res)=>{
		const all_user = await usersCollection.find({}).toArray();
		// console.log(user)
		res.json(all_user)
	})


		// post api
		app.post('/users', async (req, res) => {
			const user = req.body;
			const result = await usersCollection.insertOne(user)
			// console.log('hitting the post',req.body)
			res.json(result)
		});

		app.delete('/users/:id',async(req,res)=>{
			const id = req.params.id;
			const query ={_id:ObjectId(id)}
			const result = await usersCollection.deleteOne(query)
			// console.log(result);
			res.json(result)
		})

	} finally {
		// await client.close();
	}
}
run().catch(console.dir);





app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})