import React, { Component } from 'react'
import uniqid from 'uniqid'
import DisplayProjects from './Display Components/DisplayProjects'

class AddProjects extends Component {
	constructor() {
		super()
		this.state = {
			projectText: { text: '', id: uniqid() },
			projectArr: [],
			projectURLText: { text: '', id: uniqid() },
			projectURLArr: [],
			aboutProjectText: { text: '', id: uniqid() },
			aboutProjectArr: [],
		}
	}

	handleChangeAddProject = (e) => {
		this.setState({
			projectText: {
				text: e.target.value,
				id: this.state.projectText.id,
			},
		})
	}
	handleChangeAddProjectURL = (e) => {
		this.setState({
			projectURLText: {
				text: e.target.value,
				id: this.state.projectURLText.id,
			},
		})
	}
	handleChangeAddAboutProject = (e) => {
		this.setState({
			aboutProjectText: {
				text: e.target.value,
				id: this.state.aboutProjectText.id,
			},
		})
	}

	onSubmitProject = (e) => {
		e.preventDefault()
		this.setState({
			projectArr: this.state.projectArr.concat(this.state.projectText),
			projectText: { text: '', id: uniqid() },
			projectURLArr: this.state.projectURLArr.concat(this.state.projectURLText),
			projectURLText: { text: '', id: uniqid() },
			aboutProjectArr: this.state.aboutProjectArr.concat(
				this.state.aboutProjectText
			),
			aboutProjectText: { text: '', id: uniqid() },
		})
	}

	render() {
		const {
			projectArr,
			projectText,
			projectURLText,
			aboutProjectText,
			projectURLArr,
			aboutProjectArr,
		} = this.state
		return (
			<>
				<div>
					<form>
						<label htmlFor="aboutMeInput">Project Name</label>
						<input
							onChange={this.handleChangeAddProject}
							type="text"
							id="projectName"
							value={projectText.text}
						/>
						<label htmlFor="aboutMeInput">Project Link</label>
						<input
							onChange={this.handleChangeAddProjectURL}
							type="url"
							id="projectUrl"
							value={projectURLText.text}
						/>
						<label htmlFor="aboutMeInput">about the project</label>
						<textarea
							onChange={this.handleChangeAddAboutProject}
							type="text"
							id="aboutProject"
							name="aboutProjectText"
							value={aboutProjectText.text}
						></textarea>
						<button type="submit" onClick={this.onSubmitProject}>
							Add Project
						</button>
					</form>
					<DisplayProjects
						projectArr={projectArr}
						projectURLArr={projectURLArr}
						aboutProjectArr={aboutProjectArr}
					/>
				</div>
			</>
		)
	}
}

export default AddProjects
