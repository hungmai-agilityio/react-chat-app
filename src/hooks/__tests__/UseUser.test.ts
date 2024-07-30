import { renderHook, waitFor } from '@testing-library/react';

// Services
import { getProfileByUserId, getUsers } from '@/services';

// Hooks
import { useUsersWithProfiles } from '@/hooks';

// Mock data
import { mockUsers } from '@/mocks';

// Mock the services
jest.mock('@/services', () => ({
  getUsers: jest.fn(),
  getProfileByUserId: jest.fn(),
}));

describe('useUsersWithProfiles', () => {
  const mockProfiles = [
    { id: '1c5mr5628-0253-11ef-804b-12gc375227', user_id: '8a741820-0253-11ef-804b-d90ac4375227', avatar: 'avatar1.png', phone: '' },
    { id: '701796f0-0253-11ef-804b-d90ac4375227', user_id: 'e7d1d160-078f-11ef-9ebd-d50e40f719a7', avatar: 'avatar2.png', phone: '0987654321' },
  ];

  it('should return users and profiles successfully', async () => {
    (getUsers as jest.Mock).mockResolvedValue({ data: mockUsers, error: null });
    (getProfileByUserId as jest.Mock).mockImplementation((userId: string) => {
      const profile = mockProfiles.find(profile => profile.user_id === userId);
      return Promise.resolve({ data: profile, error: null });
    });

    const { result } = renderHook(() => useUsersWithProfiles());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isError).toBe(false);
      expect(result.current.users).toEqual(mockUsers);
      expect(result.current.profiles).toEqual({
        '8a741820-0253-11ef-804b-d90ac4375227': mockProfiles[0],
        'e7d1d160-078f-11ef-9ebd-d50e40f719a7': mockProfiles[1],
      });
    });
  });
});
