export default function DisplaySkills(props) {
	const { skillsArr } = props

	return (
		<ul>
			{skillsArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
