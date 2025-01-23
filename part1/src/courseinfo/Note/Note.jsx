import Button from "../utils/Button";

const Note = ({note, handleToggleImportance}) => {
	return (
		<li>
			{note.content}
			<Button
				text={note.important? "make not important" : "make important"}
				handleClick={handleToggleImportance}
			/>
		</li>
	)
}

export default Note;