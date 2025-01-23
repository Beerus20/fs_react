import { useState } from "react"
import ContactList from "./ContactList"
import PersonForm from "../utils/PersonForm";
import Filter from "../utils/Filter";

const Phonebook = (props) => {
	const [persons, setPersons] = useState(props.persons);

	const [personsShowList, setPersonsShowList] = useState(persons);

	const updatePersons = (data) => {
		setPersons(data);
		setPersonsShowList(data)
	};

	const updatePersonsShowList = (data) => {
		setPersonsShowList(data);
	}

	return (
		<div>
			<h2> Phonebook : </h2>
			<Filter persons = {persons} updatePersonsShowList = {updatePersonsShowList} />
			<h2>add new contact : </h2>
			<PersonForm persons = {persons} updatePersons = {updatePersons} />
			<ContactList persons = {personsShowList}/>
		</div>
	)
}

export default Phonebook