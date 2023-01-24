import React from 'react'

function DisplayLastName(props) {
	const { lastNameArr } = props

	return (
		<ul>
			{lastNameArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
function DisplayPhone(props) {
	const { phoneNumArr } = props

	return (
		<ul>
			{phoneNumArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
function DisplayEmail(props) {
	const { emailArr } = props

	return (
		<ul>
			{emailArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}

export { DisplayLastName, DisplayPhone, DisplayEmail }
