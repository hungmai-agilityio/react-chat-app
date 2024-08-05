import { ChangeEvent, useRef } from 'react';

// Constants
import { SIZE, TYPE } from '@/constants';

// Utils
import { convertBase64 } from '@/utils';

// FontAwesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Components
import Avatar from '@/components/Avatar';
import Input from '@/components/Input';
import Button from '@/components/Button';

interface ModalActionProps {
  btnName?: string;
  onClick?: () => void;
  icon?: IconDefinition;
  avatar?: string;
  name?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onAvatarChange?: (avatar: string) => void;
}

const ModalAction = ({
  avatar,
  name,
  btnName,
  onClick,
  onChange,
  icon,
  onAvatarChange
}: ModalActionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle upload image and convert to base64
  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const file = files && files[0];
    if (file) {
      const base64 = (await convertBase64(file)) as string;
      if (onAvatarChange) {
        onAvatarChange(base64);
      }
    }
  };

  // Trigger file input click
  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="relative mt-5">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Avatar
          name={name}
          avatar={avatar || ''}
          size={SIZE.LARGE}
          onClick={handleAvatarClick}
          styles="rounded-lg"
        />
        <input
          ref={fileInputRef}
          onChange={handleUploadImage}
          id="upload"
          type={TYPE.FILE}
          className="hidden"
          accept="image/*"
          data-testid="file-input"
        />
      </div>
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
        <div className="mt-4 w-72">
          <Input
            placeholder="Chat name"
            variant={TYPE.TERTIARY}
            value={name || ''}
            onChange={onChange}
          />
        </div>
      </div>
      {btnName && (
        <div className="absolute top-lg right-xs">
          <Button
            name={btnName}
            onClick={onClick!}
            iconRight={icon}
            variant={TYPE.PRIMARY}
            size={SIZE.MEDIUM}
            disabled={!name?.trim()}
          />
        </div>
      )}
    </div>
  );
};

export default ModalAction;
