import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

// Constants
import { SIZE, TYPE, URL } from '@/constants';

// Components
import Button from '@/components/Button';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = useCallback(() => {
    navigate(URL.HOME);
  }, [navigate]);

  return (
    <div className="bg-not-found flex flex-col items-center h-screen">
      <div className="mb-8">
        <img src="/assets/images/404.gif" alt="404 page" />
      </div>

      <Button
        name="Go Home"
        variant={TYPE.PRIMARY}
        size={SIZE.SMALL}
        onClick={handleBackHome}
      />
    </div>
  );
};

export default NotFound;
