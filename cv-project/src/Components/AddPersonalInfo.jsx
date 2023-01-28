import React, { Component } from 'react'
import uniqid from 'uniqid'

import DisplayFirstName from './Display Components/DisplayPersonalInfo'

class AddPersonalInfo extends Component {
	constructor() {
		super()
		this.state = {
			firstName: { text: '', id: uniqid() },
			firstNameArr: [],
			lastName: { text: '', id: uniqid() },
			lastNameArr: [],
			phoneNum: { text: '', id: uniqid() },
			phoneNumArr: [],
			email: { text: '', id: uniqid() },
			emailArr: [],
		}
	}

	handleChangeFirstName = (e) => {
		this.setState({
			firstName: {
				text: e.target.value,
				id: this.state.firstName.id,
			},
		})
	}

	handleChangePhone = (e) => {
		this.setState({
			phoneNum: {
				text: e.target.value,
				id: this.state.phoneNum.id,
			},
		})
	}
	handleChangeEmail = (e) => {
		this.setState({
			email: {
				text: e.target.value,
				id: this.state.email.id,
			},
		})
	}

	onSubmitAllInfo = (e) => {
		e.preventDefault()
		this.setState({
			firstNameArr: this.state.firstNameArr.concat(this.state.firstName),
			firstName: { text: '', id: uniqid() },

			phoneNumArr: this.state.phoneNumArr.concat(this.state.phoneNum),
			phoneNum: { text: '', id: uniqid() },
			emailArr: this.state.emailArr.concat(this.state.email),
			email: { text: '', id: uniqid() },
		})
	}

	render() {
		const {
			firstName,
			firstNameArr,

			email,
			emailArr,
			phoneNum,
			phoneNumArr,
		} = this.state
		return (
			<>
				<div className="sides-container">
					<form>
						<fieldset>
							<legend>Personal Info</legend>
							<div className="input-main-container">
								<div className="input-container">
									<label htmlFor="firstNameInput">First Name</label>
									<input
										onChange={this.handleChangeFirstName}
										type="text"
										id="firstNameInput"
										value={firstName.text}
									/>
								</div>

								<div className="input-container">
									<label htmlFor="phoneNumInput">Phone</label>
									<input
										onChange={this.handleChangePhone}
										type="tel"
										id="phoneNumInput"
										value={phoneNum.text}
									/>
								</div>

								<div className="input-container">
									<label htmlFor="lastNameInput">Email</label>
									<input
										onChange={this.handleChangeEmail}
										type="email"
										id="emailInput"
										value={email.text}
									/>
								</div>

								<button type="submit" onClick={this.onSubmitAllInfo}>
									Add Info
								</button>
							</div>
						</fieldset>
					</form>
					<div className="info-display">
						<DisplayFirstName
							firstNameArr={firstNameArr}
							phoneNumArr={phoneNumArr}
							emailArr={emailArr}
						/>
					</div>
				</div>
			</>
		)
	}
}

export default AddPersonalInfo
