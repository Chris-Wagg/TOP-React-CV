import React, { useState } from 'react'

import DisplayPersonalInfo from './Display Components/DisplayPersonalInfo'

export default function AddPersonalInfo() {
	const [nameText, setNameText] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')

	const onSubmitAllInfo = (e) => {
		e.preventDefault()
		setNameText(document.getElementById('nameInput').value)
		document.getElementById('nameInput').value = ''
		setPhone(document.getElementById('phoneNumInput').value)
		document.getElementById('phoneNumInput').value = ''
		setEmail(document.getElementById('emailInput').value)
		document.getElementById('emailInput').value = ''
	}

	return (
		<>
			<div className="sides-container">
				<form>
					<fieldset>
						<legend>Personal Info</legend>
						<div className="input-main-container">
							<div className="input-container">
								<label htmlFor="nameInput">Name</label>
								<input type="text" id="nameInput" />
							</div>

							<div className="input-container">
								<label htmlFor="phoneNumInput">Phone</label>
								<input type="tel" id="phoneNumInput" />
							</div>

							<div className="input-container">
								<label htmlFor="lastNameInput">Email</label>
								<input type="email" id="emailInput" />
							</div>

							<button type="submit" onClick={onSubmitAllInfo}>
								Add Info
							</button>
						</div>
					</fieldset>
				</form>
				<div className="info-display">
					<DisplayPersonalInfo
						nameText={nameText}
						phone={phone}
						email={email}
					/>
				</div>
			</div>
		</>
	)
}
