const express = require('express')
const router = express.Router();
const Todos = require('../models/todo.js')
router.get('/todos', async function(req, res){
	let todos;
	console.log('todos');
	try{
		todos = await Todos.find({});
		res.send(todos);
		}catch(err){
		res.status(500).send(err);
	}
})
router.post('/newTodo', async function(req, res){
	console.log('req.body ', req.body);
const todo = new Todos(req.body);	
try{
	await todo.save();
	res.send(todo);
	}catch(err){
		res.status(500).send(err);
		}
})
router.post('/updateTodo', async function(req, res){
	console.log('req.body: ', req.body);
	try{
		let updateTodo = await Todos.findByIdAndUpdate();
		}catch(err){
		res.status(500).send(err);
		}
	})
	router.delete('/deleteTodo', async function(req, res){
		try{
			let todo = await Todos.findByIdAndDelete(req.body.id);
			if(!todo) res.status(404).send("no item found");
			res.status(200).send({id: req.body.id});
			}catch(err){
			res.status(500).send(err);
			}
		})
module.exports = router;
