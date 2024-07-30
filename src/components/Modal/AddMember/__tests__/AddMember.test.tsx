import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock data
import { mockProfiles, mockUsers } from '@/mocks';

// Components
import AddMember from '@/components/Modal/AddMember';

const propsDefault = {
  users: mockUsers,
  profiles: mockProfiles,
  onChecked: jest.fn(),
  value: '',
  isActive: false,
  currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
  checkedUsers: []
};

describe('AddMember', () => {
  it('renders with default data', () => {
    render(<AddMember {...propsDefault} />);

    propsDefault.users.forEach((user) => {
      expect(screen.getByText(user.userName)).toBeInTheDocument();
    });
  });

  it('handles checked when checkbox is clicked', () => {
    render(<AddMember {...propsDefault} />);

    const checkbox = screen.getByText('Mary');
    fireEvent.click(checkbox);

    expect(propsDefault.onChecked).toHaveBeenCalledWith(
      '8a741820-0253-11ef-804b-d90ac4375227'
    );
  });

  it('handles search input and checks value', () => {
    render(<AddMember {...propsDefault} />);

    const searchInput = screen.queryByPlaceholderText(
      'Search'
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Faker' } });

    expect(searchInput.value).toBe('Faker');
  });

  it('render with checked members', () => {
    render(
      <AddMember
        {...propsDefault}
        checkedUsers={[
          'e7d1d160-078f-11ef-9ebd-d50e40f719a7',
          '8a741820-0253-11ef-804b-d90ac4375227'
        ]}
      />
    );

    propsDefault.users
      .filter((user) =>
        [
          'e7d1d160-078f-11ef-9ebd-d50e40f719a7',
          '8a741820-0253-11ef-804b-d90ac4375227'
        ].includes(user.id)
      )
      .forEach((user) => {
        const elements = screen.getAllByText(user.userName);
        expect(elements.length).toBeGreaterThan(0);
        elements.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      });
  });

  it('should be render match to snapshot when uncheck', () => {
    const { container } = render(<AddMember {...propsDefault} />);

    expect(container).toMatchSnapshot();
  });

  it('should be render match to snapshot when checked', () => {
    const { container } = render(
      <AddMember
        {...propsDefault}
        checkedUsers={[
          'e7d1d160-078f-11ef-9ebd-d50e40f719a7',
          '8a741820-0253-11ef-804b-d90ac4375227'
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
