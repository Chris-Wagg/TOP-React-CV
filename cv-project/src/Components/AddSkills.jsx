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
				<div className="sides-container">
					<form>
						<fieldset>
							<legend>Skills</legend>
							<div className="input-main-container">
								<div className="input-container">
									<label htmlFor="aboutMeInput">Skills</label>
									<input
										onChange={this.handleChangeAboutMe}
										id="Skills"
										value={skillsText.text}
										name="skillsinput"
									/>
								</div>
								<button type="submit" onClick={this.onSubmitSkills}>
									Add Skills
								</button>
							</div>
						</fieldset>
					</form>
					<div className="info-display">
						<DisplaySkills skillsArr={skillsArr} />
					</div>
				</div>
			</>
		)
	}
}

export default AddAboutMe
