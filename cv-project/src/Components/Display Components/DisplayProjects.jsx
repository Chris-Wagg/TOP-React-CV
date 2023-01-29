export default function DisplayProjects(props) {
	const { projectArr, projectURLArr, aboutProjectArr } = props

	return (
		<div className="info-container">
			<div className="project-name">
				{projectArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
			<div className="project-url">
				{projectURLArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
			<div className="about-project">
				{aboutProjectArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
		</div>
	)
}
