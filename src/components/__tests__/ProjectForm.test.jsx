// Tests for the ProjectForm component
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectForm from '../ProjectForm'

describe('ProjectForm', () => {
  test('renders title and description inputs', () => {
    render(<ProjectForm onAdd={() => {}} />)
    expect(screen.getByPlaceholderText('Project title')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Project description')).toBeInTheDocument()
  })

  test('calls onAdd with new project when form is submitted', () => {
    const mockAdd = jest.fn()
    render(<ProjectForm onAdd={mockAdd} />)

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('Project title'), {
      target: { value: 'My Project' },
    })
    fireEvent.change(screen.getByPlaceholderText('Project description'), {
      target: { value: 'My Description' },
    })

    // Submit the form
    fireEvent.click(screen.getByText('Add'))

    // onAdd should have been called with the new project
    expect(mockAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'My Project',
        description: 'My Description',
      })
    )
  })

  test('does not call onAdd if title is empty', () => {
    const mockAdd = jest.fn()
    render(<ProjectForm onAdd={mockAdd} />)
    fireEvent.click(screen.getByText('Add'))
    expect(mockAdd).not.toHaveBeenCalled()
  })
})