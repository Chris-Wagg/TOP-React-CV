import React, { useState } from 'react'
import DisplayProjects from './Display Components/DisplayProjects'

export default function AddProjects() {
	const [projectName, setProjectName] = useState('')
	const [projectURL, setProjectURL] = useState('')
	const [projectAbout, setProjectAbout] = useState('')

	const onSubmitProject = (e) => {
		e.preventDefault()
		setProjectName(document.getElementById('projectName').value)
		document.getElementById('projectName').value = ''

		setProjectURL(document.getElementById('projectUrl').value)
		document.getElementById('projectUrl').value = ''

		setProjectAbout(document.getElementById('projectAbout').value)
		document.getElementById('projectAbout').value = ''
	}
	return (
		<>
			<div className="sides-container">
				<form>
					<fieldset>
						<legend>Projects</legend>
						<div className="input-main-container">
							<div className="input-container">
								<label htmlFor="aboutMeInput">Project Name</label>
								<input type="text" id="projectName" />
							</div>
							<div className="input-container">
								<label htmlFor="aboutMeInput">Project Link</label>
								<input type="url" id="projectUrl" />
							</div>
							<div className="input-container">
								<label htmlFor="aboutMeInput">Project info</label>
								<textarea
									type="text"
									id="projectAbout"
									name="projectAboutText"
								></textarea>
							</div>
							<button type="submit" onClick={onSubmitProject}>
								Add Project
							</button>
						</div>
					</fieldset>
				</form>
				<div className="info-display">
					<DisplayProjects
						projectNameText={projectName}
						projectURLText={projectURL}
						projectAboutText={projectAbout}
					/>
				</div>
			</div>
		</>
	)
}
