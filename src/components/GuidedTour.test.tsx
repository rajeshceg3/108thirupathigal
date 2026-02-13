import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GuidedTour } from './GuidedTour';

// Mock scrollIntoView since it's not available in jsdom
Element.prototype.scrollIntoView = vi.fn();

describe('GuidedTour', () => {
  it('renders nothing when closed', () => {
    const { container } = render(
      <GuidedTour
        steps={[{ title: 'Test', content: 'Test Content' }]}
        isOpen={false}
        onClose={() => {}}
        currentStep={0}
        onStepChange={() => {}}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('handles empty steps array gracefully', () => {
    // This test verifies the fix for the potential runtime crash
    // If the component crashes, the test will fail
    render(
      <GuidedTour
        steps={[]}
        isOpen={true}
        onClose={() => {}}
        currentStep={0}
        onStepChange={() => {}}
      />
    );

    // If we reach here, it didn't crash on render.
    // Ideally it should return null or handle it, so let's check it's empty or doesn't throw.
    // Since we expect it to return null for empty steps (after fix), we can check for empty container.
    // But BEFORE the fix, it might crash.
  });

  it('renders correct step content', () => {
    const steps = [{ title: 'Step 1', content: 'Content 1' }];
    render(
      <GuidedTour
        steps={steps}
        isOpen={true}
        onClose={() => {}}
        currentStep={0}
        onStepChange={() => {}}
      />
    );
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
