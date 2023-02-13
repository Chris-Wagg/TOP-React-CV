import React, { useState } from 'react'

import DisplaySkills from './Display Components/DisplaySkills'

export default function AddSkills() {
	const [skillsText, setSkillsText] = useState('')

	const onSubmitSkills = (e) => {
		e.preventDefault()
		setSkillsText(document.getElementById('skills').value)
		document.getElementById('skills').value = ''
	}
	return (
		<>
			<div className="sides-container">
				<form>
					<fieldset>
						<legend>Skills</legend>
						<div className="input-main-container">
							<div className="input-container">
								<label htmlFor="skillsInput">Skills</label>
								<input id="skills" name="skillsinput" />
							</div>
							<button type="submit" onClick={onSubmitSkills}>
								Add Skills
							</button>
						</div>
					</fieldset>
				</form>
				<div className="info-display">
					<DisplaySkills skillsText={skillsText} />
				</div>
			</div>
		</>
	)
}
