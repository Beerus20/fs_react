import {useEffect, useState } from "react"
import Filter from "../utils/Filter";
import Countrie from "./Countrie";
import { getCountries } from "../../service/countrie";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [countriesList, setCountriesList] = useState([]);

	useEffect(() => {getCountries().then(value => setCountriesList(value))}, [countriesList])

	const handleFilter = (data) => {
		const newList = countriesList.filter(countrie => countrie.name.common.toLowerCase().indexOf(data) != -1);
		data.length ? setCountries(newList): setCountries([]);
	}

	return (
		<div>
			<h2>countries</h2>
			<Filter text="find countries" handleFilter={handleFilter} />
			{
				countries.length <= 10 ?
					countries.length == 1 ?
						<Countrie countrie={countries[0]}/> :
						countries.map((countrie, id) => <div key={id}>{countrie.name.common}</div> ) :
					<div> Too many matches, specify another filter </div>
			}
		</div>
	)
}

export default Countries