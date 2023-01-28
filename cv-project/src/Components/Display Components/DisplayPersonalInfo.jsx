export default function DisplayPersonalInfo(props) {
	const { firstNameArr, phoneNumArr, emailArr } = props

	return (
		<div className="info-container">
			<div className="name">
				{firstNameArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
			<div className="contact-info">
				<div className="phone-number">
					{phoneNumArr.map((e) => {
						return <li key={e.id}>{e.text}</li>
					})}
				</div>
				<div className="email">
					{emailArr.map((e) => {
						return <li key={e.id}>{e.text}</li>
					})}
				</div>
			</div>
		</div>
	)
}
