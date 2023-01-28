export default function DisplaySkills(props) {
	const { skillsArr } = props

	return (
		<div className="info-container">
			<div className="skill-item">
				skill
				<ul>
					{skillsArr.map((e) => {
						return <li key={e.id}>{e.text}</li>
					})}
				</ul>
			</div>
		</div>
	)
}
