import React, { Component } from 'react'
import uniqid from 'uniqid'

import DisplaySkills from './Display Components/DisplaySkills'

class AddAboutMe extends Component {
	constructor() {
		super()
		this.state = {
			skillsText: { text: '', id: uniqid() },
			skillsArr: [],
		}
	}

	handleChangeAboutMe = (e) => {
		this.setState({
			skillsText: {
				text: e.target.value,
				id: this.state.skillsText.id,
			},
		})
	}

	onSubmitSkills = (e) => {
		e.preventDefault()
		this.setState({
			skillsArr: this.state.skillsArr.concat(this.state.skillsText),
			skillsText: { text: '', id: uniqid() },
		})
	}

	render() {
		const { skillsText, skillsArr } = this.state
		return (
			<>
				<div>
					<form>
						<label htmlFor="aboutMeInput">Skills</label>
						<input
							onChange={this.handleChangeAboutMe}
							id="Skills"
							value={skillsText.text}
							name="skillsinput"
						/>
						<button type="submit" onClick={this.onSubmitSkills}>
							Add Skills
						</button>
					</form>
					<DisplaySkills skillsArr={skillsArr} />
				</div>
			</>
		)
	}
}

export default AddAboutMe
