export default function DisplayFirstName(props) {
	const { firstNameArr, lastNameArr, phoneNumArr, emailArr } = props

	return (
		<ul>
			{firstNameArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
			{lastNameArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
			{phoneNumArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
			{emailArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
