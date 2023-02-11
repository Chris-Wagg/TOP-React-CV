import React, { useState } from 'react'

import DisplayAboutMe from './Display Components/DisplayAboutMe'

export default function AddAboutMe() {
	const [aboutMeText, setAboutMeText] = useState('')

	const onSubmitAboutMe = (e) => {
		e.preventDefault()
		setAboutMeText(document.getElementById('aboutMe').value)
		document.getElementById('aboutMe').value = ''
	}

	return (
		<>
			<div className="sides-container">
				<form>
					<fieldset>
						<legend>About you</legend>
						<div className="input-main-container">
							<div className="input-container">
								<label htmlFor="aboutMeInput">About Me</label>
								<textarea id="aboutMe" name="aboutMeTextArea"></textarea>
							</div>
							<button
								id="aboutMeSubmitButton"
								type="submit"
								onClick={onSubmitAboutMe}
							>
								Add About Me
							</button>
						</div>
					</fieldset>
				</form>
				<div className="info-display">
					<DisplayAboutMe aboutMeText={aboutMeText} />
				</div>
			</div>
		</>
	)
}
