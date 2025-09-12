import express from 'express'
import * as db from './util/database.js'

const port = 8080;
const app = express;
app.use(express.json());

app.use(cors());

app.get('/users/:id', (req, res) => {
    try{
        const user = db.getUserById(req.params.id);
        if(!user){
            return res.status(404).json({ message: "User not found" });   
        }
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ message: `${error}` })
    }
});
app.post("/users", (req, res) => {
	try {
		const { email, password } = req.body;
		if (!name || !age) {
			return res.status(400).json({ message: "Invalid credentials" });
		}
		const savedUser = db.createUser(name, age);
		if (savedUser.changes != 1) {
			return res.status(422).json({ message: "Unprocessable Entity" });
		}
		res.status(201).json({ id: savedUser.lastInsertRowid, name, age });
	} catch (error) {
		res.status(500).json({ message: `${error}` });
	}