import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';

// Firebases
import { auth } from '../fireBase/config';

// Constants
import { URL } from '@/constants';

// Layouts
import Layout from '@/layouts';

// Components
import Loading from '@/components/Loading';

// Pages
import Profile from '@/Pages/Profile';
import SignUpPage from '@/Pages/SignUp';
import SignInPage from '@/Pages/SignIn';
import NotFound from '@/Pages/NotFound';

const App = () => {
  const navigate = useNavigate();
  const { HOME, PROFILE, SIGN_IN, SIGN_UP } = URL;

  const [loading, setLoading] = useState<boolean>(true);

  // Effect to handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setLoading(false);

      const isAuthPath = [SIGN_IN, SIGN_UP].includes(window.location.pathname);
      if (!user && !isAuthPath) {
        navigate(SIGN_IN);
      }
    });

    return () => unsubscribe();
  }, [navigate, SIGN_IN, SIGN_UP]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="font-roboto">
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route path="chat/:id" element={<Layout />} />
        </Route>
        <Route path={PROFILE} element={<Profile />} />
        <Route path={SIGN_IN} element={<SignInPage />} />
        <Route path={SIGN_UP} element={<SignUpPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
