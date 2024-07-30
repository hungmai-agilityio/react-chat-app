import { memberInfo } from '@/mocks';
import { fireEvent, render, screen } from '@testing-library/react';
import ModalInfo from '..';

const defaultProps = {
  member: memberInfo,
  avatar: 'assets/images/mock-image.jpg',
  name: 'Bob',
  count: 3,
  currentUserId: '701796f0-0253-11ef-804b-d90ac4375227'
};
const onClickMock = jest.fn();

describe('ModalInfo', () => {
  it('renders correctly with default props', () => {
    render(<ModalInfo {...defaultProps} />);

    expect(screen.getByText('Members (3)')).toBeInTheDocument();
    memberInfo.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });
  });

  it('renders correctly with click event', () => {
    const { getByText } = render(
      <ModalInfo {...defaultProps} isGroup onClick={onClickMock} />
    );

    const buttonElement = getByText('Leave chat');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});

it('should render match to snapshot', () => {
  const { container } = render(<ModalInfo {...defaultProps} />);
  expect(container).toMatchSnapshot();
});
