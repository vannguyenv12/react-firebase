import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";

function App() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("app: ", user);
    } else {
      console.log("signed out");
    }
  });

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
