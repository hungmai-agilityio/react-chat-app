import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Chip from '@/components/Chip';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

describe('Chip', () => {
  it('render Chip component with default props', () => {
    render(<Chip>June, 04 2024</Chip>);

    const element = screen.getByText('June, 04 2024');
    expect(element).toBeInTheDocument();
  });

  it('render Chip component with icon', () => {
    const { container } = render(<Chip icon={faCheck}>Check</Chip>);

    const svgElement = container.querySelector('.fa-check');
    expect(svgElement).toBeInTheDocument();
  });

  it('render Chip component with custom', () => {
    const props = {
      children: 'Delete',
      icon: faTrash,
      styles: 'text-white bg-red-400',
      onClick: jest.fn()
    };
    const { container } = render(<Chip {...props} />);

    const svgElement = container.querySelector('.fa-trash');
    expect(svgElement).toBeInTheDocument();

    const element = screen.getByText('Delete');

    fireEvent.click(element);
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should render match to snapshot', () => {
    const { container } = render(<Chip>June, 04 2024</Chip>);
    expect(container).toMatchSnapshot();
  });
});
