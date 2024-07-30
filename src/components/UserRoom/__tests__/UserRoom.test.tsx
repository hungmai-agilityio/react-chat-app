import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

// Components
import { UserRoom } from '@/components/UserRoom';

const propsDefault = {
  id: '9f8a0e26-7761-4e8a-9a64-51ec044fd20f',
  avatar: '',
  name: 'user',
  isActive: true,
  time_stamp: '2024-07-01T02:58:05.791Z',
  path: '/'
};

const onSelectMock = jest.fn();

describe('User room', () => {
  it('renders default item user', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[propsDefault.path]}>
        <UserRoom {...propsDefault} onSelect={onSelectMock} />
      </MemoryRouter>
    );

    const element = screen.getByText(/user/);
    expect(element).toBeInTheDocument();

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('renders item chat with groups', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[propsDefault.path]}>
        <UserRoom
          {...propsDefault}
          isGroup={true}
          message="Hello"
          onSelect={onSelectMock}
        />
      </MemoryRouter>
    );

    const svgElement = container.querySelector('svg');
    expect(svgElement).not.toBeInTheDocument();
  });

  it('should call onSelect with item id when item is clicked', () => {
    render(
      <MemoryRouter initialEntries={[propsDefault.path]}>
        <UserRoom {...propsDefault} onSelect={onSelectMock} />
      </MemoryRouter>
    );

    const itemElement = screen.getByText(/user/);
    fireEvent.click(itemElement);
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });

  it('should render item with active status', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[propsDefault.path]}>
        <UserRoom {...propsDefault} isActive={true} onSelect={onSelectMock} />
      </MemoryRouter>
    );

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('text-green-500');
  });

  it('should render item with inactive status', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[propsDefault.path]}>
        <UserRoom {...propsDefault} isActive={false} onSelect={onSelectMock} />
      </MemoryRouter>
    );

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('text-gray-400');
  });

  it('should be render match to snapshot with group', () => {
    const { container } = render(
      <BrowserRouter>
        <UserRoom
          {...propsDefault}
          isGroup={true}
          message="Hello"
          onSelect={onSelectMock}
        />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it('should be render match to snapshot with user', () => {
    const { container } = render(
      <BrowserRouter>
        <UserRoom {...propsDefault} onSelect={onSelectMock} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
