import { debounce } from '../debounce';

describe('Debounce', () => {
  jest.useFakeTimers();

  it('Should display the data after the waiting period', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func);

    debouncedFunc();

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalled();
  });
});
