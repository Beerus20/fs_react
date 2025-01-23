import axios from "axios";

const get = (url) => axios.get(url).then(response => response.data);

const create = (url, newValue) => axios.post(url, newValue).then(response => response.data);

const update = (url, id, newValue) => axios.put(`${url}/${id}`, newValue).then(response => response.data);

const del = (url, id) => axios.delete(`${url}/${id}`).then(response => response.data);

export {
	get,
	create,
	update,
	del
}