import { useEffect, useState } from "react";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { createNote, getNotes, updateNote } from "../../service/note"
import Note from "./Note";


const Notes = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");

	useEffect(() => {getNotes().then(value => setNotes(value))}, [])

	const handleChange = (event) => {
		setNewNote(event.target.value);
	}

	const handleAddNewNote = (event) => {
		event.preventDefault();
		createNote({
			id: `${notes.length + 1}`,
			content: newNote,
			date: new Date(),
			important: Math.random() < 0.5,
		})
			.then(value => {
				setNotes(notes.concat(value));
				setNewNote("");
			})
		}

		const toggleImportance = (id) => {
			const note = notes.find(n => n.id === id);
			updateNote(id, {...note, important: !note.important})
				.then(value => {
					setNotes(notes.map(n => n.id !== id ? n : value));
				})
				.catch(error => {
					console.log(error);
					alert(`he note '${note.content}' was already deleted from server`);
					setNotes(notes.filter(note => note.id !== id));
				})
		}

	return (
		<div>
			<h1>Note course : </h1>
			<ul>
				{
					notes.map(note => <Note key={note.id} note={note} handleToggleImportance={() => toggleImportance(note.id)}/> )
				}
			</ul>
			<h2>add note course : </h2>
			<form action="" onSubmit={handleAddNewNote}>
				<Input
					text = "Note"
					value = {newNote}
					handleChange = {handleChange}
				/>
				<Button text="ADD" handleClick={null}/>
			</form>
		</div>
	)
}

export default Notes