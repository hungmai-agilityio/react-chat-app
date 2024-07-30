import { convertBase64, DateConversion, timeStampConversion } from '@/utils';

describe('timeStampConversion', () => {
  it('should return time in HH:mm format if the timestamp is from today', () => {
    const now = new Date();
    const timeStamp = now.toISOString();

    const result = timeStampConversion(timeStamp);

    //So it will render HH:mm for new Date (example: 14: 30)
    const expectedHours = now.getHours().toString().padStart(2, '0');
    const expectedMinutes = now.getMinutes().toString().padStart(2, '0');
    const expectedTime = `${expectedHours}:${expectedMinutes}`;

    expect(result).toBe(expectedTime);
  });

  it('should return date in dd.MM.yyyy format if the timestamp is not from today', () => {
    const timeStamp = '2023-06-15T08:35:00.000Z';

    const result = timeStampConversion(timeStamp);

    const expectedDay = '15';
    const expectedMonth = '06';
    const expectedYear = '2023';
    const expectedDate = `${expectedDay}.${expectedMonth}.${expectedYear}`;

    expect(result).toBe(expectedDate);
  });
});

describe('convertBase64', () => {
  it('should return base64 string', async () => {
    const file = new File([''], 'file');
    await expect(convertBase64(file)).resolves.toContain('data:application');
  });

  it('should fails with an error', async () => {
    await expect(convertBase64({} as File)).rejects.toThrowError();
  });

  describe('DateConversion', () => {
    const now = new Date();

    it('should return today', () => {
      const result = DateConversion(now);
      expect(result).toBe('Today');
    });

    it('should return yesterday', () => {
      const yesterday = new Date();
      yesterday.setDate(now.getDate() - 1);

      const result = DateConversion(yesterday);
      expect(result).toBe('Yesterday');
    });

    it('should return other date format', () => {
      const otherDay = new Date('2023-06-15T08:35:00.000Z');
      const result = DateConversion(otherDay);
      expect(result).toBe(otherDay.toDateString());
    });
  });
});
