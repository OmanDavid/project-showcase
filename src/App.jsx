// App component — root component, manages global state
// Passes state and handlers down to child components as props

import { useState } from 'react'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

function App() {
  // State for the full list of projects
  const [projects, setProjects] = useState([
    // Seed data so the list isn't empty on load
    { id: 1, title: 'Project 1', description: 'Description of the project' },
    { id: 2, title: 'Project 2', description: 'Description of the project' },
    { id: 3, title: 'Project 3', description: 'Description of the project' },
  ])

  // State for the search input
  const [searchTerm, setSearchTerm] = useState('')

  // Adds a new project to the list
  function handleAdd(newProject) {
    setProjects([...projects, newProject])
  }

  // Removes a project by its id
  function handleDelete(id) {
    setProjects(projects.filter((project) => project.id !== id))
  }

  // Filters projects based on the search term (case-insensitive)
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <Header />

      {/* Form for adding new projects */}
      <ProjectForm onAdd={handleAdd} />

      {/* List of projects with search */}
      <ProjectList
        projects={filteredProjects}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App