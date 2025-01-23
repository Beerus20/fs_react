
const Notes = ({notes}) => {
	return (
		<div>
			<h1>Note course : </h1>
			<ul>
				{
					notes.map(note => <li key={note.id}> {note.content} </li> )
				}
			</ul>
		</div>
	)
}

export default Notes