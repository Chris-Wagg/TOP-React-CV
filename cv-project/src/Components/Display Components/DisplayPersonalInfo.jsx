export default function DisplayPersonalInfo(props) {
	const { nameArr, phoneNumArr, emailArr } = props

	return (
		<div className="info-container">
			<div className="name">
				{/* Chris Wagg */}
				{nameArr.map((e) => {
					return <li key={e.id}>{e.text}</li>
				})}
			</div>
			<div className="contact-info">
				<div className="phone-number">
					{/* phone: 1234567890 */}
					{phoneNumArr.map((e) => {
						return <li key={e.id}>{e.text}phone: </li>
					})}
				</div>
				<div className="email">
					{/* email: thisEmail@email.com */}
					{emailArr.map((e) => {
						return <li key={e.id}>{e.text}email: </li>
					})}
				</div>
			</div>
		</div>
	)
}
