import React, { Component } from 'react'

import DisplayAboutMe from './About Me Components/DisplayAboutMe'

class AddAboutMe extends Component {
	constructor() {
		super()
		this.state = {
			aboutMeText: { text: '' },
		}
	}

	handleChangeAboutMe = (e) => {
		this.setState({
			aboutMeText: {
				text: e.target.value,
			},
		})
	}

	onSubmitAboutMe = (e) => {
		e.preventDefault()
		this.setState({
			aboutMeText: { text: '' },
		})
	}

	render() {
		const { aboutMeText } = this.state
		return (
			<>
				<div>
					<form>
						<label htmlFor="aboutMeInput">About Me</label>
						<textarea
							onChange={this.handleChangeAboutMe}
							id="aboutMe"
							value={aboutMeText.text}
							name="aboutMeTextArea"
						>
							This is placeholder text
						</textarea>
						<button type="submit" onClick={this.onSubmitAboutMe}>
							Add About Me
						</button>
					</form>
					<DisplayAboutMe aboutMeText={aboutMeText.text} />
				</div>
			</>
		)
	}
}

export default AddAboutMe
