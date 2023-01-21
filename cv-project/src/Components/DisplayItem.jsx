import React from 'react'

const DisplayItem = (props) => {
	const { tasks } = props

	return (
		<ul>
			{tasks.map((task) => {
				// maps tasks array from state and returns new list items with each array item and an id
				return <li key={task.id}>{task.text}</li>
			})}
		</ul>
	)
}

export default DisplayItem
