import React, { Component } from 'react'
import uniqid from 'uniqid'

import DisplayFirstName from './InfoDisplays/DisplayFirstName'
import DisplayLastName from './InfoDisplays/DisplayLastName'

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

	handleChangeLastName = (e) => {
		this.setState({
			lastName: {
				text: e.target.value,
				id: this.state.lastName.id,
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
		})
		this.setState({
			lastNameArr: this.state.lastNameArr.concat(this.state.lastName),
			lastName: { text: '', id: uniqid() },
		})
		this.setState({
			phoneNumArr: this.state.phoneNumArr.concat(this.state.phoneNum),
			phoneNum: { text: '', id: uniqid() },
		})
		this.setState({
			emailArr: this.state.emailArr.concat(this.state.email),
			email: { text: '', id: uniqid() },
		})
	}

	render() {
		const {
			firstName,
			firstNameArr,
			lastName,
			lastNameArr,
			email,
			emailArr,
			phoneNum,
			phoneNumArr,
		} = this.state
		return (
			<>
				<div>
					<form>
						<label htmlFor="firstNameInput">First Name</label>
						<input
							onChange={this.handleChangeFirstName}
							type="text"
							id="firstNameInput"
							value={firstName.text}
						/>
						{/* <button type="submit" onClick={this.onSubmitFirstName}>
							Add First Name
						</button> */}

						{/* ------------------------------------------ */}

						<label htmlFor="lastNameInput">Last Name</label>
						<input
							onChange={this.handleChangeLastName}
							type="text"
							id="lastNameInput"
							value={lastName.text}
						/>
						<button type="submit" onClick={this.onSubmitAllInfo}>
							Add Info
						</button>
					</form>
					<DisplayFirstName firstNameArr={firstNameArr} />
					<DisplayLastName lastNameArr={lastNameArr} />
				</div>
			</>
		)
	}
}

export default AddPersonalInfo
