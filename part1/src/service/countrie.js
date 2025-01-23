import { get, create, update } from "./service"

const countriesUrl = "https://restcountries.com/v3.1/all";

const getCountries = () => get(countriesUrl);

const createCountrie = (newValue) => create(countriesUrl, newValue);

const updateCountrie = (id, value) => update(countriesUrl, id, value);

export {
	getCountries,
	createCountrie,
	updateCountrie
}
