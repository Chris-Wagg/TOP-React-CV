import React from 'react'
import AddPersonalInfo from './Components/AddPersonalInfo'
import AddAboutMe from './Components/AddAboutMe'
import AddExperience from './Components/AddExperience'
import AddSkills from './Components/AddSkills'
import AddProjects from './Components/AddProjects'

export default function App() {
	return (
		<>
			<div className="main-container">
				<AddPersonalInfo />
				<AddAboutMe />
				<AddExperience />
				<AddSkills />
				<AddProjects />
			</div>
		</>
	)
}
