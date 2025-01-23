
const Total = ({parts}) => {
	const total = parts.reduce((a, c) => {
		a = {...a, exercises : a.exercises + c.exercises};
		return a;
	})
	return (
		<div>
			Total : { total.exercises }
		</div>
	)
}

export default Total