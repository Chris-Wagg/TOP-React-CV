import React, { useState } from 'react'

import DisplayExperience from './Display Components/DisplayExperience'

export default function AddExperience() {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [role, setRole] = useState('')
	const [aboutRole, setAboutRole] = useState('')

	const onSubmitExperience = (e) => {
		e.preventDefault()
		setStartDate(document.getElementById('startDateInput').value)
		document.getElementById('startDateInput').value = ''
		setEndDate(document.getElementById('endDateInput').value)
		document.getElementById('endDateInput').value = ''
		setRole(document.getElementById('roleInput').value)
		document.getElementById('roleInput').value = ''
		setAboutRole(document.getElementById('aboutRoleInput').value)
		document.getElementById('aboutRoleInput').value = ''
	}

	return (
		<>
			<div className="sides-container">
				<form>
					<fieldset>
						<legend>Experience</legend>

						<div className="input-main-container">
							<div className="input-container">
								<label htmlFor="startDateInput">Start Date</label>
								<input type="month" id="startDateInput" />
							</div>
							<div className="input-container">
								<label htmlFor="endDateInput">End Date</label>
								<input type="month" id="endDateInput" />
							</div>
							<div className="input-container">
								<label htmlFor="roleInput">Role</label>
								<input type="text" id="roleInput" />
							</div>
							<div className="input-container">
								<label htmlFor="aboutRoleInput">About role</label>
								<textarea id="aboutRoleInput" name="aboutRoleInput"></textarea>
							</div>
							<button type="submit" onClick={onSubmitExperience}>
								Add Info
							</button>
						</div>
					</fieldset>
				</form>
				<div className="info-display">
					<DisplayExperience
						startDate={startDate}
						endDate={endDate}
						role={role}
						aboutRole={aboutRole}
					/>
				</div>
			</div>
		</>
	)
}
