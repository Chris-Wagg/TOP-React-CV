export default function DisplayProjects(props) {
	return (
		<div className="info-container">
			<div className="project-name">{<div>{props.projectNameText}</div>}</div>
			<div className="project-url">{<div>{props.projectURLText}</div>}</div>
			<div className="about-project">{<div>{props.projectAboutText}</div>}</div>
		</div>
	)
}
