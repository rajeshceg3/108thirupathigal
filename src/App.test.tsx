import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders status message', () => {
    render(<App />)
    expect(screen.getByText('Status: Recovery Mode')).toBeInTheDocument()
    expect(screen.getByText('108 Thirupathigal')).toBeInTheDocument()
  })
})