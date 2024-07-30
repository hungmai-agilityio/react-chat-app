import { render, screen } from '@testing-library/react';

// Components
import Divider from '@/components/Divider';

describe('Divider', () => {
  it('render Divider children', () => {
    render(<Divider children="Test" />);

    const childrenProp = screen.getByText('Test');
    expect(childrenProp).toBeInTheDocument();
  });
});

it('should render match to snapshot', () => {
  const { container } = render(<Divider children="Test" />);

  expect(container).toMatchSnapshot();
});
