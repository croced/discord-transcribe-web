"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SIGN_IN_HINT } from "../../constants";
import { useRouter } from "next/navigation";
import { supabase } from "@/util/supabase";

const SubHeader: React.FC = () => {
  const router = useRouter();

  const [session, setSession] = useState<any>(null);

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      // options: {
      //   redirectTo: `${window.location.origin}/app`,
      //   },
    });

    router.refresh();
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    setSession(null);

    router.refresh();
  };

  const retrieveSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (data) {
      console.log("session data", data.session);
      setSession(data.session);
    } else {
      console.log("session error", error);
    }
  };

  useEffect(() => {
    retrieveSession();
  }, []);

  const renderSignIn = () => {
    return (
      <>
        <p className="text-middle hidden md:block md:flex-grow-1">
          {SIGN_IN_HINT}
        </p>
        <div
          className="flex flex-grow md:flex-grow-0 justify-between rounded-3xl hover:cursor-pointer bg-primary-100 hover:bg-primary-50 transition-colors duration-300 ease-in-out"
          onClick={handleSignIn}
        >
          <a className="flex flex-grow md:flex-grow-0 items-center justify-center py-2 px-8 text-xs md:text-sm">
            <Image
              src="/assets/icons/sign-in.svg"
              alt="Sign in"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in
          </a>
        </div>
      </>
    );
  };

  const renderSignOut = () => {
    return (
      <>
        <p className="text-middle hidden md:block md:flex-grow-1">
          Hello, {session.user.user_metadata.full_name} 👋
        </p>
        <div
          className="flex flex-grow md:flex-grow-0 justify-between rounded-3xl hover:cursor-pointer bg-primary-100 hover:bg-primary-50 transition-colors duration-300 ease-in-out"
          onClick={handleSignOut}
        >
          <a className="flex flex-grow md:flex-grow-0 items-center justify-center py-2 px-8 text-xs md:text-sm">
            <Image
              src="/assets/icons/sign-out.svg"
              alt="Sign out"
              width={12}
              height={12}
              className="mr-2"
            />
            Sign out
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      {/* SUB-HEADER AREA */}
      <div className="mx-4 h-[5%] flex gap-x-2 justify-between items-center font-mono">
        <div className="flex flex-grow md:flex-grow-0 justify-between rounded-3xl hover:cursor-pointer bg-primary-100 hover:bg-primary-50 transition-colors duration-300 ease-in-out">
          <a className="flex flex-grow md:flex-grow-0 items-center justify-center py-2 px-8  text-xs md:text-sm">
            <Image
              src="/assets/icons/documentation.svg"
              alt="Documentation"
              width={20}
              height={20}
              className="mr-2"
              aria-hidden
            />
            Documentation
          </a>
        </div>

        {session ? renderSignOut() : renderSignIn()}
      </div>
    </>
  );
};

export default SubHeader;
