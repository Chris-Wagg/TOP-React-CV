export default function DisplayLastName(props) {
	const { lastNameArr } = props

	return (
		<ul>
			{lastNameArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
