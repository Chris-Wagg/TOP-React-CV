import React, { Component } from 'react'
import uniqid from 'uniqid'
import DisplayItem from './Components/DisplayItem'

// https://www.theodinproject.com/lessons/node-path-javascript-handle-inputs-and-render-lists#assignment

class App extends Component {
	constructor() {
		super()

		//state definied here
		this.state = {
			task: { text: '', id: uniqid() },
			tasks: [],
		}
	}

	handleChange = (e) => {
		// on change handler thats sets state to whatever is typed in the input
		this.setState({
			task: {
				text: e.target.value, // sets the state.task.text to what is sent from the value attribute from the input
				id: this.state.task.id, // sets the id because we need one
			},
		})
	}

	onSubmitTask = (e) => {
		// the onSubmmit handler invoked when the button is clicked
		e.preventDefault() // prevents page from refreshing
		this.setState({
			tasks: this.state.tasks.concat(this.state.task), //adds the submitted task to our tasks array. remember not to directly assign state
			// can't use .push because will mess with the .map in the overview component
			task: { text: '', id: uniqid() }, // set the state and the input to empty
		})
	}

	render() {
		const { task, tasks } = this.state //comes from the state defined in the constructor

		return (
			<div>
				<form onSubmit={this.onSubmitTask}>
					{/* the onSubmit can be here but in that case the button specifically needs to have type=submit */}
					<label htmlFor="taskInput">Enter task</label>
					<input
						onChange={this.handleChange} // the function from above
						value={task.text} // needs to specify value attributed for input elements. sends the value of the input to the handleChange function to set the state.task.text value
						type="text"
						id="taskInput"
					/>
					<button type="submit">Add Task</button>
					{/* can also add an onClock here that calls the onSubmitTask function instead of having it on the form */}
				</form>
				<DisplayItem tasks={tasks} />
				{/* gets tasks from the state? */}
			</div>
		)
	}
}

export default App
