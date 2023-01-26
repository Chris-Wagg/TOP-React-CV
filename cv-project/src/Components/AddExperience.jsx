import React, { Component } from 'react'
import uniqid from 'uniqid'

import DisplayExperience from './Display Components/DisplayExperience'

class AddExperience extends Component {
	constructor() {
		super()
		this.state = {
			startDate: { text: '', id: uniqid() },
			startDateArr: [],
			endDate: { text: '', id: uniqid() },
			endDateArr: [],
			role: { text: '', id: uniqid() },
			roleArr: [],
			aboutRole: { text: '', id: uniqid() },
			aboutRoleArr: [],
		}
	}

	handleChangeStartDate = (e) => {
		this.setState({
			startDate: {
				text: e.target.value,
				id: this.state.startDate.id,
			},
		})
	}
	handleChangeEndDate = (e) => {
		this.setState({
			endDate: {
				text: e.target.value,
				id: this.state.endDate.id,
			},
		})
	}
	handleChangeRole = (e) => {
		this.setState({
			role: {
				text: e.target.value,
				id: this.state.role.id,
			},
		})
	}
	handleChangeAboutRole = (e) => {
		this.setState({
			aboutRole: {
				text: e.target.value,
				id: this.state.aboutRole.id,
			},
		})
	}

	onSubmitExperience = (e) => {
		e.preventDefault()
		this.setState({
			startDateArr: this.state.startDateArr.concat(this.state.startDate),
			startDate: { text: '', id: uniqid() },
			endDateArr: this.state.endDateArr.concat(this.state.endDate),
			endDate: { text: '', id: uniqid() },
			roleArr: this.state.roleArr.concat(this.state.role),
			role: { text: '', id: uniqid() },
			aboutRoleArr: this.state.aboutRoleArr.concat(this.state.aboutRole),
			aboutRole: { text: '', id: uniqid() },
		})
	}

	render() {
		const {
			startDate,
			startDateArr,
			endDate,
			endDateArr,
			role,
			roleArr,
			aboutRole,
			aboutRoleArr,
		} = this.state
		return (
			<>
				<div>
					<form>
						<label htmlFor="startDateInput">Start Date</label>
						<input
							onChange={this.handleChangeStartDate}
							type="date"
							id="startDateInput"
							value={startDate.text}
						/>
						{/* ------------------------------------------ */}
						<label htmlFor="endDateInput">End Date</label>
						<input
							onChange={this.handleChangeEndDate}
							type="date"
							id="endDateInput"
							value={endDate.text}
						/>
						{/* ------------------------------------------ */}
						<label htmlFor="roleInput">Role</label>
						<input
							onChange={this.handleChangeRole}
							type="text"
							id="roleInput"
							value={role.text}
						/>
						{/* ------------------------------------------ */}
						<label htmlFor="aboutRoleInput">About role</label>
						<textarea
							onChange={this.handleChangeAboutRole}
							id="aboutRoleInput"
							value={aboutRole.text}
							name="aboutRoleInput"
						></textarea>
						{/* ------------------------------------------ */}
						<button type="submit" onClick={this.onSubmitExperience}>
							Add Info
						</button>
					</form>
					<DisplayExperience
						startDateArr={startDateArr}
						endDateArr={endDateArr}
						roleArr={roleArr}
						aboutRoleArr={aboutRoleArr}
					/>
				</div>
			</>
		)
	}
}

export default AddExperience
