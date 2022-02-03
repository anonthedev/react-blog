import "./Header.css";

import { useState, useEffect } from "react";

import { auth, provider, signInWithPopup } from "../firebase";

import { useDispatch, useSelector } from "react-redux";

import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const [ShowSignOut, setShowSignOut] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider).then((result) => {
        setUser(result.user);
      });
    } else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
      });
    }
  };

  function setUser(user) {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  function ChangeShowSignOut() {
    setShowSignOut(!ShowSignOut);
  }

  return (
    <header className="header">
      <section className="header-top">
        <div className="header-title">
          <h1 className="gradient">the space.</h1>
        </div>
        <div className="sign-in-btn">
          {!username ? (
            <button onClick={handleAuth}> Sign In</button>
          ) : (
            <div>
              <img
                className="pfp"
                src={userPhoto}
                alt={username}
                onClick={ChangeShowSignOut}
              />
              <span
                id="sign-out"
                className={
                  !ShowSignOut ? "sign-out-hidden" : "sign-out-visible"
                }
                onClick={handleAuth}
              >
                Sign Out
              </span>
            </div>
          )}
        </div>
      </section>
      <div className="blogger-title">
        <h2 className="gradient">{!username ? "Blog" : `${username}'s Blog`}</h2>
      </div>
    </header>
  );
}

export default Header;
