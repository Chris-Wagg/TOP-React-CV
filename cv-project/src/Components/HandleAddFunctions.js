function handleChangeFirstName(e) {
	this.setState({
		firstName: {
			text: e.target.value,
			id: this.state.firstName.id,
		},
	})
}
function handleChangeLastName(e) {
	this.setState({
		lastName: {
			text: e.target.value,
			id: this.state.lastName.id,
		},
	})
}

export { handleChangeFirstName, handleChangeLastName }
