import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { BackgroundPattern } from './background-pattern';

test('renders the component with correct structure and attributes', () => {
  const { container } = render(<BackgroundPattern />);

  const sources = container.querySelectorAll('source');
  expect(sources).toHaveLength(2);

  const [mobileSource, desktopSource] = sources;
  expect(mobileSource).toHaveAttribute('media', '(max-width: 640px)');
  expect(desktopSource).toHaveAttribute('media', '(min-width: 641px)');

  const image = container.querySelector('img');
  expect(image).toBeInTheDocument();
});
