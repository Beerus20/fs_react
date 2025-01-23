import { useState } from "react"
import Button from "../utils/Button"
import Input from "../utils/Input"
import { createPerson } from "../../service/phonebook";

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
				createPerson({...newPerson, id : `${persons.length + 1}`})
					.then(value => updatePersons(persons.concat(value)))
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