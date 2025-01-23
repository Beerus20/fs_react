import { get, create, update } from "./service"

const noteUrl = "http://localhost:3001/notes";

const getNotes = () => get(noteUrl);

const createNote = (newValue) => create(noteUrl, newValue);

const updateNote = (id, value) => update(noteUrl, id, value);

export {
	getNotes,
	createNote,
	updateNote
}
