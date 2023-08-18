"use client";

import Button from "@/components/common/ui/Button";
import React from "react";
import Image from "next/image";
import { supabase } from "@/util/supabase";

export default function LoginButton() {
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
  };

  return (
    <Button onClick={handleSignIn}>
      <Image
        src="/assets/icons/sign-in.svg"
        alt="Sign in"
        width={20}
        height={20}
        style={{ width: 20, height: 20 }} // necessary to shut nextjs warnings up
        className="mr-2"
      />
      Sign in
    </Button>
  );
}
