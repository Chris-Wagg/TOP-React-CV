export default function DisplayExperience(props) {
	const { startDateArr, endDateArr, roleArr, aboutRoleArr } = props

	return (
		<ul>
			{startDateArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
			{endDateArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
			{roleArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
			{aboutRoleArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</ul>
	)
}
