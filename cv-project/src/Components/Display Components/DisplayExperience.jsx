export default function DisplayExperience(props) {
	return (
		<div className="info-container">
			<div className="start-date">{<li>{props.startDate}</li>}</div>
			<div className="end-date">{<li>{props.endDate}</li>}</div>
			<div className="role-name">{<li>{props.role}</li>}</div>
			<div className="role-description">{<li>{props.aboutRole}</li>}</div>
		</div>
	)
}
