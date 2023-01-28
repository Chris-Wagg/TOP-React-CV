import React, { Component } from 'react'
import uniqid from 'uniqid'

import DisplayAboutMe from './Display Components/DisplayAboutMe'

class AddAboutMe extends Component {
	constructor() {
		super()
		this.state = {
			aboutMeText: { text: '', id: uniqid() },
			aboutMeArr: [],
		}
	}

	handleChangeAboutMe = (e) => {
		this.setState({
			aboutMeText: {
				text: e.target.value,
				id: this.state.aboutMeText.id,
			},
		})
	}

	onSubmitAboutMe = (e) => {
		e.preventDefault()
		this.setState({
			aboutMeArr: this.state.aboutMeArr.concat(this.state.aboutMeText),
			aboutMeText: { text: '', id: uniqid() },
		})
	}

	render() {
		const { aboutMeText, aboutMeArr } = this.state
		return (
			<>
				<div className="sides-container">
					<form>
						<fieldset>
							<legend>About you</legend>
							<div className="input-main-container">
								<div className="input-container">
									<label htmlFor="aboutMeInput">About Me</label>
									<textarea
										onChange={this.handleChangeAboutMe}
										id="aboutMe"
										value={aboutMeText.text}
										name="aboutMeTextArea"
									></textarea>
								</div>
								<button type="submit" onClick={this.onSubmitAboutMe}>
									Add About Me
								</button>
							</div>
						</fieldset>
					</form>
					<div className="info-display">
						<DisplayAboutMe aboutMeArr={aboutMeArr} />
					</div>
				</div>
			</>
		)
	}
}

export default AddAboutMe
