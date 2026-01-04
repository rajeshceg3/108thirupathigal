import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders search input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Search locations...')).toBeInTheDocument()
  })

  it('renders list items', () => {
    render(<App />)
    // We updated the data generation, so "Thirupathi 1" might be "Thirupathi 6" now because of the base locations.
    // Let's check for one of the base locations.
    expect(screen.getByText('Srirangam')).toBeInTheDocument()
  })
})
