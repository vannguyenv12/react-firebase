import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.slice";
import { useEffect } from "react";

import { signOut } from "firebase/auth";
import { Button } from "bootstrap";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const data = { email: user.email, access_token: user.accessToken };
        dispatch(setCurrentUser(data));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out success!");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <button onClick={handleSignOut}>Sign Out</button>

      <Outlet />
    </>
  );
}

export default App;
