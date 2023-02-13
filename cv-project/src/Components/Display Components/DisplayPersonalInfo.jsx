export default function DisplayPersonalInfo(props) {
	return (
		<div className="info-container">
			<div className="name">{<div>{props.nameText}</div>}</div>
			<div className="contact-info">
				<div className="phone-number">{<div>phone: {props.phone} </div>}</div>
				<div className="email">{<div>email: {props.email} </div>}</div>
			</div>
		</div>
	)
}
