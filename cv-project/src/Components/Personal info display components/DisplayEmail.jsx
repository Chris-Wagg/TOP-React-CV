export default function DisplayEmail(props) {
	const { emailArr } = props

	return (
		<ul>
			{emailArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
