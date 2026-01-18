import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LocationCard } from './LocationCard';
import { Location } from '../data/locations';

// Mock Lucide icons to avoid rendering issues in tests
vi.mock('lucide-react', () => ({
  ChevronRight: () => <span data-testid="chevron-right" />,
  MapPin: () => <span data-testid="map-pin" />,
  CheckCircle2: () => <span data-testid="check-circle" />,
  ImageOff: () => <span data-testid="image-off" />,
}));

const mockLocation: Location = {
  id: 1,
  name: 'Test Temple',
  description: 'A test description',
  lat: 10.0,
  lng: 80.0,
  image: 'https://example.com/image.jpg',
  tags: ['Temple']
};

describe('LocationCard', () => {
  it('renders location details correctly', () => {
    render(
      <LocationCard
        loc={mockLocation}
        isSelected={false}
        onSelect={vi.fn()}
      />
    );

    expect(screen.getByText('Test Temple')).toBeDefined();
    expect(screen.getByText('A test description')).toBeDefined();
    expect(screen.getByText('10.00, 80.00')).toBeDefined();
  });

  it('calls onSelect when clicked', () => {
    const handleSelect = vi.fn();
    render(
      <LocationCard
        loc={mockLocation}
        isSelected={false}
        onSelect={handleSelect}
      />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleSelect).toHaveBeenCalledWith(1);
  });

  it('calls onSelect when Enter key is pressed', () => {
    const handleSelect = vi.fn();
    render(
      <LocationCard
        loc={mockLocation}
        isSelected={false}
        onSelect={handleSelect}
      />
    );

    const card = screen.getByRole('button');
    card.focus();
    fireEvent.keyDown(card, { key: 'Enter', code: 'Enter' });
    expect(handleSelect).toHaveBeenCalledWith(1);
  });

  it('renders visited toggle button when showVisitedToggle is true', () => {
    render(
      <LocationCard
        loc={mockLocation}
        isSelected={false}
        onSelect={vi.fn()}
        showVisitedToggle={true}
        onToggleVisited={vi.fn()}
        isVisited={false}
      />
    );

    expect(screen.getByTitle('Mark as visited')).toBeDefined();
  });

  it('calls onToggleVisited when toggle button is clicked', () => {
    const handleToggle = vi.fn();
    render(
      <LocationCard
        loc={mockLocation}
        isSelected={false}
        onSelect={vi.fn()} // Should NOT be called
        showVisitedToggle={true}
        onToggleVisited={handleToggle}
        isVisited={false}
      />
    );

    const toggleBtn = screen.getByTitle('Mark as visited');
    fireEvent.click(toggleBtn);

    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  it('does not propagate click from toggle button to card', () => {
    const handleSelect = vi.fn();
    const handleToggle = vi.fn();
    render(
      <LocationCard
        loc={mockLocation}
        isSelected={false}
        onSelect={handleSelect}
        showVisitedToggle={true}
        onToggleVisited={handleToggle}
        isVisited={false}
      />
    );

    const toggleBtn = screen.getByTitle('Mark as visited');
    fireEvent.click(toggleBtn);

    expect(handleToggle).toHaveBeenCalled();
    expect(handleSelect).not.toHaveBeenCalled();
  });
});
