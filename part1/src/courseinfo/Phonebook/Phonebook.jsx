import { useState } from "react"
import ContactList from "./ContactList"
import PersonForm from "../utils/PersonForm";
import Filter from "../utils/Filter";

const Phonebook = () => {
	const [persons, setPersons] = useState([
		{id: 1, name : "Perso 1", number : "0321456987"}
	]);

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