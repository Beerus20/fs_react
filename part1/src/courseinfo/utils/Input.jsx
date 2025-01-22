const Input = ({text, type, value, handleChange}) => {
	return (
		<div>
			{text} :
			<input
				type = {type ? type : "text"}
				value = {value}
				onChange = {handleChange}
			/>
		</div>
	)
}

export default Input