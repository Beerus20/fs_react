const ContactList = ({persons}) => {
	return (
		<div>
			<h2> contact list : </h2>
			<ul>
				{
					persons.map((person) => <li key = {person.id}> {person.name} - {person.number} </li>)
				}
			</ul>
		</div>
	)
}

export default ContactList