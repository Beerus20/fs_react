import { useState } from "react"
import Button from "./Button"
import Input from "./Input"

const PersonForm = ({persons, updatePersons}) => {
	const [newPerson, setNewPerson] = useState({
		name : "", number : ""
	});

	const handleInput = (e, field) => {
		setNewPerson({...newPerson, [field] : e.target.value});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const name_check = persons.filter(person => person.name.toLowerCase() == newPerson.name.toLowerCase());
		if (newPerson.name.length && newPerson.number.length)
		{
			if (name_check.length != 0)
				alert(`"${newPerson.name}" already exist ...`);
			else
			{
				updatePersons(persons.concat({...newPerson, id : persons.length + 1}));
				setNewPerson({name : "", number : ""});
			}
		}
	};

	return (
		<div>
			<form action = "submit" onSubmit = {handleSubmit}>
				<Input
					text = "name "
					value = {newPerson.name}
					handleChange = {(event) => handleInput(event, "name")}
				/>
				<Input
					text = "number"
					value = {newPerson.number}
					handleChange = {(event) => handleInput(event, "number")}
				/>
				<Button text = "add contact" handleClick = {null}/>
			</form>
		</div>
	)
}

export default PersonForm