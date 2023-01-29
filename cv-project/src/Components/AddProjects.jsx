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
				<div className="sides-container">
					<form>
						<fieldset>
							<legend>Projects</legend>
							<div className="input-main-container">
								<div className="input-container">
									<label htmlFor="aboutMeInput">Project Name</label>
									<input
										onChange={this.handleChangeAddProject}
										type="text"
										id="projectName"
										value={projectText.text}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="aboutMeInput">Project Link</label>
									<input
										onChange={this.handleChangeAddProjectURL}
										type="url"
										id="projectUrl"
										value={projectURLText.text}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="aboutMeInput">Project info</label>
									<textarea
										onChange={this.handleChangeAddAboutProject}
										type="text"
										id="aboutProject"
										name="aboutProjectText"
										value={aboutProjectText.text}
									></textarea>
								</div>
								<button type="submit" onClick={this.onSubmitProject}>
									Add Project
								</button>
							</div>
						</fieldset>
					</form>
					<div className="info-display">
						<DisplayProjects
							projectArr={projectArr}
							projectURLArr={projectURLArr}
							aboutProjectArr={aboutProjectArr}
						/>
					</div>
				</div>
			</>
		)
	}
}

export default AddProjects
