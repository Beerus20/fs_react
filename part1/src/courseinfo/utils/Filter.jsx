import {useState} from 'react'
import Input from './Input'

const Filter = ({persons, updatePersonsShowList}) => {
	const [filter, setFilter] = useState("");

	const handleFilter = (event) => {
		setFilter(event.target.value);
		updatePersonsShowList(persons.filter(person => person.name.toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase()) != -1))
	}
	return (
		<Input
			text = "filter shw with"
			value = {filter}
			handleChange = {handleFilter}
		/>
	)
}

export default Filter