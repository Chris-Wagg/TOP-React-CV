export default function DisplayFirstName(props) {
	const { firstNameArr } = props

	return (
		<ul>
			{firstNameArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
