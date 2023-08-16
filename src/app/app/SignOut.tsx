"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const SignOut: React.FC = async () => {
  const supabase = createClientComponentClient();

  const [session, setSession] = useState<any>(null);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    setSession(null);

    redirect("/");
  };

  return (
    <div onClick={handleSignOut}>
      <h1>SignOut</h1>
    </div>
  );
};

export default SignOut;
