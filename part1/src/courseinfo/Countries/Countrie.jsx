const Countrie = ({countrie}) => {
	return (
		<div>
			<h2> {countrie.name.common} </h2>
			<div> {countrie.capital} </div>
			<div> {countrie.area} </div>
			<h2> language </h2>
			<ul>
				{Object.keys(countrie.languages).map((key, id) => <li key={id}> {countrie.languages[key]} </li> )}
			</ul>
			<img src={countrie.flags.svg} alt={`${countrie.name.common} flag`} width={200} height={200} />
		</div>
	)
}

export default Countrie;