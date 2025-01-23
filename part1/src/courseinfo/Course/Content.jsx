import Display from "../utils/Display"

const Content = ({parts}) => {
	return (
		<ul>
			{
				parts.map((part) =>
					<Display key = {part.id}  part = {part}/>
			)}
		</ul>
	)
}

export default Content