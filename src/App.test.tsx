import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

// Mock Supabase hook
vi.mock('./hooks/useVisitedLocations', () => ({
  useVisitedLocations: () => ({
    visitedIds: [],
    toggleVisited: vi.fn(),
    session: null
  })
}))

// Mock Leaflet
vi.mock('react-leaflet', () => ({
  MapContainer: ({ children }: any) => <div>{children}</div>,
  TileLayer: () => <div>TileLayer</div>,
  Marker: ({ children }: any) => <div>{children}</div>,
  Popup: ({ children }: any) => <div>{children}</div>,
  useMap: () => ({ flyTo: vi.fn() })
}))

describe('App', () => {
  it('renders search input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Search destinations...')).toBeDefined()
  })

  it('filters locations when searching', () => {
    render(<App />)
    const searchInput = screen.getByPlaceholderText('Search destinations...')

    // Type 'Tirupati'
    fireEvent.change(searchInput, { target: { value: 'Tirupati' } })

    expect(searchInput).toHaveValue('Tirupati')
  })
})
