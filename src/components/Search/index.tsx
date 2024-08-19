import { ChangeEvent, memo } from 'react';

// FontAwesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SearchProps {
  value: string;
  icon?: IconDefinition;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = memo(({ value, icon, onChange }: SearchProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className="relative">
      <input
        className="border border-gray-300 focus:border-primary outline-none w-full h-10 pl-4 pr-9"
        placeholder="Search"
        onChange={handleInputChange}
        value={value}
      />

      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute top-3 right-3 text-gray-500 cursor-pointer"
        />
      )}
    </div>
  );
});

export default Search;
