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
					<DisplayAboutMe aboutMeArr={aboutMeArr} />
				</div>
			</>
		)
	}
}

export default AddAboutMe
