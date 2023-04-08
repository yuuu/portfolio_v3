import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { Auth } from 'aws-amplify'
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// import { Hub } from 'aws-amplify'

export const Footer: React.FC = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  // const fetchCurrentUser = async () => {
  //   const user = await Auth.currentUserInfo()
  //   setCurrentUser(user)
  // }

  // useEffect(() => {
  //   fetchCurrentUser()
  // }, [])

  // Hub.listen('auth', fetchCurrentUser)

  const onClickSignOut = async () => {
    // await Auth.signOut()
    setCurrentUser(null);
    toast.success("Signout Successfully");
    router.push("/");
  };

  return (
    <footer className="bg-gray-800 body-font">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <p className="flex flex-col text-white sm:py-2">
            <span className="text-xs">
              Copyright © {new Date().getFullYear()} yuuu. All Rights Reserved.
            </span>
          </p>
          <span className="inline-flex flex-col sm:ml-auto justify-end">
            {currentUser ? (
              <button
                className="text-sm text-white text-right"
                onClick={onClickSignOut}
              >
                SignOut
              </button>
            ) : (
              <Link href="/admin/profile/edit">
                <button className="text-sm text-white text-right">
                  Signin
                </button>
              </Link>
            )}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
