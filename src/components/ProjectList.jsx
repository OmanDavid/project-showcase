// ProjectList component — displays the search bar and all project cards
// Receives projects array, searchTerm, onSearch, and onDelete as props from App

import ProjectCard from './ProjectCard'

function ProjectList({ projects, searchTerm, onSearch, onDelete }) {
  return (
    <section className="project-list">
      {/* Search bar — filters projects dynamically as user types */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />

      {/* Map over filtered projects and render a card for each */}
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
        />
      ))}

      {/* Show a message if no projects match the search */}
      {projects.length === 0 && (
        <p className="no-results">No projects found.</p>
      )}
    </section>
  )
}

export default ProjectList