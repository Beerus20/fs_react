import { get, create, update } from "./service"

const courseUrl = "http://localhost:3001/courses";

const getCourses = () => get(courseUrl);

const createCourse = (newValue) => create(courseUrl, newValue);

const updateCourse = (id, value) => update(courseUrl, id, value);

export {
	getCourses,
	createCourse,
	updateCourse
}
