import { fireEvent, render, screen } from '@testing-library/react';

// Mock data
import { mockMessage } from '@/mocks';

// Components
import { Message } from '@/components/Message';

describe('Message Component', () => {
  const defaultProps = {
    item: mockMessage,
    avatar: '',
    name: 'John Doe',
    isActive: true
  };

  it('renders UI for a member', () => {
    const { container } = render(
      <Message {...defaultProps} isCurrentUser={false} />
    );

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('24.04.2024')).toBeInTheDocument();

    const iconDropdown = container.querySelector('.fa-ellipsis-vertical');
    expect(iconDropdown).toBeNull();
  });

  it('renders UI for a user with dropdown', () => {
    const { container } = render(
      <Message {...defaultProps} isCurrentUser={true} />
    );

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('24.04.2024')).toBeInTheDocument();

    const iconDropdown = container.querySelector('.fa-ellipsis-vertical');
    expect(iconDropdown).toBeInTheDocument();
  });

  it('opens dropdown and displays options when clicked', () => {
    const { container } = render(
      <Message {...defaultProps} isCurrentUser={true} />
    );
    const iconDropdown = container.querySelector('.fa-ellipsis-vertical');

    fireEvent.click(iconDropdown!);

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  test('triggers onEdit when "Edit" is selected from dropdown', () => {
    const onEdit = jest.fn();
    const { container } = render(
      <Message {...defaultProps} isCurrentUser={true} onEdit={onEdit} />
    );

    const iconDropdown = container.querySelector('.fa-ellipsis-vertical');
    fireEvent.click(iconDropdown!);

    fireEvent.click(screen.getByText('Edit'));

    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  test('triggers onDelete when "Delete" is selected from dropdown', () => {
    const onDelete = jest.fn();
    const { container } = render(
      <Message {...defaultProps} isCurrentUser={true} onDelete={onDelete} />
    );

    const iconDropdown = container.querySelector('.fa-ellipsis-vertical');
    fireEvent.click(iconDropdown!);

    fireEvent.click(screen.getByText('Delete'));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot Member', () => {
    const { container } = render(
      <Message {...defaultProps} isCurrentUser={false} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should be render match to snapshot user', () => {
    const { container } = render(
      <Message {...defaultProps} isCurrentUser={true} />
    );

    expect(container).toMatchSnapshot();
  });
});
