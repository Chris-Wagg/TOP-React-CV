export default function DisplayAboutMe(props) {
	const { aboutMeArr } = props

	return (
		<div className="about-me-container">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor
			eu tortor sit amet suscipit. Fusce a tellus vitae quam convallis porttitor
			at porttitor purus. Aenean eu tincidunt ex. Maecenas sagittis arcu dui.
			Nulla tincidunt tristique sodales. Aliquam id vehicula dui, non lobortis
			magna. Praesent lobortis auctor elit ut mollis. Etiam ultricies mattis
			consectetur. Ut ac lacinia odio. Duis cursus tempus tortor. Etiam eu
			facilisis eros, et molestie tortor.
			{aboutMeArr.map((e) => {
				return <li key={e.id}>{e.text}</li>
			})}
		</div>
	)
}
