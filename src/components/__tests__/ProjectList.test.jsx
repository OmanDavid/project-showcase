// Tests for the ProjectList component
import { render, screen } from '@testing-library/react'
import ProjectList from '../ProjectList'

// Mock project data
const mockProjects = [
  { id: 1, title: 'Alpha', description: 'First project' },
  { id: 2, title: 'Beta', description: 'Second project' },
]

describe('ProjectList', () => {
  test('renders all projects', () => {
    render(
      <ProjectList
        projects={mockProjects}
        searchTerm=""
        onSearch={() => {}}
        onDelete={() => {}}
      />
    )
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
  })

  test('shows no results message when projects list is empty', () => {
    render(
      <ProjectList
        projects={[]}
        searchTerm="xyz"
        onSearch={() => {}}
        onDelete={() => {}}
      />
    )
    expect(screen.getByText('No projects found.')).toBeInTheDocument()
  })
})