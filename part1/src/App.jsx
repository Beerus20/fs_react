import { useState } from "react"
import Notes from "./courseinfo/Note/Notes";
import Course from "./courseinfo/Course/Course"
import Phonebook from "./courseinfo/Phonebook/Phonebook"
import Button from "./courseinfo/utils/Button";
import Countries from "./courseinfo/Countries/Countries";


const App = () => {
	const [page, setPage] = useState("notes");
	const pages = {
		"notes": <Notes/>,
		"courses": <Course/>,
		"persons": <Phonebook/>,
		"countries": <Countries/>,
	};

	const handleClick = (event) => {
		setPage(event.target.innerText.toString());
	}

	return (
		<div>
			<div>
				{Object.keys(pages).map(text => <Button key={text} text={text} handleClick={handleClick}/>)}
			</div>

			{pages[page]}
		</div>
	)
}

export default App
