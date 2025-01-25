const express = require('express');
const app = express();
const morgan = require('morgan');

let notes = [
	{
		id: 1,
		content: "HTML is easy",
		date: "2022-1-17T17:30:31.098Z",
		important: false
	},
	{
		id: 2,
		content: "Browser can execute only JavaScript",
		date: "2022-1-17T18:39:34.091Z",
		important: false
	},
	{
		id: 3,
		content: "GET and POST are the most important methods of HTTP protocol",
		date: "2022-1-17T19:20:14.298Z",
		important: true
    }
]

let persons = [
	{
		"id": 1,
		"name": "Arto Hellas",
		"number": "040-123456"
	},
	{
		"id": 2,
		"name": "Ada Lovelace",
		"number": "39-44-5323523"
	},
	{
		"id": 3,
		"name": "Dan Abramov",
		"number": "12-43-234345"
	},
	{
		"id": 4,
		"name": "Mary Poppendieck",
		"number": "39-23-6423122"
	}
]

const generateId = (datas) => {
	const maxId = datas.length > 0
	? Math.max(...datas.map(data => data.id))
	: 0;
	return (maxId + 1);
}

const requestLogger = (request, response, next) => {
	console.log("Method : ", request.method);
	console.log("Path : ", request.path);
	console.log("Body : ", request.body);
	console.log("-------------------------");
	next();
}

const unknowEndpoint = (request, response) => {
	response.status(404).send({error: 'unknow endpoint'});
}

app.use(express.json());
app.use(requestLogger);
app.use(morgan('tiny'));

app.get('/', (request, response) => {
	response.send("<h1>Hello world</h1>");
})

app.get('/api/notes', (request, response) => {
	response.json(notes);
})

app.get('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id);
	const note = notes.find(note => note.id === id);
	if (note)
		response.json(note);
	else
		response.status(404).end();
})

app.post('/api/notes', (request, response) => {
	const body = request.body;

	if (!body.content)
		return (response.status(400).json({
	error : 'content missing'
}))

const note = {
	content: body.content,
	important: body.important || false,
	date: new Date(),
	id: generateId(notes)
};

notes = notes.concat(note);
response.json(note);
})

app.delete('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id);
	notes = notes.filter(note => note.id !== id);

	response.status(204).end();
})

app.get('/info', (request, response) => {
	response.send(`
		<p><b>Phonebook has info for ${persons.length} people</b></p>
		<p><b>${new Date()}</b></p>
		`);
	})

	app.get('/api/persons', (request, response) => {
		response.json(persons);
	})

	app.get('/api/persons/:id', (request, response) => {
		const id = Number(request.params.id);
	const person = persons.find(person => person.id === id);

	if (person)
		response.json(person);
	else
	response.status(404).end();
})

app.post('/api/persons', (request, response) => {
	const body = request.body;

	if (!body.name && !body.number)
		return (response.status(400).json({
	error: 'name or number is missing'
}))

const check_person = persons.find(person => person.name === body.name);

if (check_person)
	return (response.status(400).json({
error: 'Person name must be unique'
}))

const person = {
	id: generateId(persons),
	name: body.name,
	number: body.number
}

persons = persons.concat(person);
response.json(persons);
})

app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter(person => person.id !== id);

	response.status(204).end();
})

app.use(unknowEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
