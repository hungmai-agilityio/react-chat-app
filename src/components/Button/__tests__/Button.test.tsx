import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Button from '@/components/Button';

// Constants
import { SIZE, TYPE } from '@/constants';

// FontAwesome
import { faAdd, faEdit } from '@fortawesome/free-solid-svg-icons';

describe('Button Component', () => {
  const onClickMock = jest.fn();

  it('renders default Button', () => {
    const { getByText } = render(
      <Button name="Click me" onClick={onClickMock} />
    );

    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders custom Button', () => {
    const { getByText } = render(
      <Button
        name="Click me"
        onClick={onClickMock}
        size={SIZE.MEDIUM}
        variant={TYPE.SECOND}
      />
    );

    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders custom with icon', () => {
    const { getByText } = render(
      <Button
        name="Click me"
        onClick={onClickMock}
        size={SIZE.MEDIUM}
        variant={TYPE.SECOND}
        iconLeft={faEdit}
        iconRight={faAdd}
      />
    );

    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders disabled Button', () => {
    render(
      <Button
        name="Click me"
        onClick={onClickMock}
        size={SIZE.MEDIUM}
        variant={TYPE.SECOND}
        isDisabled
      />
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const { getByText } = render(
      <Button name="Click me" onClick={onClickMock} />
    );

    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <Button name="Click me" onClick={onClickMock} size={SIZE.MEDIUM} />
    );

    expect(container).toMatchSnapshot();
  });
});
