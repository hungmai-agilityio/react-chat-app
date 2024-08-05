import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';

// Firebases
import { auth } from '../firebase/config';

// Constants
import { URL } from '@/constants';

// Layouts
import Layout from '@/layouts';

// Components
import { ErrorBoundary, Loading } from '@/components';

// Pages
import Profile from '@/pages/Profile';
import SignUpPage from '@/pages/SignUp';
import SignInPage from '@/pages/SignIn';
import NotFound from '@/pages/NotFound';

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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;
