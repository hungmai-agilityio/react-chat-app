import { useEffect, useState } from 'react';
import useSWR from 'swr';

// Interfaces
import { ApiResponse, IProfile, IUser } from '@/interfaces';

//Constants
import { END_POINT } from '@/constants';

// Services
import { getProfileByUserId, getUsers } from '@/services';

// Get data users and profiles
export const useUsersWithProfiles = () => {
  const { data: usersData, error: usersError } = useSWR<ApiResponse<IUser[]>>(END_POINT.USER, getUsers);
  const [profiles, setProfiles] = useState<Record<string, IProfile>>({});

  useEffect(() => {
    const fetchData = async () => {
      if (usersData?.data) {
        const userIds = usersData.data.map((user) => user.id);

        // Fetch profiles
        const profilesData = await Promise.all(userIds.map((userId) => getProfileByUserId(userId).then(res => res.data)));

        // Create profiles object
        const profiles = profilesData.reduce((acc, profile) => {
          if (profile) acc[profile.user_id] = profile;
          return acc;
        }, {} as Record<string, IProfile>);

        setProfiles(profiles);
      }
    };

    fetchData();
  }, [usersData]);

  return {
    users: usersData?.data || [],
    profiles,
    isLoading: !usersData && !usersError,
    isError: !!usersError
  };
};