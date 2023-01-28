import React from 'react'
import AddPersonalInfo from './Components/AddPersonalInfo'
import AddAboutMe from './Components/AddAboutMe'
import AddExperience from './Components/AddExperience'
import AddSkills from './Components/AddSkills'
import AddProjects from './Components/AddProjects'
import DisplayAboutMe from './Components/Display Components/DisplayAboutMe'
import DisplayExperience from './Components/Display Components/DisplayExperience'
import DisplayPersonalInfo from './Components/Display Components/DisplayPersonalInfo'
import DisplayProjects from './Components/Display Components/DisplayProjects'
import DisplaySkills from './Components/Display Components/DisplaySkills'

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
