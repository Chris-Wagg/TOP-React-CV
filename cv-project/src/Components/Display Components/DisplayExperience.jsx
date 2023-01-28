export default function DisplayExperience(props) {
	const { startDateArr, endDateArr, roleArr, aboutRoleArr } = props

	return (
		<div className="info-container">
			<div className="start-date">
				{startDateArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
			<div className="end-date">
				{endDateArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
			<div className="role-name">
				{roleArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
			<div className="role-description">
				{aboutRoleArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
		</div>
	)
}
