// ProjectCard component — displays a single project's details
// Receives project object and onDelete function as props from ProjectList

function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      {/* Delete button — calls onDelete with this project's id */}
      <button className="delete-btn" onClick={() => onDelete(project.id)}>
        X
      </button>

      {/* Project details */}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard