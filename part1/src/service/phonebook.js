import { get, create, update } from "./service"

const phonbookUrl = "http://localhost:3001/persons";

const getPersons = () => get(phonbookUrl);

const createPerson = (newValue) => create(phonbookUrl, newValue);

const updatePerson = (id, value) => update(phonbookUrl, id, value);

export {
	getPersons,
	createPerson,
	updatePerson
}
