export default function DisplayAboutMe(props) {
	const { aboutMeArr } = props

	return (
		<ul>
			{aboutMeArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
