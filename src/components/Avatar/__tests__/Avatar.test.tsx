import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Constants
import { SIZE } from '@/constants';

// Components
import Avatar from '@/components/Avatar';

describe('Avatar', () => {
  const propsDefault = {
    avatar: '',
    name: 'avatar',
    circle: false
  };

  it('renders avatar with image', () => {
    render(
      <Avatar
        {...propsDefault}
        avatar="assets/images/mock-image.jpg"
        size={SIZE.SMALL}
      />
    );

    const avatarImage = screen.getByAltText(propsDefault.name);
    expect(avatarImage).toBeInTheDocument();
  });

  it('renders avatar without image', () => {
    render(<Avatar {...propsDefault} avatar="" />);

    const avatarText = screen.getByText(
      propsDefault.name.charAt(0).toUpperCase()
    );
    expect(avatarText).toBeInTheDocument();
  });

  it('renders circle avatar', () => {
    render(
      <Avatar
        {...propsDefault}
        circle={true}
        avatar="assets/images/mock-image.jpg"
      />
    );

    const avatarElement = screen.getByAltText(propsDefault.name);
    expect(avatarElement).toHaveClass('rounded-full');
  });

  it('should render match to snapshot', () => {
    const { container } = render(<Avatar {...propsDefault} />);

    expect(container).toMatchSnapshot();
  });
});
