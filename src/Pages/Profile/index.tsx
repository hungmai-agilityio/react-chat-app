import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Constants
import { MESSAGE_API, MESSAGE_VALID, SIZE, TYPE } from '@/constants';

// Font Awesome
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Utils
import { convertBase64, validateForm } from '@/utils';

// Interfaces
import { IProfile, IUser } from '@/interfaces';

// Services
import { getUserByEmail, updateUser } from '@/services';

// Stores
import { useAuthStore } from '@/stores';

// Components
import Button from '@/components/Button';
import Input from '@/components/Input';
import Upload from '@/components/Upload';

const Profile = () => {
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

  // Stores

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

  // Handle returns to the previous page
  const handleBackToResult = () => {
    navigate(-1);
  };

  // Handle Upload image
  const handleUploadImage = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  };

  // Handle update user profile
  const handleUpdateProfile = useCallback(async () => {
    const data = {
      name: user.userName,
      email: user.email
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
      email: user.email,
      updated_at: new Date()
    };

    const profileData = {
      avatar: uploadImage || profile.avatar,
      phone: profile.phone
    };

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
    setAuthMessage(MESSAGE_API.UPDATE_PROFILE_SUCCESS);
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
    <div className="h-screen bg-slate-300 bg-no-repeat bg-cover overflow-hidden text-dark">
      <div className="mt-40 w-5/12 m-auto bg-white p-8 rounded-2xl">
        <p
          className="cursor-pointer hover:text-primary w-max"
          onClick={handleBackToResult}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Return to
          result
        </p>
        <p className="mt-11 text-normal text-md font-bold">Account Setting</p>
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
              isDisabled
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
              message={errorMessage?.email}
              onChange={handleUserChange('email')}
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
    </div>
  );
};

export default Profile;
