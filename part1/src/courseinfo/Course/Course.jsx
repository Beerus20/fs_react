import { useEffect, useState } from "react"
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import { getCourses } from "../../service/course"

const Course = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => { getCourses().then(value => setCourses(value)) }, [])

	return (
		<div>
			{
				courses.map((course) => {
					return (
						<div key = {course.id} >
							<Header course = {course.name} />
							<Content parts = {course.parts}/>
							<Total parts = {course.parts} />
						</div>
					)
				})
			}
		</div>
	)
}

export default Course