import { ChangeEvent } from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

// Constants
import { SIZE, TYPE } from '@/constants';

// Components
import Avatar from '@/components/Avatar';
import Input from '@/components/Input';

interface UploadProps {
  htmlFor: string;
  avatar: string;
  name: string;
  onImageChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Upload = ({ htmlFor, avatar, name, onImageChange }: UploadProps) => {
  return (
    <div className="relative">
      <Avatar avatar={avatar} name={name} size={SIZE.LARGE} circle />
      <Input
        onChange={onImageChange}
        htmlFor={htmlFor}
        type={TYPE.FILE}
        styles="hidden"
      />
      <label
        htmlFor={htmlFor}
        className="cursor-pointer absolute top-24 left-24"
      >
        <FontAwesomeIcon
          icon={faCamera}
          className="w-5 h-5 border p-1 rounded-full bg-white border-white"
        />
      </label>
    </div>
  );
};

export default Upload;
