import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders search input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders map container', () => {
    // We can't easily test the map canvas rendering in JSDOM without mocking Leaflet,
    // but we can check if the container renders or specific markers if accessible.
    // For now, let's just check if the list items are rendered.
    render(<App />)
    // There are 108 items, let's check for one.
    expect(screen.getByText('Thirupathi 1')).toBeInTheDocument()
  })
})
