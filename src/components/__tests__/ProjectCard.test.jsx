// Tests for the ProjectCard component
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

// Mock project data for testing
const mockProject = {
  id: 1,
  title: 'Test Project',
  description: 'Test description',
}

describe('ProjectCard', () => {
  test('renders project title and description', () => {
    render(<ProjectCard project={mockProject} onDelete={() => {}} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  test('calls onDelete with correct id when X is clicked', () => {
    const mockDelete = jest.fn()
    render(<ProjectCard project={mockProject} onDelete={mockDelete} />)
    fireEvent.click(screen.getByText('X'))
    expect(mockDelete).toHaveBeenCalledWith(1)
  })
})