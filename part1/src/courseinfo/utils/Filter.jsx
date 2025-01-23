import {useState} from 'react'
import Input from './Input'

const Filter = ({text, handleFilter}) => {
	const [filter, setFilter] = useState("");

	const handleChange = (event) => {
		setFilter(event.target.value);
		handleFilter(event.target.value.toLocaleLowerCase())
	}
	return (
		<Input
			text = {text ? text : "filter shw with"}
			value = {filter}
			handleChange = {handleChange}
		/>
	)
}

export default Filter