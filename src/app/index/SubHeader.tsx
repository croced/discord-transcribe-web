"use client";

import React, { useEffect, useState } from "react";
import { SIGN_IN_HINT } from "../../constants";
import { Session } from "@supabase/supabase-js";
import DashboardButton from "./components/DashboardButton";
import LoginButton from "./components/LoginButton";
import DocumentationButton from "./components/DocumentationButton";
import Button from "@/components/common/ui/Button";
import { supabase } from "@/util/supabase";

export default function SubHeader() {
  const [session, setSession] = React.useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const { data } = (await supabase.auth.getSession()) || {};

      if (!data?.session) setSession(null);
      else setSession(data.session);

      setIsLoading(false);
    }

    fetchSession();
  }, []);

  const renderSignIn = () => {
    return (
      <>
        <p className="text-middle hidden md:block md:flex-grow-1">
          {SIGN_IN_HINT}
        </p>
        <LoginButton />
      </>
    );
  };

  const renderSignOut = () => {
    if (!session) return <Button>(Loading)</Button>;

    return (
      <>
        <p className="text-middle hidden md:block md:flex-grow-1">
          Hello,{" "}
          {session.user.user_metadata.full_name + " 👋" ||
            "fancy seeing you here!"}
        </p>
        <DashboardButton />
      </>
    );
  };

  return isLoading ? (
    <>
      <div className="mx-4 h-[5%] flex gap-x-2 justify-center items-center font-mono">
        <div className="mx-4 w-full bg-white loading-bar-container">
          <div className="loading-bar" />
        </div>
      </div>
    </>
  ) : (
    <>
      {/* SUB-HEADER AREA */}
      <div className="mx-4 h-[5%] flex gap-x-2 justify-between items-center font-mono">
        <DocumentationButton />

        {session ? renderSignOut() : renderSignIn()}
      </div>
    </>
  );
}
