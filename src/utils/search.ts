
/**
 * Function search filter data
 * @param {array} data data to search
 * @param {string} value value input
 * @param {array} keys keyword for search : Example: ['name', 'email', ...]
 * @returns data 
 */
export const searchFilter = <T>(data: T[], value: string, keys: (keyof T)[]): T[] => {
  if (!value) return data;

  const searchValue = value.toLowerCase();

  return data.filter(item =>
    keys.some(key =>
      String(item[key]).toLowerCase().includes(searchValue)
    )
  );
};