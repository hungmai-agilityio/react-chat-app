import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Icon from '@/components/Button/Icon';

// FontAwesome
import { faEdit } from '@fortawesome/free-solid-svg-icons';

describe('Icon Component', () => {
  const onClickMock = jest.fn();

  it('renders default Icon', () => {
    const { container } = render(<Icon onClick={onClickMock} icon={faEdit} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const { container } = render(<Icon icon={faEdit} onClick={onClickMock} />);

    fireEvent.click(container.firstChild!);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should render match to snapshot', () => {
    const { container } = render(<Icon onClick={onClickMock} icon={faEdit} />);
    expect(container).toMatchSnapshot();
  });
});
