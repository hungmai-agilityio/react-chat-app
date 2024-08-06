import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Constants
import { MESSAGE_API, MESSAGE_VALID, SIZE, TYPE } from '@/constants';

// Utils
import { convertBase64, validateForm } from '@/utils';

// Interfaces
import { IProfile, IUser } from '@/interfaces';

// Services
import { getUserByEmail, updateUser } from '@/services';

// Stores
import { useAuthStore } from '@/stores';

// Components
import { Button, Input, Upload } from '@/components';

const Profile = memo(() => {
  const navigate = useNavigate();
  const { currentUser, currentUserProfile, fetchUserData } = useAuthStore();

  const [uploadImage, setUploadImage] = useState<string>(
    currentUserProfile?.avatar || ''
  );
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {}
  );
  const [authMessage, setAuthMessage] = useState<string>('');
  const [user, setUser] = useState<IUser>({
    id: '',
    password: '',
    userName: '',
    email: '',
    created_at: new Date(),
    updated_at: new Date()
  });
  const [profile, setProfile] = useState<IProfile>({
    id: '',
    user_id: currentUser?.id,
    avatar: currentUser?.avatar || '',
    phone: currentUser?.phone || ''
  });

  // Fetch user data if currentUser is not available
  useEffect(() => {
    if (!currentUser) {
      fetchUserData();
      return;
    }

    setUser(currentUser as IUser);

    if (currentUserProfile) {
      setProfile(currentUserProfile as IProfile);
    }
  }, [navigate, currentUserProfile, currentUser, fetchUserData]);

  // Handle Upload image
  const handleUploadImage = useCallback(
    async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      const file = files && files[0];
      if (file) {
        const base64 = (await convertBase64(file)) as string;
        setUploadImage(base64);
        setProfile((prevProfile) => ({
          ...prevProfile,
          avatar: base64
        }));
      }
    },
    []
  );

  // Handle update user profile
  const handleUpdateProfile = useCallback(async () => {
    const data = {
      name: user.userName
    };

    // Validate user data
    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length) {
      setErrorMessage(validationErrors);
      return;
    }
    setErrorMessage({});

    const existingUser = await getUserByEmail(user.email);
    if (existingUser.data && existingUser.data.id !== user.id) {
      setAuthMessage(MESSAGE_VALID.EMAIL_EXIST);
      return;
    }
    const userData = {
      ...user,
      userName: user.userName,
      updated_at: new Date()
    };

    const profileData = {
      avatar: uploadImage || profile.avatar,
      phone: profile.phone
    };

    // Update user document
    const accountResponse = await updateUser('users', user.id, userData);
    const profileResponse = await updateUser(
      'profiles',
      profile.id,
      profileData
    );

    if (!accountResponse.data || !profileResponse.data) {
      setAuthMessage(MESSAGE_API.UPDATE_PROFILE_ERROR);
      return;
    }
  }, [profile, uploadImage, user]);

  // Handle change user value
  const handleUserChange =
    (field: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setUser((prevUser) => ({
        ...prevUser,
        [field]: value
      }));
    };

  // Handle change profile value
  const handleProfileChange =
    (field: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setProfile((prevProfile) => ({
        ...prevProfile,
        [field]: value
      }));
    };

  const idCode = user?.id.split('-').join('');

  return (
    <div className=" p-8 rounded-2xl">
      <div className="flex gap-20 item-center mt-4">
        <div className="w-2/4 mt-4 ">
          <Upload
            avatar={uploadImage || profile.avatar}
            name={user?.userName}
            htmlFor="upload-profile"
            onImageChange={handleUploadImage}
          />
        </div>
        <div className="w-full">
          <Input
            variant={TYPE.TERTIARY}
            htmlFor="id-code"
            label="ID"
            value={idCode}
            disabled
          />
          <Input
            variant={TYPE.TERTIARY}
            htmlFor="fullName"
            label="Full Name"
            value={user?.userName}
            message={errorMessage?.name}
            onChange={handleUserChange('userName')}
          />
          <Input
            variant={TYPE.TERTIARY}
            htmlFor="email"
            label="Email"
            value={user?.email}
            disabled
          />
          <Input
            variant={TYPE.TERTIARY}
            htmlFor="phoneNumber"
            label="Phone Number"
            value={profile?.phone}
            onChange={handleProfileChange('phone')}
          />
        </div>
      </div>
      <div className="mt-5">
        <Button
          name="Update Profile"
          variant={TYPE.PRIMARY}
          size={SIZE.MEDIUM}
          onClick={handleUpdateProfile}
        />
      </div>
      <p className="text-lg mt-5 text-center">{authMessage}</p>
    </div>
  );
});

export default Profile;
