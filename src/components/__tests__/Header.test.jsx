// Tests for the Header component
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  test('renders the app title', () => {
    render(<Header />)
    expect(screen.getByText('Personal Project Showcase')).toBeInTheDocument()
  })
})