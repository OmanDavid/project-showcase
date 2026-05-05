// ProjectForm component — handles adding new projects
// Receives onAdd prop (function) from App to update projects state

import { useState } from 'react'

function ProjectForm({ onAdd }) {
  // Local state for controlled inputs
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Handles form submission — creates a new project object and passes it up
  function handleSubmit(e) {
    e.preventDefault()

    // Guard against empty submissions
    if (!title.trim()) return

    // Build the new project object
    const newProject = {
      id: Date.now(), // simple unique id
      title,
      description,
    }

    onAdd(newProject) // lift state up to App

    // Reset fields after submission
    setTitle('')
    setDescription('')
  }

  return (
    <section className="project-form">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        {/* Title input */}
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project title"
        />

        {/* Description textarea */}
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project description"
        />

        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default ProjectForm