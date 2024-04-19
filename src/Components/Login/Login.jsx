import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleAuthProvider = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        //stored user in a state . so you can easily show it in UI
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGitHubAuthProvider = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const loggedInUser = result.user;
        //stored user in a state . so you can easily show it in UI
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        console.log("error:", error.message);
      });
  };
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex gap-5 ">
        {user ? (
          <button onClick={handleSignOut} className="p-2 border-2 border-black hover:bg-red-500  rounded-lg  text-black hover:text-white text-xl">
            Sign Out
          </button>
        ) : (
          <div className=" flex gap-5">
            <button onClick={handleGoogleAuthProvider} className="p-3 border-2 border-black hover:bg-blue-500  rounded-lg text-black hover:text-white text-xl">
              Google Login
            </button>

            <button onClick={handleGitHubAuthProvider} className="p-3 border-2 border-black hover:bg-blue-500  rounded-lg text-black hover:text-white text-xl">
              GitHub Login
            </button>
          </div>
        )}
      </div>

      {user && (
        <div className="text-xl flex gap-3 border-2 rounded-lg border-green-500 p-5">
          <img className="rounded-lg  w-40" src={user.photoURL} alt="user image" />
          <div className="">
            <h3 className="text-2xl">User: {user.displayName}</h3>
            <h3 className="text-2xl">Email: {user.email}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
