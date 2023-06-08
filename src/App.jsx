/* eslint-disable no-undef */
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { setUser, toggleLoading } from './features/auth/authSlice';
import auth from './firebase/firebase.config';
import routes from './routes/routes';

const App = () => {
  // console.log(process.env);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(setUser(user.email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch])
  return (
    <div className='font-Poppins pt-16'>
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App