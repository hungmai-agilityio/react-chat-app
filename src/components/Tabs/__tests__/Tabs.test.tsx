import { fireEvent, render, screen } from '@testing-library/react';

// Components
import { Tabs } from '@/components/Tabs';
import { ITab } from '@/components/Tabs/Tab';

describe('Tabs', () => {
  const listTabUsers: Omit<ITab, 'index' | 'onClick'>[] = [
    {
      title: 'Option 1',
      value: '1'
    },
    {
      title: 'Option 2',
      value: '2'
    },
    {
      title: 'Option 3',
      value: '3'
    }
  ];

  const propsDefault = {
    list: listTabUsers,
    index: '1',
    onClick: jest.fn()
  };

  it('render default', () => {
    render(<Tabs {...propsDefault} />);
    const element = screen.getByText(/Option 1/);

    expect(element).toBeInTheDocument();
  });

  it('render when click tab', () => {
    render(<Tabs {...propsDefault} />);
    const element = screen.getAllByRole('button');
    fireEvent.click(element[0]);

    expect(propsDefault.onClick).toBeCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Tabs {...propsDefault} />);

    expect({ container }).toMatchSnapshot();
  });
});
