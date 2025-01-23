import { useEffect, useState } from "react"
import ContactList from "./ContactList"
import PersonForm from "./PersonForm";
import Filter from "../utils/Filter";
import { getPersons } from "../../service/phonebook";

const Phonebook = () => {
	const [persons, setPersons] = useState([]);

	const [personsShowList, setPersonsShowList] = useState([]);

	useEffect(() => {
		getPersons().then(value => {
			setPersons(value);
			setPersonsShowList(value);
		});
	}, [])

	const updatePersons = (data) => {
		setPersons(data);
		setPersonsShowList(data)
	};

	const updatePersonsShowList = (data) => {
		setPersonsShowList(persons.filter(person => person.name.toLocaleLowerCase().indexOf(data) != -1));
	}

	return (
		<div>
			<h2> Phonebook : </h2>
			<Filter handleFilter = {updatePersonsShowList} />
			<h2>add new contact : </h2>
			<PersonForm persons = {persons} updatePersons = {updatePersons} />
			<ContactList persons = {personsShowList}/>
		</div>
	)
}

export default Phonebook