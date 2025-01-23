import { useState, useEffect } from "react"
import axios from "axios"
import Notes from "./courseinfo/Note/Note";
import Course from "./courseinfo/Course/Course"
import Phonebook from "./courseinfo/Phonebook/Phonebook"
import Button from "./courseinfo/utils/Button";

const get = (url) => {
	return 	(
		axios
			.get(url)
			.then(response => {
				return response;
			})
	);
}

const App = () => {
	const [data, setData] = useState({notes : [], courses : [], persons : []});
	const pages = {
		"notes": <Notes notes={data.notes}/>,
		"courses": <Course courses={data.courses}/>,
		"persons": <Phonebook persons={data.persons}/>,
	};
	const [page, setPage] = useState("notes");

	useEffect(() => {
		get(`http://localhost:3001/${page}`).then(response => setData({...data, [page] : response.data}));
	}, [page])


	const handleClick = (event) => {
		setPage(event.target.innerText.toString());
	}

	return (
		<div>
			<div>
				{
					Object.keys(pages).map(text =>
						<Button key={text} text={text} handleClick={handleClick}/>
					)
				}
			</div>

			{pages[page]}
		</div>
	)
}

export default App
