import {useState} from 'react'
import Button from './Button'

const StatisticLine = ({text, value}) => {
	return (
		<tr>
			<td> {text} </td>
			<td> {value} </td>
		</tr>
	)
}

const Statistics = ({data}) => {
	// Object.keys(data).map((text) => console.log(text + " : " + data[text]));
	return (
		<div>
			<h2>Statistics</h2>
			<StatisticLine text = "Good" value = {data.good}/>
			<StatisticLine text = "Neutral" value = {data.neutral}/>
			<StatisticLine text = "bad" value = {data.bad}/>
			<div> Total : {data.bad + data.good + data.neutral} </div>
		</div>
	)
}

const Feedback = () => {
	const [feedback, setFeedback] = useState({
		good : 0,
		neutral : 0,
		bad : 0
	});

	const handleFeedback = (status) => {
		return (() => {
			console.log(status, feedback, feedback[status]);
			setFeedback({...feedback, [status] : feedback[status] + 1});
		})
	};

	return (
		<div>
			<h1>Feedback</h1>
			<div>
				<Button text = "good" handleClick = {handleFeedback("good")} />
				<Button text = "neutral" handleClick = {handleFeedback("neutral")} />
				<Button text = "bad" handleClick = {handleFeedback("bad")} />
			</div>
			<Statistics data = {feedback} />
		</div>
	)
}

export default Feedback