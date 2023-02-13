export default function DisplaySkills(props) {
	return (
		<div className="info-container">
			<div className="skill-item">
				<ul>{<li>{props.skillsText}</li>}</ul>
			</div>
		</div>
	)
}
