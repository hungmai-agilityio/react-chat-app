import { fireEvent, render, screen } from '@testing-library/react';

// FontAwesome
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//Components
import ModalAction from '@/components/Modal/Action';

describe('Modal Action', () => {
  const onClickMock = jest.fn();

  const defaultProps = {
    avatar: '',
    onChange: onClickMock,
    name: '',
    icon: faArrowRight
  };

  beforeEach(() => {
    jest.fn().mockClear();
  });

  it('triggers file upload when avatar is clicked', () => {
    render(<ModalAction {...defaultProps} />);
    const avatarElement = screen.getByTestId('avatar');
    const inputFile = screen.getByTestId('file-input') as HTMLInputElement;

    fireEvent.click(avatarElement);
    const file = new File(['dummy content'], 'example.png', {
      type: 'image/png'
    });

    fireEvent.change(inputFile, { target: { files: [file] } });

    expect(inputFile.files?.[0]).toBeTruthy();
    expect(inputFile.files?.[0].name).toBe('example.png');
  });

  it('should render with btnName and button is clicked', () => {
    render(
      <ModalAction {...defaultProps} btnName="Save" name='Test' onClick={onClickMock} />
    );

    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

    it('should render match to snapshot - Default', () => {
      const { container } = render(
        <ModalAction
          {...defaultProps}
        />
      );
      expect(container).toMatchSnapshot();
    });

    it('should render match to snapshot - Button click', () => {
      const { container } = render(
        <ModalAction
          {...defaultProps}
          btnName="Save"
          onClick={onClickMock}
        />
      );
      expect(container).toMatchSnapshot();
    });
});
