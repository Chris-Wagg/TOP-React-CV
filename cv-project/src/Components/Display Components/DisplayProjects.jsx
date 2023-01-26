export default function DisplayProjects(props) {
	const { projectArr, projectURLArr, aboutProjectArr } = props

	return (
		<ul>
			{projectArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
			{projectURLArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
			{aboutProjectArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
