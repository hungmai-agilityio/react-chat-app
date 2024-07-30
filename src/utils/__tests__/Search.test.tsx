import { memberInfo } from '@/mocks';
import { searchFilter } from '@/utils';

describe('Search', () => {
  const data = [
    {
      id: '701796f0-0253-11ef-804b-d90ac4375227',
      name: 'Alice',
      avatar: '',
      isActive: true
    },
    {
      id: '701796f0-0253-11ef-804b-dr544375227',
      name: 'Charlie',
      avatar: '',
      isActive: false
    }
  ];

  it('should return all items when search value is empty', () => {
    const searchValue = '';
    const result = searchFilter(memberInfo, searchValue, ['name']);
    expect(result).toEqual(memberInfo);
  });

  it('should return filtered items based on search value', () => {
    const searchValue = 'a';
    const expected = data;
    const result = searchFilter(memberInfo, searchValue, ['name']);
    expect(result).toEqual(expected);
  });

  it('should return an empty array when no matching items are found', () => {
    const searchValue = 'xyz';
    const result = searchFilter(memberInfo, searchValue, ['name']);
    expect(result).toEqual([]);
  });
});
