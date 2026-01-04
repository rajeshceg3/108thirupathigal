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
    // Updated test to match the full name in the locations data
    expect(screen.getByText('Ranganathaswamy Temple, Srirangam')).toBeInTheDocument()
  })
})
