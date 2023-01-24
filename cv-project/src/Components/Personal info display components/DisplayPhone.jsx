export default function DisplayPhone(props) {
	const { phoneNumArr } = props

	return (
		<ul>
			{phoneNumArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
