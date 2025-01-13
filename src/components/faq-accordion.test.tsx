import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { FAQAccordion } from './faq-accordion';

const mockFaqs = [
  {
    id: 1,
    question: 'What is your return policy?',
    answer: '30-day money-back guarantee',
  },
  {
    id: 2,
    question: 'How do I track my order?',
    answer: 'You can track your order in your account dashboard',
  },
];

describe('FAQAccordion', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders the component with correct structure and attributes', () => {
    render(<FAQAccordion faqs={mockFaqs} />);

    expect(screen.getByRole('heading', { name: /faqs/i })).toBeInTheDocument();

    mockFaqs.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
  });

  it('expands and collapses accordion items on click', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion faqs={mockFaqs} />);

    const firstAnswer = screen.getByRole('button', { name: mockFaqs[0].question });
    const secondAnswer = screen.getByRole('button', { name: mockFaqs[1].question });

    expect(firstAnswer).toHaveAttribute('data-state', 'open');
    expect(secondAnswer).toHaveAttribute('data-state', 'closed');

    await user.click(secondAnswer);
    expect(firstAnswer).toHaveAttribute('data-state', 'closed');
    expect(secondAnswer).toHaveAttribute('data-state', 'open');
  });
});
